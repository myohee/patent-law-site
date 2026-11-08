
import { useEffect, useState } from "react";

type LawType = "patent" | "trademark" | "design";

type BackupControlsProps = {
  type: LawType;
};

type BackupData = {
  version: 1;
  law: LawType;
  exportedAt: string;
  data: Record<string, string>;
};

/*
  법률별 표시 이름과 백업 파일명
*/
const LAW_CONFIG: Record<
  LawType,
  {
    name: string;
    filename: string;
  }
> = {
  patent: {
    name: "특허법",
    filename: "patent-law-backup.json",
  },
  trademark: {
    name: "상표법",
    filename: "trademark-law-backup.json",
  },
  design: {
    name: "디자인보호법",
    filename: "design-law-backup.json",
  },
};

function BackupControls({
  type,
}: BackupControlsProps) {
  /*
    법률별 localStorage 키

    특허법:
    patent-memo-*
    patent-importance-*

    상표법:
    trademark-memo-*
    trademark-importance-*

    디자인보호법:
    design-memo-*
    design-importance-*

    백업 상태:
    ${type}-last-backup-time
    ${type}-backup-dirty
  */

  const BACKUP_TIME_KEY =
    `${type}-last-backup-time`;

  const BACKUP_DIRTY_KEY =
    `${type}-backup-dirty`;

  const STORAGE_CHANGE_EVENT =
    `${type}-storage-change`;

  const currentLaw = LAW_CONFIG[type];

  /*
    현재 법률의 메모/중요도 키인지 확인
  */
  const isBackupDataKey = (key: string) => {
    return (
      key.startsWith(`${type}-memo-`) ||
      key.startsWith(`${type}-importance-`)
    );
  };

  const [lastBackupTime, setLastBackupTime] =
    useState<string | null>(() => {
      return localStorage.getItem(
        BACKUP_TIME_KEY
      );
    });

  const [isDirty, setIsDirty] =
    useState(() => {
      return (
        localStorage.getItem(
          BACKUP_DIRTY_KEY
        ) === "true"
      );
    });

  /*
    법률 종류가 바뀌었을 때도
    현재 법률의 백업 상태를 읽는다.
  */
  useEffect(() => {
    const handleStorageChange = () => {
      setLastBackupTime(
        localStorage.getItem(
          BACKUP_TIME_KEY
        )
      );

      setIsDirty(
        localStorage.getItem(
          BACKUP_DIRTY_KEY
        ) === "true"
      );
    };

    handleStorageChange();

    window.addEventListener(
      STORAGE_CHANGE_EVENT,
      handleStorageChange
    );

    /*
      다른 탭에서 localStorage가
      변경된 경우에도 상태 갱신
    */
    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        STORAGE_CHANGE_EVENT,
        handleStorageChange
      );

      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, [
    BACKUP_TIME_KEY,
    BACKUP_DIRTY_KEY,
    STORAGE_CHANGE_EVENT,
  ]);

  /*
    백업하기
  */
  const handleBackup = () => {
    const data: Record<string, string> = {};

    for (
      let i = 0;
      i < localStorage.length;
      i++
    ) {
      const key = localStorage.key(i);

      if (!key) continue;

      /*
        현재 법률의 메모와 중요도만 백업
      */
      if (isBackupDataKey(key)) {
        const value =
          localStorage.getItem(key);

        if (value !== null) {
          data[key] = value;
        }
      }
    }

    const backupData: BackupData = {
      version: 1,
      law: type,
      exportedAt: new Date().toISOString(),
      data,
    };

    const blob = new Blob(
      [
        JSON.stringify(
          backupData,
          null,
          2
        ),
      ],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    /*
      법률별 파일명
    */
    link.download = currentLaw.filename;

    document.body.appendChild(link);

    link.click();

    link.remove();

    /*
      다운로드가 시작될 시간을 확보한 뒤
      임시 URL 해제
    */
    window.setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);

    /*
      해당 법률의 백업 완료 시간 저장
    */
    const backupTime =
      new Date().toISOString();

    localStorage.setItem(
      BACKUP_TIME_KEY,
      backupTime
    );

    localStorage.setItem(
      BACKUP_DIRTY_KEY,
      "false"
    );

    setLastBackupTime(backupTime);
    setIsDirty(false);
  };

  /*
    백업 불러오기
  */
  const handleRestore = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    /*
      같은 파일을 다시 선택할 수 있도록
      파일 선택값 초기화
    */
    event.target.value = "";

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const parsed: unknown = JSON.parse(
          String(reader.result)
        );

        /*
          기본적인 백업 파일 형식 확인
        */
        if (
          typeof parsed !== "object" ||
          parsed === null ||
          Array.isArray(parsed)
        ) {
          alert(
            "올바른 백업 파일이 아닙니다."
          );
          return;
        }

        const backup = parsed as Partial<BackupData>;

        if (
          backup.version !== 1 ||
          typeof backup.data !== "object" ||
          backup.data === null ||
          Array.isArray(backup.data)
        ) {
          alert(
            "올바른 백업 파일이 아닙니다."
          );
          return;
        }

        /*
          다른 법률의 백업 파일인지 확인

          기존 특허법·상표법 백업과
          호환되도록 law가 없는 파일도
          데이터 키를 통해 검사한다.
        */
        if (
          backup.law !== undefined &&
          backup.law !== type
        ) {
          const fileLaw =
            LAW_CONFIG[
              backup.law as LawType
            ];

          alert(
            `${
              fileLaw?.name ?? "다른 법률"
            } 백업 파일입니다. ${currentLaw.name} 백업 파일을 선택해주세요.`
          );

          return;
        }

        /*
          백업 데이터의 키와 값 검증

          다른 법률 데이터가 섞여 있거나
          문자열이 아닌 값이 있으면 복원 중단
        */
        const entries = Object.entries(
          backup.data
        );

        const isValidData = entries.every(
          ([key, value]) => {
            return (
              isBackupDataKey(key) &&
              typeof value === "string"
            );
          }
        );

        if (!isValidData) {
          alert(
            `${currentLaw.name} 백업 데이터가 올바르지 않습니다.`
          );
          return;
        }

        /*
          복원하면 기존 메모와 중요도가
          백업 파일 내용으로 교체된다.
        */
        const confirmed = window.confirm(
          `${currentLaw.name}의 현재 메모와 중요도를 백업 파일 내용으로 교체하시겠습니까?\n\n현재 데이터 중 백업 파일에 없는 항목은 삭제됩니다.`
        );

        if (!confirmed) return;

        /*
          기존의 해당 법률 데이터만 삭제

          디자인보호법 복원 시
          특허법·상표법 데이터는 유지
        */
        const keysToRemove: string[] = [];

        for (
          let i = 0;
          i < localStorage.length;
          i++
        ) {
          const key = localStorage.key(i);

          if (
            key &&
            isBackupDataKey(key)
          ) {
            keysToRemove.push(key);
          }
        }

        keysToRemove.forEach((key) => {
          localStorage.removeItem(key);
        });

        /*
          현재 법률 데이터만 복원
        */
        entries.forEach(([key, value]) => {
          localStorage.setItem(
            key,
            value
          );
        });

        /*
          복원 완료 시점 저장
        */
        const restoreTime =
          new Date().toISOString();

        localStorage.setItem(
          BACKUP_TIME_KEY,
          restoreTime
        );

        localStorage.setItem(
          BACKUP_DIRTY_KEY,
          "false"
        );

        alert(
          `${currentLaw.name} 백업을 불러왔습니다!`
        );

        /*
          복원된 메모와 중요도를
          즉시 화면에 반영
        */
        window.location.reload();
      } catch {
        alert(
          "백업 파일을 읽을 수 없습니다."
        );
      }
    };

    reader.onerror = () => {
      alert(
        "백업 파일을 읽을 수 없습니다."
      );
    };

    reader.readAsText(file);
  };

  const formattedBackupTime =
    lastBackupTime
      ? new Date(
          lastBackupTime
        ).toLocaleString("ko-KR")
      : "아직 백업하지 않음";

  return (
    <section className="backup-controls">
      <div className="backup-info">
        <div className="backup-title">
          {currentLaw.name} 데이터 백업
        </div>

        <div className="backup-time">
          마지막 백업:{" "}
          {formattedBackupTime}
        </div>

        {isDirty && (
          <div className="backup-warning">
            ⚠ 백업 이후 변경사항이
            있습니다.
          </div>
        )}
      </div>

      <div className="backup-actions">
        <button
          type="button"
          className="backup-button"
          onClick={handleBackup}
        >
          백업하기
        </button>

        <label className="backup-button backup-restore-button">
          백업 불러오기

          <input
            type="file"
            accept=".json,application/json"
            onChange={handleRestore}
          />
        </label>
      </div>
    </section>
  );
}

export default BackupControls;
