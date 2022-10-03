import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const { id, userId, title, body } = post;

    const navigate = useNavigate();

    const handleNavigator = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h3>Post Details Post: {id}</h3>
            <p>Post Details title: {title}</p>
            <p>Post Details body: {body}</p>
            <button onClick={handleNavigator}>Get The Author</button>
        </div>
    );
};

export default PostDetails;