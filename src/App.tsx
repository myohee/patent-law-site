import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ArticleListPage from "./pages/ArticleListPage";
import ChapterPage from "./pages/ChapterPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;