import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ArticleListPage from "./pages/ArticleListPage";
import ChapterPage from "./pages/ChapterPage";
import TrademarkArticleListPage from "./pages/TrademarkArticleListPage";
import TrademarkChapterPage from "./pages/TrademarkChapterPage";
import DesignArticleListPage from "./pages/DesignArticleListPage";
import DesignChapterPage from "./pages/DesignChapterPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/category/:categoryId"
          element={<CategoryPage />}
        />
        <Route
          path="/articles"
          element={<ArticleListPage />}
        />
        <Route
          path="/articles/:chapterId"
          element={<ChapterPage />}
        />
        <Route
          path="/trademark/articles"
          element={<TrademarkArticleListPage />}
        />

        <Route
          path="/trademark/articles/:chapterId"
          element={<TrademarkChapterPage />}
        />

        <Route
          path="/design/articles"
          element={<DesignArticleListPage />}
        />

        <Route
          path="/design/articles/:chapterId"
          element={<DesignChapterPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;