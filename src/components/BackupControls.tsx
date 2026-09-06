import { useEffect, useState } from "react";

const BACKUP_TIME_KEY = "patent-last-backup-time";
const BACKUP_DIRTY_KEY = "patent-backup-dirty";

type BackupData = {
  version: 1;
  exportedAt: string;
  data: Record<string, string>;
};

function BackupControls() {
  const [lastBackupTime, setLastBackupTime] =
    useState<string | null>(() => {
      return localStorage.getItem(BACKUP_TIME_KEY);
    });

  const [isDirty, setIsDirty] = useState(() => {
    return (
      localStorage.getItem(BACKUP_DIRTY_KEY) === "true"
    );
  });

  /*
    메모나 별이 변경되면
    ChapterPage에서 발생시킨 이벤트를 받아
    화면의 백업 상태를 갱신
  */
  useEffect(() => {
    const handleStorageChange = () => {
      setLastBackupTime(
        localStorage.getItem(BACKUP_TIME_KEY)
      );

      setIsDirty(
        localStorage.getItem(BACKUP_DIRTY_KEY) ===
          "true"
      );
    };

    window.addEventListener(
      "patent-storage-change",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        "patent-storage-change",
        handleStorageChange
      );
    };
  }, []);

  /*
    백업하기
  */
  const handleBackup = () => {
    const data: Record<string, string> = {};

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (!key) continue;

      /*
        메모와 중요도만 백업
      */
      if (
        key.startsWith("patent-memo-") ||
        key.startsWith("patent-importance-")
      ) {
        const value = localStorage.getItem(key);

        if (value !== null) {
          data[key] = value;
        }
      }
    }

    const backupData: BackupData = {
      version: 1,
      exportedAt: new Date().toISOString(),
      data,
    };

    const blob = new Blob(
      [JSON.stringify(backupData, null, 2)],
      {
        type: "application/json",
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    
    link.href = url;
    link.download = "patent-law-backup.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    /*
      백업 완료 시간 저장
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

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const parsed = JSON.parse(
          String(reader.result)
        ) as BackupData;

        /*
          우리가 만든 백업 파일인지 확인
        */
        if (
          parsed.version !== 1 ||
          !parsed.data ||
          typeof parsed.data !== "object"
        ) {
          alert("올바른 백업 파일이 아닙니다.");
          return;
        }

        /*
          기존 메모/별 삭제

          → 백업 당시 상태와 정확히 똑같이 복원하기 위해
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
            (key.startsWith("patent-memo-") ||
              key.startsWith(
                "patent-importance-"
              ))
          ) {
            keysToRemove.push(key);
          }
        }

        keysToRemove.forEach((key) => {
          localStorage.removeItem(key);
        });

        /*
          백업 데이터 복원
        */
        Object.entries(parsed.data).forEach(
          ([key, value]) => {
            if (
              key.startsWith("patent-memo-") ||
              key.startsWith(
                "patent-importance-"
              )
            ) {
              localStorage.setItem(
                key,
                String(value)
              );
            }
          }
        );

        /*
          복원한 시점에서는
          백업과 현재 데이터가 동일하므로 false
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
          "백업을 불러왔습니다!"
        );

        window.location.reload();
      } catch {
        alert(
          "백업 파일을 읽을 수 없습니다."
        );
      }
    };

    reader.readAsText(file);

    /*
      같은 파일을 다시 선택할 수도 있게 초기화
    */
    event.target.value = "";
  };

  const formattedBackupTime = lastBackupTime
    ? new Date(lastBackupTime).toLocaleString(
        "ko-KR"
      )
    : "아직 백업하지 않음";

  return (
    <section className="backup-controls">
      <div className="backup-info">
        <div className="backup-title">
          데이터 백업
        </div>

        <div className="backup-time">
          마지막 백업: {formattedBackupTime}
        </div>

        {isDirty && (
          <div className="backup-warning">
            ⚠ 백업 이후 변경사항이 있습니다.
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