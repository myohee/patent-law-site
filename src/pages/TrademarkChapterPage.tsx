import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import articles from "../data/trademarkArticles.json";

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
        end: 32,
    },
    {
        id: 2,
        title: "제2장 상표등록요건 및 상표등록출원",
        start: 33,
        end: 49,
    },
    {
        id: 3,
        title: "제3장 심사",
        start: 50,
        end: 71,
    },
    {
        id: 4,
        title: "제4장 상표등록료 및 상표등록 등",
        start: 72,
        end: 81,
    },
    {
        id: 5,
        title: "제5장 상표권",
        start: 82,
        end: 106,
    },
    {
        id: 6,
        title: "제6장 상표권자의 보호",
        start: 107,
        end: 114,
    },
    {
        id: 7,
        title: "제7장 심판",
        start: 115,
        end: 156,
    },
    {
        id: 8,
        title: "제8장 재심 및 소송",
        start: 157,
        end: 166,
    },
    {
        id: 9,
        title: "제9장 국제출원",
        start: 167,
        end: 208,
    },
    {
        id: 10,
        title: "제10장 상품분류전환의 등록",
        start: 209,
        end: 214,
    },
    {
        id: 11,
        title: "제11장 보칙",
        start: 215,
        end: 229,
    },
    {
        id: 12,
        title: "제12장 벌칙",
        start: 230,
        end: 237,
    },
];

function getMainArticleNumber(articleNumber: string) {
    return Number(articleNumber.split("의")[0]);
}

function getArticleOrder(articleNumber: string) {
    const [main, sub = "0"] =
        articleNumber.split("의");

    return (
        Number(main) * 1000 +
        Number(sub)
    );
}

const markBackupDirty = () => {
    localStorage.setItem(
        "trademark-backup-dirty",
        "true"
    );

    window.dispatchEvent(
        new Event(
            "trademark-storage-change"
        )
    );
};

function ArticleImportance({
    articleNumber,
}: {
    articleNumber: string;
}) {
    const storageKey =
        `trademark-importance-${articleNumber}`;

    const [importance, setImportance] =
        useState(() => {
            const saved =
                localStorage.getItem(
                    storageKey
                );

            return saved
                ? Number(saved)
                : 0;
        });

    const handleStarClick = (
        star: number
    ) => {
        const nextImportance =
            importance === star
                ? 0
                : star;

        setImportance(
            nextImportance
        );

        localStorage.setItem(
            storageKey,
            String(nextImportance)
        );

        markBackupDirty();
    };

    return (
        <div
            className="article-importance"
            aria-label={`제${articleNumber}조 중요도 ${importance}`}
        >
            {[1, 2, 3].map(
                (star) => (
                    <button
                        key={star}
                        type="button"
                        className="importance-star-button"
                        onClick={() =>
                            handleStarClick(
                                star
                            )
                        }
                        aria-label={`중요도 ${star}`}
                    >
                        <span
                            className={
                                star <=
                                importance
                                    ? "importance-star active"
                                    : "importance-star"
                            }
                        >
                            ★
                        </span>
                    </button>
                )
            )}
        </div>
    );
}

