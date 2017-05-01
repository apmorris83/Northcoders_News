import React from 'react';
import { Link } from 'react-router';
import VoteButtons from './VoteButtons';

function ArticleCard(props) {
    return (
        <div className="well">
            <Link to={`/${props.belongs_to}/${props._id}`}><h3 className='title is-3'>{props.title}</h3></Link>
            <span>
                <strong>{props.created_by}</strong>
                {' | '}
                <small>{props.belongs_to}</small>
                {' | '}
                <small>{props.comments} comments</small>
            </span>
            <VoteButtons votes={props.votes} handleClick={props.voteArticle} />
        </div>
    );
}

ArticleCard.propTypes = {
    belongs_to: React.PropTypes.string.isRequired,
    _id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    created_by: React.PropTypes.string.isRequired,
    comments: React.PropTypes.number.isRequired,
    votes: React.PropTypes.number.isRequired,
    voteArticle: React.PropTypes.func.isRequired
};

export default ArticleCard;