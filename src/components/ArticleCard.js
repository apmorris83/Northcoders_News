import React from 'react';
import { Link } from 'react-router';
import VoteButtons from './VoteButtons';
import PropTypes from 'prop-types';

import '../css/ArticleCard.css';

function ArticleCard(props) {
    return (
        <div className="well">
            <div className="media">
                <div className="media-body">
                    <Link to={`/${props.belongs_to}/${props._id}`}><h3 className='title is-3 text-danger'>{props.title}</h3></Link>
                    <span>
                        <strong>{props.created_by}</strong>
                        {' | '}
                        <Link to={`/${props.belongs_to}`} className="text-danger"><strong>{props.belongs_to}</strong></Link>
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
    belongs_to: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created_by: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    voteArticle: PropTypes.func.isRequired
};

export default ArticleCard;