import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>Every you need to know about this person</h3>
            <h4>Friends Details Name : {friend.name}</h4>
            <p>Call : {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;