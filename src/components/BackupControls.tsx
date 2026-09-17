import { useEffect, useState } from "react";

type LawType = "patent" | "trademark";

type BackupControlsProps = {
  type: LawType;
};

type BackupData = {
  version: 1;
  law: LawType;
  exportedAt: string;
  data: Record<string, string>;
};

function BackupControls({
  type,
}: BackupControlsProps) {
  /*
    법별 localStorage 키

    특허법
    - patent-memo-*
    - patent-importance-*
    - patent-last-backup-time
    - patent-backup-dirty

    상표법
    - trademark-memo-*
    - trademark-importance-*
    - trademark-last-backup-time
    - trademark-backup-dirty
  */
  const BACKUP_TIME_KEY =
    `${type}-last-backup-time`;

  const BACKUP_DIRTY_KEY =
    `${type}-backup-dirty`;

  const STORAGE_CHANGE_EVENT =
    `${type}-storage-change`;

  /*
    현재 법에 해당하는
    메모/중요도 데이터인지 확인
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
    해당 법의 메모/별이 변경되면
    백업 상태 갱신
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

    window.addEventListener(
      STORAGE_CHANGE_EVENT,
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        STORAGE_CHANGE_EVENT,
        handleStorageChange
      );
    };
  }, [STORAGE_CHANGE_EVENT]);

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
        현재 법의
        메모와 중요도만 백업
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
      exportedAt:
        new Date().toISOString(),
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

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    /*
      법별 파일명
    */
    link.download =
      type === "patent"
        ? "patent-law-backup.json"
        : "trademark-law-backup.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    /*
      해당 법의 백업 완료 시간 저장
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
    const file =
      event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const parsed = JSON.parse(
          String(reader.result)
        ) as BackupData;

        /*
          기본적인 백업 파일 확인
        */
        if (
          parsed.version !== 1 ||
          !parsed.data ||
          typeof parsed.data !==
            "object"
        ) {
          alert(
            "올바른 백업 파일이 아닙니다."
          );
          return;
        }

        /*
          다른 법의 백업 파일을
          잘못 선택한 경우 방지
        */
        if (
          parsed.law &&
          parsed.law !== type
        ) {
          alert(
            type === "patent"
              ? "상표법 백업 파일입니다. 특허법 백업 파일을 선택해주세요."
              : "특허법 백업 파일입니다. 상표법 백업 파일을 선택해주세요."
          );

          return;
        }

        /*
          기존의 해당 법 데이터만 삭제

          특허법 복원 →
          상표법 데이터는 건드리지 않음

          상표법 복원 →
          특허법 데이터는 건드리지 않음
        */
        const keysToRemove: string[] =
          [];

        for (
          let i = 0;
          i < localStorage.length;
          i++
        ) {
          const key =
            localStorage.key(i);

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
          현재 법의 데이터만 복원
        */
        Object.entries(
          parsed.data
        ).forEach(([key, value]) => {
          if (isBackupDataKey(key)) {
            localStorage.setItem(
              key,
              String(value)
            );
          }
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
          type === "patent"
            ? "특허법 백업을 불러왔습니다!"
            : "상표법 백업을 불러왔습니다!"
        );

        /*
          복원된 메모/별을
          바로 화면에 반영
        */
        window.location.reload();
      } catch {
        alert(
          "백업 파일을 읽을 수 없습니다."
        );
      }
    };

    reader.readAsText(file);

    /*
      같은 파일을 다시 선택할 수 있도록 초기화
    */
    event.target.value = "";
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
          {type === "patent"
            ? "특허법 데이터 백업"
            : "상표법 데이터 백업"}
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