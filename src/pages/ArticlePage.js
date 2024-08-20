import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    return(
        //<h1>This is the article page for the article with id: {articleId}</h1>
        <>
            <h1>{article.title}</h1>
            {article.content.map(paragraph => (
                <p>{paragraph}</p>
            ))}
        </>
    );
}

export default ArticlePage;