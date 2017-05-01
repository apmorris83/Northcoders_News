import React from 'react';

function ArticleCard (props) {
    return (
        <div className="well">
            <h1>{props.title}</h1>
        </div>
    );
}

export default ArticleCard;