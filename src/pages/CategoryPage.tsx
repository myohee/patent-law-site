import { Link, useParams } from "react-router-dom";
import toc from "../data/toc.json";
import TreeNode from "../components/TreeNode";

function CategoryPage() {
  const { categoryId } = useParams();

  const category = toc.categories.find(
    (item) => item.id === categoryId
  );

  if (!category) {
    return (
      <main className="app">
        <p>존재하지 않는 페이지입니다.</p>
        <Link to="/">홈으로</Link>
      </main>
    );
  }

  return (
    <main className="app">
      <Link to="/" className="back-link">
        ← 전체 체계도
      </Link>

      <h1>
        {category.number}. {category.title}
      </h1>

      <div className="tree-container">
        {category.groups?.map((group, index) => (
          <TreeNode
            key={`${group.title}-${index}`}
            node={group}
          />
        ))}

        {category.items?.map((item, index) => (
          <TreeNode
            key={`${item.title}-${index}`}
            node={item}
          />
        ))}
      </div>
    </main>
  );
}

export default CategoryPage;