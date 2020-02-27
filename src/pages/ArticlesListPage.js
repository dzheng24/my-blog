import React from 'react';
import ArticlesList from '../components/ArticlesList';
import ArticleContent from './article-content';

const ArticlesListPage = () => (
  <>
    <h1>Articles</h1>
    <ArticlesList articles={ArticleContent}/>
  </>
)

export default ArticlesListPage;

