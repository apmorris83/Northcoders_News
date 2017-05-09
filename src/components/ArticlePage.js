import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import ArticleComments from './ArticleComments';

class ArticlePage extends Component {
    render() {
        return (
            <div className="container">
                <div className="well">
                            <h3 className="text-danger">{this.props.article.title}</h3>
                            <p>{this.props.article.body}</p>
                            <span>
                                <strong>{this.props.article.created_by}</strong>
                                {' | '}
                                <strong className="text-danger">{this.props.article.belongs_to}</strong>
                                {' | '}
                                <small>{this.props.article.comments} comments</small>
                            </span>
                        <h3 className="text-danger">Comments</h3>
                        <ArticleComments articleId={this.props.params.articleId} comments={this.props.comments}/>
                </div>
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