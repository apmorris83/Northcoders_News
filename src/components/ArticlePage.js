import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ROOT } from '../../config';

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

                            <h4 className="text-danger">Comments</h4>

                            <div className="well">
                                <input type="text" name="name" />
                                <button onClick={handleAddComment()} type="button" className="pull-right">add comment</button>
                            </div>
                        <ArticleComments articleId={this.props.params.articleId} comments={this.props.comments}/>
                </div>
            </div>
        );
    }
}

function handleAddComment () {
    axios.post(`${ROOT}/articles/${this.props.params.articleId}/comments`, {
    body: 'hello this is a test comment',
    belongs_to: `${this.props.params.articleId}`
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function mapStateToProps(state, props) {
    return {
        article: state.articles.byId[props.params.articleId]
    };
}

export default connect(mapStateToProps)(ArticlePage);