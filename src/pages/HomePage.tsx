
import { Link } from "react-router-dom";
import toc from "../data/toc.json";

const laws = [
  {
    id: "patent",
    title: "특허법 조문 순서대로 보기",
    path: "/articles",
  },
  {
    id: "trademark",
    title: "상표법 조문 순서대로 보기",
    path: "/trademark/articles",
  },
  {
    id: "design",
    title: "디자인보호법 조문 순서대로 보기",
    path: "/design/articles",
  },
];

function HomePage() {
  return (
    <main className="app">
      {/* 법률별 조문 페이지 */}

      <section
        className="law-section"
        aria-label="법률별 조문 보기"
      >
        <div className="law-card-list">
          {laws.map((law) => (
            <Link
              key={law.id}
              to={law.path}
              className="article-home-card"
            >
              <div>
                <div className="article-home-card-title">
                  {law.title}
                </div>

                <div className="article-home-card-description">
                  장별로 조문을 읽고 메모와 중요도를 기록할 수 있어요.
                </div>
              </div>

              <span
                className="article-home-card-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 특허법 체계도 */}

      <section
        className="toc-section"
        aria-labelledby="toc-heading"
      >
        <h2
          id="toc-heading"
          className="home-section-title"
        >
          특허법 체계도
        </h2>

        <div className="category-grid">
          {toc.categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card"
            >
              <span className="category-number">
                {category.number}
              </span>

              <span className="category-title">
                {category.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
