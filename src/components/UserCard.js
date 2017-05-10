import React from 'react';

function UserCard (props) {
    return (
        <div className="well">
            <p>{props.name}</p>
            <strong>{props.username}</strong>
            
        </div>
    );
}

export default UserCard;