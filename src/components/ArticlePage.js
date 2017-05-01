import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import ArticleComments from './ArticleComments';

class ArticlePage extends Component {
    render() {
        return (
            <div className="media">
                <div className="media-left">
                    <img className="media-object" src="..." alt="..." />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.article.title}</h4>
                    <p>{this.props.article.body}</p>
                    <span>
                        <strong>{this.props.article.created_by}</strong>
                        {' | '}
                        <small>{this.props.article.belongs_to}</small>
                        {' | '}
                        <small>{this.props.article.comments} comments</small>
                    </span>
                </div>
                <ArticleComments articleId={this.props.params.articleId} comments={this.props.comments}/>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        article: state.articles.byId[props.params.articleId]
    };
}

export default connect(mapStateToProps)(ArticlePage);