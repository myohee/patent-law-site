import { Link } from "react-router-dom";
import toc from "../data/toc.json";

function HomePage() {
  return (
    <main className="app">
      <h1>
        <Link
          to="/articles"
          className="article-home-card"
        >
          <div>
            <div className="article-home-card-title">
              특허법 조문 순서대로 보기
            </div>

            <div className="article-home-card-description">
              장별로 조문을 읽고 메모와 중요도를 기록할 수 있어요.
            </div>
          </div>

          

          <span className="article-home-card-arrow">
            →
          </span>
        </Link>

        <Link
          to="/trademark/articles"
          className="article-home-card"
        >
          <div>
            <div className="article-home-card-title">
              상표법 조문 순서대로 보기
            </div>

            <div className="article-home-card-description">
              장별로 조문을 읽고 메모와 중요도를 기록할 수 있어요.
            </div>
          </div>
          <span className="article-home-card-arrow">
            →
          </span>
        </Link>
      </h1>

      <h2 className="home-section-title">
       특허법 체계도
      </h2>

      

      <div className="category-grid"></div>

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
    </main>
  );
}

export default HomePage;