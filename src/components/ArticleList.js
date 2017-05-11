import React from 'react';
import PropTypes from 'prop-types';

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

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    voteArticle: PropTypes.func.isRequired
};

export default ArticleList;