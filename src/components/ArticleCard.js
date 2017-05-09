import React from 'react';
import { Link } from 'react-router';
import VoteButtons from './VoteButtons';

import '../css/ArticleCard.css';

function ArticleCard(props) {
    return (
        <div className="well">
            <div className="media">
                <div className="media-body">
                    <Link to={`/${props.belongs_to}/${props._id}`}><h3 className='title is-3'>{props.title}</h3></Link>
                    <span>
                        <strong>{props.created_by}</strong>
                        {' | '}
                        <Link to={`/${props.belongs_to}`}><small>{props.belongs_to}</small></Link>
                        {' | '}
                        <small>{props.comments} comments</small>
                    </span>
                </div>
                <div className="media-right">
                    <VoteButtons votes={props.votes} handleClick={props.voteArticle} />
                </div>
            </div>
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