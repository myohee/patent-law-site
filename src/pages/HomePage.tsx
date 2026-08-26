import { Link } from "react-router-dom";
import toc from "../data/toc.json";

function HomePage() {
  return (
    <main className="app">
      <h1>특허법 체계도</h1>

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