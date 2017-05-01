import React from 'react';
import VoteButtons from './VoteButtons';

function ArticleCard(props) {
    return (
        <div className="well">
            <h3>{props.title}</h3>
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

export default ArticleCard;