import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import articles from "../data/articles.json";

type Article = {
    title: string;
    content: string;
};

const articleData = articles as Record<string, Article>;

const chapters = [
    {
        id: 1,
        title: "제1장 총칙",
        start: 1,
        end: 28,
    },
    {
        id: 2,
        title: "제2장 특허요건 및 특허출원",
        start: 29,
        end: 56,
    },
    {
        id: 3,
        title: "제3장 심사",
        start: 57,
        end: 78,
    },
    {
        id: 4,
        title: "제4장 특허료 및 특허등록등",
        start: 79,
        end: 86,
    },
    {
        id: 5,
        title: "제5장 특허권",
        start: 87,
        end: 125,
    },
    {
        id: 6,
        title: "제6장 특허권자의 보호",
        start: 126,
        end: 132,
    },
    {
        id: 7,
        title: "제7장 심판",
        start: 133,
        end: 177,
    },
    {
        id: 8,
        title: "제8장 재심",
        start: 178,
        end: 185,
    },
    {
        id: 9,
        title: "제9장 소송",
        start: 186,
        end: 191,
    },
    {
        id: 10,
        title: "제10장 특허협력조약에 따른 국제출원",
        start: 192,
        end: 214,
    },
    {
        id: 11,
        title: "제11장 보칙",
        start: 215,
        end: 224,
    },
    {
        id: 12,
        title: "제12장 벌칙",
        start: 225,
        end: 232,
    },
];

function getMainArticleNumber(articleNumber: string) {
    return Number(articleNumber.split("의")[0]);
}

function getArticleOrder(articleNumber: string) {
    const [main, sub = "0"] = articleNumber.split("의");

    return Number(main) * 1000 + Number(sub);
}

