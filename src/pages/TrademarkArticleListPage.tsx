import { Link } from "react-router-dom";
import BackupControls from "../components/BackupControls";

const chapters = [
  { id: 1, title: "제1장 총칙" },
  { id: 2, title: "제2장 상표등록요건 및 상표등록출원" },
  { id: 3, title: "제3장 심사" },
  { id: 4, title: "제4장 상표등록료 및 상표등록 등" },
  { id: 5, title: "제5장 상표권" },
  { id: 6, title: "제6장 상표권자의 보호" },
  { id: 7, title: "제7장 심판" },
  { id: 8, title: "제8장 재심 및 소송" },
  {
    id: 9,
    title:
      "제9장 국제출원",
  },
  { id: 10, title: "제10장 상품분류전환의 등록" },
  { id: 11, title: "제11장 보칙" },
  { id: 12, title: "제12장 벌칙" },
];

function TrademarkArticleListPage() {
  return (
    <main className="article-list-page">
      <Link
        to="/"
        className="back-link"
      >
        ← 홈으로
      </Link>

      <header className="article-list-header">
        <h1>상표법 조문</h1>
      </header>

      <BackupControls type="trademark" />

      <div className="chapter-list">
        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            to={`/trademark/articles/${chapter.id}`}
            className="chapter-card"
          >
            {chapter.title}

            <span className="chapter-arrow">
              →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default TrademarkArticleListPage;