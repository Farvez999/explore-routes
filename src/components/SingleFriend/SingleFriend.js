import React from 'react';
import { Link } from 'react-router-dom';
import './SingleFriend.css'

const SingleFriend = ({ friend }) => {
    const { id, name, email, username } = friend;
    return (
        <div className='friends'>
            <h3>Name : {name}</h3>
            <small>User Name : <Link to={`/friend/${id}`}>{username}</Link></small>
            <p>Email : {email}</p>
        </div>
    );
};

export default SingleFriend;