function ArticleMemo({
    articleNumber,
}: {
    articleNumber: string;
}) {
    const storageKey =
        `trademark-memo-${articleNumber}`;

    const textareaRef =
        useRef<HTMLTextAreaElement>(
            null
        );

    /*
      메모 내용을 React state가 아니라
      ref에 보관한다.

      따라서 입력할 때마다
      React 렌더링이 발생하지 않는다.
    */
    const memoRef = useRef(
        localStorage.getItem(
            storageKey
        ) ?? ""
    );

    /*
      한글 입력 조합 상태
    */
    const isComposingRef =
        useRef(false);

    const resizeTextarea = (
        textarea?: HTMLTextAreaElement
    ) => {
        const target =
            textarea ??
            textareaRef.current;

        if (!target) return;

        target.style.height =
            "auto";

        target.style.height =
            `${target.scrollHeight}px`;
    };

    /*
      현재 메모 저장

      React state는 변경하지 않는다.
    */
    const saveMemo = (
        value: string,
        textarea?: HTMLTextAreaElement
    ) => {
        memoRef.current = value;

        localStorage.setItem(
            storageKey,
            value
        );

        markBackupDirty();

        if (textarea) {
            resizeTextarea(
                textarea
            );
        }
    };

    /*
      조문을 처음 열었을 때
      기존 메모 높이에 맞게 조정
    */
    useEffect(() => {
        resizeTextarea();
    }, []);

    const normalizeNumbering = (
        text: string
    ) => {
        const lines =
            text.split("\n");

        const counters:
            number[] = [];

        return lines
            .map((line) => {
                const match =
                    line.match(
                        /^(\s*)(\d+)\.\s?(.*)$/
                    );

                if (!match) {
                    return line;
                }

                const indent =
                    match[1];

                const content =
                    match[3];

                const level =
                    Math.floor(
                        indent.length /
                            2
                    );

                if (
                    counters[level] ===
                    undefined
                ) {
                    counters[level] =
                        0;
                }

                counters[level] +=
                    1;

                counters.length =
                    level + 1;

                return `${"  ".repeat(
                    level
                )}${counters[level]}. ${content}`;
            })
            .join("\n");
    };

    /*
      Tab / Enter 등으로
      textarea 내용을 직접 변경할 때 사용
    */
    const updateTextarea = (
        textarea:
            HTMLTextAreaElement,
        newValue: string
    ) => {
        textarea.value =
            newValue;

        saveMemo(
            newValue,
            textarea
        );
    };

    /*
      일반 글자 입력

      setMemo 없음!
      textarea + ref + localStorage만 변경
    */
    const handleChange = (
        event:
            React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const textarea =
            event.currentTarget;

        saveMemo(
            textarea.value,
            textarea
        );
    };

    /*
      메모칸 밖으로 나갈 때
      마지막 값을 한 번 더 저장
    */
    const handleBlur = (
        event:
            React.FocusEvent<HTMLTextAreaElement>
    ) => {
        saveMemo(
            event.currentTarget
                .value,
            event.currentTarget
        );
    };

    const handleKeyDown = (
        event:
            React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        /*
          한글 조합 중인
          Enter / Tab은 건드리지 않는다.
        */
        if (
            isComposingRef.current ||
            event.nativeEvent
                .isComposing ||
            event.keyCode === 229
        ) {
            return;
        }

        const textarea =
            event.currentTarget;

        /*
          React state가 아니라
          textarea의 실제 현재 값을 사용
        */
        const currentMemo =
            textarea.value;

        const start =
            textarea.selectionStart;

        const beforeCursor =
            currentMemo.slice(
                0,
                start
            );

        const lineIndex =
            beforeCursor.split(
                "\n"
            ).length - 1;

        const lines =
            currentMemo.split("\n");

        const currentLine =
            lines[lineIndex] ?? "";

        const numberedMatch =
            currentLine.match(
                /^(\s*)(\d+)\.\s?(.*)$/
            );

        /* =========================
           Tab / Shift + Tab
        ========================= */

        if (
            event.key === "Tab"
        ) {
            event.preventDefault();

            /*
              번호가 있는 줄
            */
            if (numberedMatch) {
                const indent =
                    numberedMatch[1];

                const content =
                    numberedMatch[3];

                const currentLevel =
                    Math.floor(
                        indent.length /
                            2
                    );

                /*
                  Shift + Tab
                  → 한 단계 위
                */
                if (
                    event.shiftKey
                ) {
                    if (
                        currentLevel ===
                        0
                    ) {
                        return;
                    }

                    const newIndent =
                        "  ".repeat(
                            currentLevel -
                                1
                        );

                    lines[lineIndex] =
                        `${newIndent}1. ${content}`;
                }

                /*
                  Tab
                  → 한 단계 아래
                */
                else {
                    const newIndent =
                        "  ".repeat(
                            currentLevel +
                                1
                        );

                    lines[lineIndex] =
                        `${newIndent}1. ${content}`;
                }

                const newMemo =
                    normalizeNumbering(
                        lines.join(
                            "\n"
                        )
                    );

                updateTextarea(
                    textarea,
                    newMemo
                );

                requestAnimationFrame(
                    () => {
                        const newLines =
                            newMemo.split(
                                "\n"
                            );

                        let newPosition =
                            0;

                        for (
                            let i = 0;
                            i <
                            lineIndex;
                            i++
                        ) {
                            newPosition +=
                                newLines[
                                    i
                                ].length +
                                1;
                        }

                        newPosition +=
                            newLines[
                                lineIndex
                            ].length;

                        textarea.selectionStart =
                            newPosition;

                        textarea.selectionEnd =
                            newPosition;
                    }
                );

                return;
            }

            /*
              번호 없는 일반 문장
            */
            if (
                event.shiftKey
            ) {
                if (
                    currentLine.startsWith(
                        "  "
                    )
                ) {
                    lines[
                        lineIndex
                    ] =
                        currentLine.slice(
                            2
                        );
                }
            } else {
                lines[lineIndex] =
                    `  ${currentLine}`;
            }

            const newMemo =
                lines.join("\n");

            updateTextarea(
                textarea,
                newMemo
            );

            requestAnimationFrame(
                () => {
                    const newLines =
                        newMemo.split(
                            "\n"
                        );

                    let newPosition =
                        0;

                    for (
                        let i = 0;
                        i <
                        lineIndex;
                        i++
                    ) {
                        newPosition +=
                            newLines[
                                i
                            ].length +
                            1;
                    }

                    newPosition +=
                        newLines[
                            lineIndex
                        ].length;

                    textarea.selectionStart =
                        newPosition;

                    textarea.selectionEnd =
                        newPosition;
                }
            );

            return;
        }

        /* =========================
           Enter
        ========================= */

        if (
            event.key ===
            "Enter"
        ) {
            if (
                !numberedMatch
            ) {
                return;
            }

            event.preventDefault();

            const indent =
                numberedMatch[1];

            const content =
                numberedMatch[3];

            /*
              내용 없는 번호에서 Enter
              → 목록 종료

              3. |
              Enter

              →
              |
            */
            if (
                content.trim() ===
                ""
            ) {
                lines[
                    lineIndex
                ] = "";

                const newMemo =
                    normalizeNumbering(
                        lines.join(
                            "\n"
                        )
                    );

                updateTextarea(
                    textarea,
                    newMemo
                );

                requestAnimationFrame(
                    () => {
                        const newLines =
                            newMemo.split(
                                "\n"
                            );

                        let newPosition =
                            0;

                        for (
                            let i = 0;
                            i <
                            lineIndex;
                            i++
                        ) {
                            newPosition +=
                                newLines[
                                    i
                                ].length +
                                1;
                        }

                        textarea.selectionStart =
                            newPosition;

                        textarea.selectionEnd =
                            newPosition;
                    }
                );

                return;
            }

            /*
              일반 Enter
              → 같은 단계 다음 번호 생성
            */
            const newLine =
                `${indent}1. `;

            lines.splice(
                lineIndex + 1,
                0,
                newLine
            );

            const newMemo =
                normalizeNumbering(
                    lines.join("\n")
                );

            updateTextarea(
                textarea,
                newMemo
            );

            requestAnimationFrame(
                () => {
                    const newLines =
                        newMemo.split(
                            "\n"
                        );

                    let newPosition =
                        0;

                    for (
                        let i = 0;
                        i <=
                        lineIndex;
                        i++
                    ) {
                        newPosition +=
                            newLines[
                                i
                            ].length +
                            1;
                    }

                    const nextLine =
                        newLines[
                            lineIndex +
                                1
                        ];

                    const prefixMatch =
                        nextLine.match(
                            /^(\s*\d+\.\s)/
                        );

                    newPosition +=
                        prefixMatch?.[1]
                            .length ??
                        0;

                    textarea.selectionStart =
                        newPosition;

                    textarea.selectionEnd =
                        newPosition;
                }
            );

            return;
        }
    };

    return (
        <aside className="article-memo">
            <textarea
                ref={textareaRef}
                className="article-memo-textarea"

                /*
                  핵심:
                  value가 아니라 defaultValue

                  → uncontrolled textarea
                */
                defaultValue={
                    memoRef.current
                }

                onChange={
                    handleChange
                }

                onKeyDown={
                    handleKeyDown
                }

                onBlur={
                    handleBlur
                }

                onCompositionStart={() => {
                    isComposingRef.current =
                        true;
                }}

                onCompositionEnd={(
                    event
                ) => {
                    isComposingRef.current =
                        false;

                    saveMemo(
                        event
                            .currentTarget
                            .value,
                        event
                            .currentTarget
                    );
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

function TrademarkChapterPage() {
    const { chapterId } =
        useParams();

    const chapterNumber =
        Number(chapterId);

    const chapter =
        chapters.find(
            (item) =>
                item.id ===
                chapterNumber
        );

    const [
        openArticles,
        setOpenArticles,
    ] =
        useState<Set<string>>(
            () => new Set()
        );

    /*
      장에 포함되는 조문 계산
    */
    const chapterArticles =
        useMemo(() => {
            if (!chapter) {
                return [];
            }

            return Object.entries(
                articleData
            )
                .filter(
                    ([number]) => {
                        const mainNumber =
                            getMainArticleNumber(
                                number
                            );

                        return (
                            mainNumber >=
                                chapter.start &&
                            mainNumber <=
                                chapter.end
                        );
                    }
                )
                .sort(
                    ([a], [b]) => {
                        return (
                            getArticleOrder(
                                a
                            ) -
                            getArticleOrder(
                                b
                            )
                        );
                    }
                );
        }, [chapter]);

    const toggleArticle = (
        articleNumber: string
    ) => {
        setOpenArticles(
            (prev) => {
                const next =
                    new Set(prev);

                if (
                    next.has(
                        articleNumber
                    )
                ) {
                    next.delete(
                        articleNumber
                    );
                } else {
                    next.add(
                        articleNumber
                    );
                }

                return next;
            }
        );
    };

    const openAllArticles =
        () => {
            setOpenArticles(
                new Set(
                    chapterArticles.map(
                        ([
                            number,
                        ]) =>
                            number
                    )
                )
            );
        };

    const closeAllArticles =
        () => {
            setOpenArticles(
                new Set()
            );
        };

    if (!chapter) {
        return (
            <main className="article-list-page">
                <p>
                    존재하지 않는
                    장입니다.
                </p>

                <Link to="/trademark/articles">
                    ← 장 목록으로
                </Link>
            </main>
        );
    }

    const chapterIndex =
        chapters.findIndex(
            (item) =>
                item.id ===
                chapter.id
        );

    const previousChapter =
        chapterIndex > 0
            ? chapters[
                  chapterIndex - 1
              ]
            : undefined;

    const nextChapter =
        chapterIndex <
        chapters.length - 1
            ? chapters[
                  chapterIndex + 1
              ]
            : undefined;

    return (
        <main className="article-list-page">
            <Link
                to="/trademark/articles"
                className="chapter-back-link"
            >
                ← 장 목록
            </Link>

            <header className="chapter-page-header">
                <div className="chapter-title-row">
                    <h1>
                        {chapter.title}
                    </h1>

                    <div className="chapter-toggle-buttons">
                        <button
                            type="button"
                            onClick={
                                openAllArticles
                            }
                        >
                            모두 열기
                        </button>

                        <button
                            type="button"
                            onClick={
                                closeAllArticles
                            }
                        >
                            모두 닫기
                        </button>
                    </div>
                </div>
            </header>

            <div className="chapter-articles">
                {chapterArticles.map(
                    ([
                        number,
                        article,
                    ]) => {
                        const isOpen =
                            openArticles.has(
                                number
                            );

                        return (
                            <article
                                key={
                                    number
                                }
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
                                            onClick={() =>
                                                toggleArticle(
                                                    number
                                                )
                                            }
                                            aria-expanded={
                                                isOpen
                                            }
                                        >
                                            <h2>
                                                <span className="chapter-article-number">
                                                    제
                                                    {
                                                        number
                                                    }
                                                    조
                                                </span>

                                                <span className="chapter-article-title">
                                                    【
                                                    {
                                                        article.title
                                                    }
                                                    】
                                                </span>
                                            </h2>
                                        </button>

                                        <ArticleImportance
                                            articleNumber={
                                                number
                                            }
                                        />
                                    </div>

                                    {isOpen && (
                                        <div className="article-content chapter-article-content">
                                            {article.content
                                                .split(
                                                    "\n\n"
                                                )
                                                .map(
                                                    (
                                                        paragraph,
                                                        index
                                                    ) => {
                                                        const text =
                                                            paragraph.trim();

                                                        let levelClass =
                                                            "normal-level";

                                                        if (
                                                            /^[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]/.test(
                                                                text
                                                            )
                                                        ) {
                                                            levelClass =
                                                                "paragraph-level";
                                                        } else if (
                                                            /^\d+\./.test(
                                                                text
                                                            )
                                                        ) {
                                                            levelClass =
                                                                "item-level";
                                                        } else if (
                                                            /^[가-힣]\./.test(
                                                                text
                                                            )
                                                        ) {
                                                            levelClass =
                                                                "subitem-level";
                                                        }

                                                        return (
                                                            <div
                                                                key={
                                                                    index
                                                                }
                                                                className={`article-paragraph ${levelClass}`}
                                                            >
                                                                {
                                                                    text
                                                                }
                                                            </div>
                                                        );
                                                    }
                                                )}
                                        </div>
                                    )}
                                </div>

                                {isOpen && (
                                    <ArticleMemo
                                        articleNumber={
                                            number
                                        }
                                    />
                                )}
                            </article>
                        );
                    }
                )}
            </div>

            <nav className="chapter-bottom-nav">
                {previousChapter ? (
                    <Link
                        to={`/trademark/articles/${previousChapter.id}`}
                    >
                        ←{" "}
                        {
                            previousChapter.title
                        }
                    </Link>
                ) : (
                    <span />
                )}

                {nextChapter && (
                    <Link
                        to={`/trademark/articles/${nextChapter.id}`}
                    >
                        {
                            nextChapter.title
                        }{" "}
                        →
                    </Link>
                )}
            </nav>
        </main>
    );
}

export default TrademarkChapterPage;