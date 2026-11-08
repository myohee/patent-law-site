
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import articles from "../data/designArticles.json";

type Article = {
  title: string;
  content: string;
};

const articleData = articles as Record<string, Article>;

const chapters = [
  { id: 1, title: "제1장 총칙", start: 1, end: 32 },
  {
    id: 2,
    title: "제2장 디자인등록요건 및 디자인등록출원",
    start: 33,
    end: 57,
  },
  { id: 3, title: "제3장 심사", start: 58, end: 78 },
  {
    id: 4,
    title: "제4장 등록료 및 디자인등록 등",
    start: 79,
    end: 89,
  },
  { id: 5, title: "제5장 디자인권", start: 90, end: 112 },
  {
    id: 6,
    title: "제6장 디자인권자의 보호",
    start: 113,
    end: 118,
  },
  { id: 7, title: "제7장 심판", start: 119, end: 157 },
  {
    id: 8,
    title: "제8장 재심 및 소송",
    start: 158,
    end: 172,
  },
  {
    id: 9,
    title: "제9장 국제출원",
    start: 173,
    end: 205,
  },
  { id: 10, title: "제10장 보칙", start: 206, end: 219 },
  { id: 11, title: "제11장 벌칙", start: 220, end: Infinity },
];

function getMainArticleNumber(articleNumber: string) {
  return Number(articleNumber.split("의")[0]);
}

function getArticleOrder(articleNumber: string) {
  const [main, sub = "0"] = articleNumber.split("의");
  return Number(main) * 1000 + Number(sub);
}

const markBackupDirty = () => {
  localStorage.setItem("design-backup-dirty", "true");
  window.dispatchEvent(new Event("design-storage-change"));
};

function ArticleImportance({
  articleNumber,
}: {
  articleNumber: string;
}) {
  const storageKey = `design-importance-${articleNumber}`;

  const [importance, setImportance] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? Number(saved) : 0;
  });

  const handleStarClick = (star: number) => {
    const nextImportance = importance === star ? 0 : star;

    setImportance(nextImportance);
    localStorage.setItem(storageKey, String(nextImportance));
    markBackupDirty();
  };

  return (
    <div
      className="article-importance"
      aria-label={`제${articleNumber}조 중요도 ${importance}`}
    >
      {[1, 2, 3].map((star) => (
        <button
          key={star}
          type="button"
          className="importance-star-button"
          onClick={() => handleStarClick(star)}
          aria-label={`중요도 ${star}`}
        >
          <span
            className={
              star <= importance
                ? "importance-star active"
                : "importance-star"
            }
          >
            ★
          </span>
        </button>
      ))}
    </div>
  );
}

/*
  메모 번호 자동 정렬

  1. 첫 번째
  2. 두 번째
    1. 하위 항목
    2. 하위 항목
  3. 세 번째
*/
function normalizeNumbering(text: string) {
  const counters: number[] = [];

  return text
    .split("\n")
    .map((line) => {
      const match = line.match(/^( *)(\d+)\.\s?(.*)$/);

      if (!match) return line;

      const level = Math.floor(match[1].length / 2);
      const content = match[3];

      if (counters[level] === undefined) {
        counters[level] = 0;
      }

      counters[level] += 1;
      counters.length = level + 1;

      return `${"  ".repeat(level)}${counters[level]}. ${content}`;
    })
    .join("\n");
}

