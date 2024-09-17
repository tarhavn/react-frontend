import axios from 'axios';
import { useState } from 'react';

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name, SetName] = useState('');
    const [commentText, SetCommentText] = useState('');
    
    const addComment = async () => {
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name,
            text: commentText,
        });
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        SetName('');
        SetCommentText('');
    }

    return (
        <div id="add-comment-form">
            <h3>Express your thought as comment</h3>
            <label>
                Name:
                <input //twoway binding between input and value of state
                    value={name}
                    onChange={e => SetName(e.target.value)}
                    type="text" />
            </label>
            <label>
                Comment:
                <textarea 
                    value={commentText}
                    onChange={e => SetCommentText(e.target.value)}
                    rows="5" 
                    cols="50" />
            </label>
            <button onClick={addComment}>Submit comment</button>
        </div>
    )
}

export default AddCommentForm;