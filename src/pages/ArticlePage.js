import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  if (!article) {
    return <NotFoundPage />
  }

  let relatedArticles = articleContent.filter(article => article.name !== name)

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => <p key={key}>{paragraph}</p>
      )}
      <h3>Related Articles</h3>
      <ArticlesList articles={relatedArticles} />
    </>
  )
}
export default ArticlePage;

