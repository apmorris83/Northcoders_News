import React from 'react';

import ArticleCard from './ArticleCard';

function ArticleList (props) {
    return (
        <div>
        {props.articles.map((article, i) => {
            return <ArticleCard 
                key={i}
                {...article}
            />;
        })}
        </div>
    );
}

export default ArticleList;