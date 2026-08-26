import { useState } from "react";

import Accordion from "./Accordion";
import ArticleView from "./ArticleView";

import articles from "../data/articles.json";

type Article = {
  title: string;
  content: string;
};

const articleData = articles as Record<string, Article>;

type TreeNodeData = {
  title: string;
  groups?: TreeNodeData[];
  items?: TreeNodeData[];
  articles?: string[];
  note?: string;
};

interface TreeNodeProps {
  node: TreeNodeData;
}

function TreeNode({ node }: TreeNodeProps) {
  const [openArticles, setOpenArticles] = useState<Set<string>>(
    new Set()
  );

  const hasGroups =
    node.groups && node.groups.length > 0;

  const hasItems =
    node.items && node.items.length > 0;

  const hasChildren =
    hasGroups || hasItems;

  const handleArticleClick = (article: string) => {
    setOpenArticles((previous) => {
      const next = new Set(previous);

      if (next.has(article)) {
        next.delete(article);
      } else {
        next.add(article);
      }

      return next;
    });
  };

  /*
    제목 클릭:
    전부 열려 있으면 전부 닫고,
    하나라도 닫혀 있으면 전부 연다.
  */
  const handleTitleClick = () => {
    if (!node.articles || node.articles.length === 0) {
      return;
    }

    const allOpen = node.articles.every((article) =>
      openArticles.has(article)
    );

    if (allOpen) {
      setOpenArticles(new Set());
    } else {
      setOpenArticles(new Set(node.articles));
    }
  };

  /*
    하위 목차가 있으면 아코디언
  */
  if (hasChildren) {
    return (
      <Accordion title={node.title}>
        {node.groups?.map((group, index) => (
          <TreeNode
            key={`${group.title}-${index}`}
            node={group}
          />
        ))}

        {node.items?.map((item, index) => (
          <TreeNode
            key={`${item.title}-${index}`}
            node={item}
          />
        ))}
      </Accordion>
    );
  }

  const allArticlesOpen =
    node.articles &&
    node.articles.length > 0 &&
    node.articles.every((article) =>
      openArticles.has(article)
    );

  return (
    <div className="tree-leaf">
      <button
        type="button"
        className={`tree-leaf-title-button ${
          allArticlesOpen ? "open" : ""
        }`}
        onClick={handleTitleClick}
      >
        <span>{node.title}</span>

        {node.articles &&
          node.articles.length > 0 && (
            <span className="tree-leaf-toggle">
              {allArticlesOpen ? "−" : "+"}
            </span>
          )}
      </button>

      {node.note && (
        <div className="tree-note">
          {node.note}
        </div>
      )}

      {node.articles &&
        node.articles.length > 0 && (
          <>
            <div className="article-list">
              {node.articles.map((article) => {
                const isOpen =
                  openArticles.has(article);

                return (
                  <button
                    key={article}
                    type="button"
                    className={`article-button ${
                      isOpen ? "active" : ""
                    }`}
                    onClick={() =>
                      handleArticleClick(article)
                    }
                  >
                    {article}
                  </button>
                );
              })}
            </div>

            <div className="opened-articles">
              {node.articles.map((article) => {
                if (!openArticles.has(article)) {
                  return null;
                }

                const data =
                  articleData[article];

                if (!data) {
                  return (
                    <div
                      key={article}
                      className="article-view"
                    >
                      <div className="article-heading">
                        {article}
                      </div>

                      <div className="article-content">
                        해당 조문 데이터가
                        articles.json에 없습니다.
                      </div>
                    </div>
                  );
                }

                return (
                  <ArticleView
                    key={article}
                    articleNumber={article}
                    title={data.title}
                    content={data.content}
                  />
                );
              })}
            </div>
          </>
        )}
    </div>
  );
}

export default TreeNode;