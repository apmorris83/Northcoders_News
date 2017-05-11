import React from 'react';
import moment from 'moment';

import VoteButtons from './VoteButtons';

function CommentCard (props) {
    return (
        <div className="well">
            <div className="media">
                <div className="media-body">
                    <p>{props.body}</p>
                    <i className="glyphicon glyphicon-trash"></i>
                    {' | '}
                    <strong>{props.created_by}</strong>
                    {' | '}
                    <small>{getDate(props.created_at)}</small>
                </div>
                <div className="media-right">
                    <VoteButtons votes={props.votes} handleClick={props.voteComment.bind(null, props._id)} />
                </div>
            </div>
        </div>
    );
}

function getDate (num) {
    let date = moment(num);
    return date.format('dddd, MMMM Do YYYY');
}

export default CommentCard;