import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, title, body } = post;

    const navigate = useNavigate();
    const hadleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post-container'>
            <h3>Title : {title}</h3>
            <p>Body : {body}</p>
            {/* 3 way use hook  */}
            <Link to={`/post/${id}`}>Visit: {id}</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={hadleNavigate}>Show Details 2</button>
        </div>
    );
};

export default Post;