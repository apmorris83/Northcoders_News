import React from 'react';

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
            <button className="btn btn-success"><i className="glyphicon glyphicon-chevron-up"></i></button>
                <span><b> {props.votes} </b></span>
            <button className="btn btn-danger"><i className="glyphicon glyphicon-chevron-down"></i></button>
        </div>
    );
}

export default ArticleCard;