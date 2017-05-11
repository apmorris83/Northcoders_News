import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

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

CommentCard.propTypes = {
    body: PropTypes.string.isRequired,
    created_by: PropTypes.string.isRequired,
    created_at: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    voteComment: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired,
};

export default CommentCard;