function ArticleImportance({
    articleNumber,
}: {
    articleNumber: string;
}) {
    const storageKey = `patent-importance-${articleNumber}`;
    const [importance, setImportance] = useState(() => {
        const saved = localStorage.getItem(storageKey);

        return saved ? Number(saved) : 0;
    });

    const handleStarClick = (star: number) => {
        const nextImportance =
            importance === star ? 0 : star;

        setImportance(nextImportance);

        localStorage.setItem(
            storageKey,
            String(nextImportance)
        );
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

function ArticleMemo({
    articleNumber,
}: {
    articleNumber: string;
}) {
    const storageKey = `patent-memo-${articleNumber}`;
    const textareaRef =
        useRef<HTMLTextAreaElement>(null);

    const resizeTextarea = () => {
        const textarea = textareaRef.current;

        if (!textarea) return;

        textarea.style.height = "auto";
        textarea.style.height =
            `${textarea.scrollHeight}px`;
    };
    const [memo, setMemo] = useState(() => {
        return localStorage.getItem(storageKey) ?? "";
    });

    useEffect(() => {
        localStorage.setItem(storageKey, memo);
    }, [memo, storageKey]);
    useEffect(() => {
        resizeTextarea();
    }, [memo]);

    const normalizeNumbering = (text: string) => {
        const lines = text.split("\n");

        /*
          counters[0] = 최상위 번호
          counters[1] = 1단계 들여쓰기 번호
          counters[2] = 2단계 들여쓰기 번호
          ...
        */
        const counters: number[] = [];

        return lines
            .map((line) => {
                const match = line.match(/^(\s*)(\d+)\.\s?(.*)$/);

                // 번호 목록이 아닌 줄은 그대로 둠
                if (!match) {
                    return line;
                }

                const indent = match[1];
                const content = match[3];

                // 공백 2칸 = 한 단계
                const level = Math.floor(indent.length / 2);

                // 현재 단계 카운터가 없으면 생성
                if (counters[level] === undefined) {
                    counters[level] = 0;
                }

                // 현재 단계 번호 +1
                counters[level] += 1;

                // 현재보다 아래 단계의 번호는 초기화
                counters.length = level + 1;

                return `${"  ".repeat(level)}${counters[level]}. ${content}`;
            })
            .join("\n");
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        const textarea = event.currentTarget;

        const start = textarea.selectionStart;

        /*
          현재 커서가 몇 번째 줄에 있는지 계산
        */
        const beforeCursor = memo.slice(0, start);
        const lineIndex = beforeCursor.split("\n").length - 1;

        const lines = memo.split("\n");

        const currentLine = lines[lineIndex] ?? "";

        const numberedMatch =
            currentLine.match(/^(\s*)(\d+)\.\s?(.*)$/);


        /* =========================
           Tab / Shift + Tab
        ========================= */

        if (event.key === "Tab") {
            event.preventDefault();

            /*
              번호가 있는 줄
            */
            if (numberedMatch) {
                const indent = numberedMatch[1];
                const content = numberedMatch[3];

                const currentLevel =
                    Math.floor(indent.length / 2);

                /*
                  Shift + Tab
                  → 한 단계 위로
                */
                if (event.shiftKey) {
                    if (currentLevel === 0) {
                        return;
                    }

                    const newIndent =
                        "  ".repeat(currentLevel - 1);

                    lines[lineIndex] =
                        `${newIndent}1. ${content}`;
                }

                /*
                  Tab
                  → 한 단계 아래로
                */
                else {
                    const newIndent =
                        "  ".repeat(currentLevel + 1);

                    lines[lineIndex] =
                        `${newIndent}1. ${content}`;
                }

                const newMemo =
                    normalizeNumbering(lines.join("\n"));

                setMemo(newMemo);

                /*
                  번호가 바뀐 뒤에도
                  같은 줄 끝에 커서를 유지
                */
                requestAnimationFrame(() => {
                    const newLines = newMemo.split("\n");

                    let newPosition = 0;

                    for (let i = 0; i < lineIndex; i++) {
                        newPosition +=
                            newLines[i].length + 1;
                    }

                    newPosition +=
                        newLines[lineIndex].length;

                    textarea.selectionStart =
                        textarea.selectionEnd =
                        newPosition;
                });

                return;
            }


            /*
              번호 없는 일반 문장
            */

            if (event.shiftKey) {
                if (currentLine.startsWith("  ")) {
                    lines[lineIndex] =
                        currentLine.slice(2);
                }
            } else {
                lines[lineIndex] =
                    `  ${currentLine}`;
            }

            const newMemo =
                lines.join("\n");

            setMemo(newMemo);

            return;
        }


        /* =========================
           Enter
        ========================= */

        if (event.key === "Enter") {

            if (!numberedMatch) {
                return;
            }

            event.preventDefault();

            const indent = numberedMatch[1];
            const content = numberedMatch[3];


            /*
              내용 없는 번호에서 Enter
              → 목록 종료
        
              예:
              3. |
              Enter
        
              →
              |
            */

            if (content.trim() === "") {
                lines[lineIndex] = "";

                const newMemo =
                    normalizeNumbering(lines.join("\n"));

                setMemo(newMemo);

                requestAnimationFrame(() => {
                    const newLines = newMemo.split("\n");

                    let newPosition = 0;

                    for (let i = 0; i < lineIndex; i++) {
                        newPosition +=
                            newLines[i].length + 1;
                    }

                    textarea.selectionStart =
                        textarea.selectionEnd =
                        newPosition;
                });

                return;
            }


            /*
              일반 Enter
              → 같은 단계에 다음 번호 생성
            */

            const newLine =
                `${indent}1. `;

            lines.splice(
                lineIndex + 1,
                0,
                newLine
            );

            const newMemo =
                normalizeNumbering(lines.join("\n"));

            setMemo(newMemo);

            requestAnimationFrame(() => {
                const newLines =
                    newMemo.split("\n");

                let newPosition = 0;

                for (let i = 0; i <= lineIndex; i++) {
                    newPosition +=
                        newLines[i].length + 1;
                }

                /*
                  새 줄의
                  "  2. "까지 이동
                */
                const nextLine =
                    newLines[lineIndex + 1];

                const prefixMatch =
                    nextLine.match(/^(\s*\d+\.\s)/);

                newPosition +=
                    prefixMatch?.[1].length ?? 0;

                textarea.selectionStart =
                    textarea.selectionEnd =
                    newPosition;
            });

            return;
        }
    };

    return (
        <aside className="article-memo">
            <textarea
                ref={textareaRef}
                className="article-memo-textarea"
                value={memo}
                onChange={(event) =>
                    setMemo(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="메모"
            />

            {memo.trim() && (
                <div className="article-memo-status">
                    자동 저장됨
                </div>
            )}
        </aside>
    );
}

function ChapterPage() {
    const { chapterId } = useParams();

    const chapterNumber = Number(chapterId);

    const chapter = chapters.find(
        (item) => item.id === chapterNumber
    );

    const chapterArticles = useMemo(() => {
        if (!chapter) return [];

        return Object.entries(articleData)
            .filter(([number]) => {
                const mainNumber =
                    getMainArticleNumber(number);

                return (
                    mainNumber >= chapter.start &&
                    mainNumber <= chapter.end
                );
            })
            .sort(([a], [b]) => {
                return (
                    getArticleOrder(a) -
                    getArticleOrder(b)
                );
            });
    }, [chapter]);

    if (!chapter) {
        return (
            <main className="article-list-page">
                <p>존재하지 않는 장입니다.</p>

                <Link to="/articles">
                    ← 장 목록으로
                </Link>
            </main>
        );
    }

    const previousChapter =
        chapters[chapterNumber - 2];

    const nextChapter =
        chapters[chapterNumber];

    return (
        <main className="article-list-page">

            <Link
                to="/articles"
                className="chapter-back-link"
            >
                ← 장 목록
            </Link>

            <header className="chapter-page-header">
                <h1>{chapter.title}</h1>

                <p>
                    제{chapter.start}조부터 제{chapter.end}조
                </p>
            </header>

            <div className="chapter-articles">

                {chapterArticles.map(
                    ([number, article]) => (
                        <article
                            key={number}
                            className="chapter-article"
                        >
                            <div className="chapter-article-law">

                                <div className="chapter-article-header">
                                    <h2>
                                        <span className="chapter-article-number">
                                            제{number}조
                                        </span>

                                        <span className="chapter-article-title">
                                            【{article.title}】
                                        </span>
                                    </h2>
                                    <ArticleImportance
                                        articleNumber={number}
                                    />

                                </div>

                                <div className="article-content chapter-article-content">
                                    {article.content
                                        .split("\n\n")
                                        .map((paragraph, index) => {
                                            const text = paragraph.trim();

                                            let levelClass = "normal-level";

                                            // ① ② ③ → 항
                                            if (/^[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]/.test(text)) {
                                                levelClass = "paragraph-level";
                                            }

                                            // 1. 2. 3. → 호
                                            else if (/^\d+\./.test(text)) {
                                                levelClass = "item-level";
                                            }

                                            // 가. 나. 다. → 목
                                            else if (/^[가-힣]\./.test(text)) {
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

                            </div>

                            <ArticleMemo
                                articleNumber={number}
                            />
                        </article>
                    )
                )}

            </div>

            <nav className="chapter-bottom-nav">

                {previousChapter ? (
                    <Link
                        to={`/articles/${previousChapter.id}`}
                    >
                        ← {previousChapter.title}
                    </Link>
                ) : (
                    <span />
                )}

                {nextChapter && (
                    <Link
                        to={`/articles/${nextChapter.id}`}
                    >
                        {nextChapter.title} →
                    </Link>
                )}

            </nav>

        </main>
    );
}

export default ChapterPage;