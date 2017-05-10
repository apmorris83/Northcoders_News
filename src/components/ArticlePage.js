import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import ArticleComments from './ArticleComments';

class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleCommentForm = this.handleCommentForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleCommentForm (e) {
        this.setState({
            comment: e.target.value
        });
    }
    handleClick () {
        this.props.addComment(this.props.params.articleId, this.state.comment);
    }
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

                            <h4 className="text-danger">Comments</h4>

                            <div className="well">
                                <input onChange={this.handleCommentForm} type="text" name="name" />
                                <button onClick={this.handleClick} type="button" className="pull-right">add comment</button>
                            </div>
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

function mapDispatchToProps(dispatch) {
    return {
        addComment: (id, comment) => {
            dispatch(actions.addComment(id, comment));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);