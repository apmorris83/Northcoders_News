import React from 'react';

function CommentCard (props) {
    return (
        <div className="well">
            <p>{props.body}</p>
        </div>
    );
}

export default CommentCard;