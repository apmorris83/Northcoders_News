import React from 'react';
import moment from 'moment';

function CommentCard (props) {
    return (
        <div className="well">
            <p>{props.body}</p>
            <strong>{props.created_by}</strong>
            {' | '}
            <small>{getDate(props.created_at)}</small>
        </div>
    );
}

function getDate (num) {
    let date = moment(num);
    return date.format('dddd, MMMM Do YYYY');
}

export default CommentCard;