function ArticleMemo({
  articleNumber,
}: {
  articleNumber: string;
}) {
  const storageKey = `design-memo-${articleNumber}`;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const memoRef = useRef(localStorage.getItem(storageKey) ?? "");
  const isComposingRef = useRef(false);

  /*
    메모는 React state로 관리하지 않는다.
    입력 중 리렌더링을 방지하기 위한 방식이다.
  */
  const resizeTextarea = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const saveMemo = (
    value: string,
    textarea?: HTMLTextAreaElement
  ) => {
    if (memoRef.current !== value) {
      memoRef.current = value;
      localStorage.setItem(storageKey, value);
      markBackupDirty();
    }

    if (textarea) {
      resizeTextarea(textarea);
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) resizeTextarea(textarea);
  }, []);

  /*
    번호 매기기 등으로 내용을 변경할 때
    textarea 값을 직접 수정한다.
  */
  const updateTextarea = (
    textarea: HTMLTextAreaElement,
    newValue: string,
    cursorPosition: number
  ) => {
    textarea.value = newValue;
    saveMemo(newValue, textarea);

    const position = Math.min(cursorPosition, newValue.length);
    textarea.setSelectionRange(position, position);
  };

  const getLineStart = (lines: string[], lineIndex: number) => {
    let position = 0;

    for (let i = 0; i < lineIndex; i++) {
      position += lines[i].length + 1;
    }

    return position;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const textarea = event.currentTarget;
    saveMemo(textarea.value, textarea);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    saveMemo(event.currentTarget.value);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (
      isComposingRef.current ||
      event.nativeEvent.isComposing ||
      event.keyCode === 229
    ) {
      return;
    }

    const textarea = event.currentTarget;
    const currentMemo = textarea.value;
    const start = textarea.selectionStart;

    const beforeCursor = currentMemo.slice(0, start);
    const lineIndex = beforeCursor.split("\n").length - 1;

    const lines = currentMemo.split("\n");
    const currentLine = lines[lineIndex] ?? "";

    const numberedMatch = currentLine.match(
      /^( *)(\d+)\.\s?(.*)$/
    );

    /* =========================
       Tab / Shift + Tab
    ========================= */

    if (event.key === "Tab") {
      event.preventDefault();

      if (numberedMatch) {
        const indent = numberedMatch[1];
        const content = numberedMatch[3];
        const currentLevel = Math.floor(indent.length / 2);

        if (event.shiftKey) {
          if (currentLevel === 0) return;

          lines[lineIndex] =
            `${"  ".repeat(currentLevel - 1)}1. ${content}`;
        } else {
          lines[lineIndex] =
            `${"  ".repeat(currentLevel + 1)}1. ${content}`;
        }

        const newMemo = normalizeNumbering(lines.join("\n"));
        const newLines = newMemo.split("\n");

        const newPosition =
          getLineStart(newLines, lineIndex) +
          newLines[lineIndex].length;

        updateTextarea(textarea, newMemo, newPosition);
        return;
      }

      /*
        번호 없는 문장도 들여쓰기 지원
      */
      if (event.shiftKey) {
        if (currentLine.startsWith("  ")) {
          lines[lineIndex] = currentLine.slice(2);
        }
      } else {
        lines[lineIndex] = `  ${currentLine}`;
      }

      const newMemo = lines.join("\n");
      const newLines = newMemo.split("\n");

      const newPosition =
        getLineStart(newLines, lineIndex) +
        newLines[lineIndex].length;

      updateTextarea(textarea, newMemo, newPosition);
      return;
    }

    /* =========================
       Enter
    ========================= */

    if (event.key === "Enter") {
      if (!numberedMatch) return;

      /*
        줄 중간에서 Enter를 누르면
        브라우저의 일반 줄바꿈을 사용한다.
      */
      const lineStart = getLineStart(lines, lineIndex);
      const lineEnd = lineStart + currentLine.length;

      if (start < lineEnd || textarea.selectionEnd !== start) {
        return;
      }

      event.preventDefault();

      const indent = numberedMatch[1];
      const content = numberedMatch[3];

      /*
        빈 번호에서 Enter:
        목록 종료
      */
      if (content.trim() === "") {
        lines[lineIndex] = "";

        const newMemo = normalizeNumbering(lines.join("\n"));
        const newLines = newMemo.split("\n");

        const newPosition = getLineStart(newLines, lineIndex);

        updateTextarea(textarea, newMemo, newPosition);
        return;
      }

      /*
        번호가 있는 줄에서 Enter:
        같은 단계의 다음 번호 생성
      */
      lines.splice(lineIndex + 1, 0, `${indent}1. `);

      const newMemo = normalizeNumbering(lines.join("\n"));
      const newLines = newMemo.split("\n");

      const nextLine = newLines[lineIndex + 1];
      const prefixMatch = nextLine.match(/^( *\d+\.\s)/);

      const newPosition =
        getLineStart(newLines, lineIndex + 1) +
        (prefixMatch?.[1].length ?? 0);

      updateTextarea(textarea, newMemo, newPosition);
    }
  };

  return (
    <aside className="article-memo">
      <textarea
        ref={textareaRef}
        className="article-memo-textarea"
        defaultValue={memoRef.current}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onCompositionStart={() => {
          isComposingRef.current = true;
        }}
        onCompositionEnd={(event) => {
          isComposingRef.current = false;
          saveMemo(event.currentTarget.value, event.currentTarget);
        }}
        placeholder="메모"
      />

      {memoRef.current.trim() && (
        <div className="article-memo-status">
          자동 저장됨
        </div>
      )}
    </aside>
  );
}

