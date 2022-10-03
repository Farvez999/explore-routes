import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFriend from '../SingleFriend/SingleFriend';

const Friend = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h3>This is Friends: {friends.length}</h3>
            {
                friends.map(friend => <SingleFriend
                    key={friend.id}
                    friend={friend}
                ></SingleFriend>)
            }
        </div>
    );
};

export default Friend;