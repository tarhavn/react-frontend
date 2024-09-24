import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import articles from './article-content';
import useUser from '../hooks/useUser';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const { articleId } = useParams();
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`); //because of proxy we dont need entire url
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, []);

    const article = articles.find(article => article.name === articleId);

    const addUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return <NotFoundPage />
    }

    return(
        <>
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                {user
                    ? <button onClick={addUpvote}>Like</button>
                    : <Link to='/login'>Sign in to like the article</Link>}
            </div>
            <p>This article has {articleInfo.upvotes} like(s)</p>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
            
            {user
                ? <AddCommentForm 
                articleName={articleId}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} />
                : <Link to='/login'>Sign in to comment the article</Link>}

            <CommentsList comments={articleInfo.comments} />
        </>
    );
}

export default ArticlePage;