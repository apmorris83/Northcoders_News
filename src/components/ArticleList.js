import React from 'react';

import ArticleCard from './ArticleCard';

function ArticleList (props) {
    return (
        <div>
        {props.articles.map((article, i) => {
            return <ArticleCard 
                key={i}
                {...article}
                voteArticle={props.voteArticle.bind(null, article._id)}
            />;
        })}
        </div>
    );
}

export default ArticleList;