function DesignChapterPage() {
  const { chapterId } = useParams();
  const chapterNumber = Number(chapterId);

  const chapterIndex = chapters.findIndex(
    (item) => item.id === chapterNumber
  );

  const chapter =
    chapterIndex >= 0 ? chapters[chapterIndex] : undefined;

  const [openArticles, setOpenArticles] = useState<Set<string>>(
    () => new Set()
  );

  /*
    조문 번호와 가지번호를 기준으로 정렬한다.
    예: 10 → 10의2 → 10의3 → 11
  */
  const chapterArticles = useMemo(() => {
    if (!chapter) return [];

    return Object.entries(articleData)
      .filter(([number]) => {
        const mainNumber = getMainArticleNumber(number);

        return (
          mainNumber >= chapter.start &&
          mainNumber <= chapter.end
        );
      })
      .sort(([a], [b]) => getArticleOrder(a) - getArticleOrder(b));
  }, [chapter]);

  const toggleArticle = (articleNumber: string) => {
    setOpenArticles((prev) => {
      const next = new Set(prev);

      if (next.has(articleNumber)) {
        next.delete(articleNumber);
      } else {
        next.add(articleNumber);
      }

      return next;
    });
  };

  const openAllArticles = () => {
    setOpenArticles(
      new Set(chapterArticles.map(([number]) => number))
    );
  };

  const closeAllArticles = () => {
    setOpenArticles(new Set());
  };

  if (!chapter) {
    return (
      <main className="article-list-page">
        <p>존재하지 않는 장입니다.</p>
        <Link to="/design/articles">← 장 목록으로</Link>
      </main>
    );
  }

  const previousChapter =
    chapterIndex > 0 ? chapters[chapterIndex - 1] : undefined;

  const nextChapter =
    chapterIndex < chapters.length - 1
      ? chapters[chapterIndex + 1]
      : undefined;

  return (
    <main className="article-list-page">
      <Link
        to="/design/articles"
        className="chapter-back-link"
      >
        ← 장 목록
      </Link>

      <header className="chapter-page-header">
        <div className="chapter-title-row">
          <h1>{chapter.title}</h1>

          <div className="chapter-toggle-buttons">
            <button type="button" onClick={openAllArticles}>
              모두 열기
            </button>

            <button type="button" onClick={closeAllArticles}>
              모두 닫기
            </button>
          </div>
        </div>
      </header>

      <div className="chapter-articles">
        {chapterArticles.map(([number, article]) => {
          const isOpen = openArticles.has(number);

          return (
            <article
              key={number}
              className={
                isOpen
                  ? "chapter-article"
                  : "chapter-article closed"
              }
            >
              <div className="chapter-article-law">
                <div className="chapter-article-header">
                  <button
                    type="button"
                    className="chapter-article-title-button"
                    onClick={() => toggleArticle(number)}
                    aria-expanded={isOpen}
                  >
                    <h2>
                      <span className="chapter-article-number">
                        제{number}조
                      </span>

                      <span className="chapter-article-title">
                        【{article.title}】
                      </span>
                    </h2>
                  </button>

                  <ArticleImportance articleNumber={number} />
                </div>

                {isOpen && (
                  <div className="article-content chapter-article-content">
                    {article.content
                      .split("\n\n")
                      .map((paragraph, index) => {
                        const text = paragraph.trim();

                        let levelClass = "normal-level";

                        if (
                          /^[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]/.test(
                            text
                          )
                        ) {
                          levelClass = "paragraph-level";
                        } else if (/^\d+\./.test(text)) {
                          levelClass = "item-level";
                        } else if (/^[가-힣]\./.test(text)) {
                          levelClass = "subitem-level";
                        }

                        return (
                          <div
                            key={index}
                            className={`article-paragraph ${levelClass}`}
                          >
                            {text}
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>

              {isOpen && (
                <ArticleMemo articleNumber={number} />
              )}
            </article>
          );
        })}
      </div>

      <nav className="chapter-bottom-nav">
        {previousChapter ? (
          <Link
            to={`/design/articles/${previousChapter.id}`}
          >
            ← {previousChapter.title}
          </Link>
        ) : (
          <span />
        )}

        {nextChapter && (
          <Link
            to={`/design/articles/${nextChapter.id}`}
          >
            {nextChapter.title} →
          </Link>
        )}
      </nav>
    </main>
  );
}

export default DesignChapterPage;
