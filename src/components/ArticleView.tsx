interface ArticleViewProps {
  articleNumber: string;
  title: string;
  content: string;
}

function formatArticleNumber(articleNumber: string) {
  const parts = articleNumber.split("의");

  if (parts.length === 1) {
    return `제${articleNumber}조`;
  }

  return `제${parts[0]}조의${parts[1]}`;
}

function getParagraphType(paragraph: string) {
  const trimmed = paragraph.trim();

  // 항: ① ② ③ ...
  if (/^[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]/.test(trimmed)) {
    return "paragraph-level";
  }

  // 호: 1. 2. 3. ...
  if (/^\d+\.\s*/.test(trimmed)) {
    return "item-level";
  }

  // 목: 가. 나. 다. ...
  if (/^[가나다라마바사아자차카타파하]\.\s*/.test(trimmed)) {
    return "subitem-level";
  }

  // 일반 본문
  return "normal-level";
}

function ArticleView({
  articleNumber,
  title,
  content,
}: ArticleViewProps) {
  const paragraphs = content
    .split(/\n\s*\n/)
    .filter((paragraph) => paragraph.trim() !== "");

  return (
    <div className="article-view">
      <div className="article-heading">
        {formatArticleNumber(articleNumber)} ({title})
      </div>

      <div className="article-content">
        {paragraphs.map((paragraph, index) => {
          const paragraphType = getParagraphType(paragraph);

          return (
            <p
              key={index}
              className={`article-paragraph ${paragraphType}`}
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ArticleView;