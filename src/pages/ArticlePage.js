import React, { useState, useEffect } from 'react';
import articleContent from './article-content';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
      console.log(body);
    }
    fetchData();
  }, [name]);

  if (!article) {
    return <NotFoundPage />
  }

  let relatedArticles = articleContent.filter(article => article.name !== name)

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
      {article.content.map((paragraph, key) => <p key={key}>{paragraph}</p>
      )}
      <CommentsList comments={articleInfo.comments}/>
      <h3>Related Articles</h3>
      <ArticlesList articles={relatedArticles} />
    </>
  )
}
export default ArticlePage;

