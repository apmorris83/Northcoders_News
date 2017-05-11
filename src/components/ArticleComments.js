import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';

import CommentCard from './CommentCard';

class ArticleComments extends Component {
    componentWillMount() {
        this.props.fetchComments(this.props.articleId);
    }
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => {
                    return <CommentCard 
                        key={i}
                        {...comment}
                        voteComment={this.props.voteComment}
                        deleteComment={this.props.deleteComment}
                    />;
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments.comments
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchComments: (id) => {
            dispatch(actions.fetchComments(id));
        },
        voteComment: (id, vote) => {
            dispatch(actions.voteComment(id, vote));
        },
        deleteComment: (id) => {
            dispatch(actions.deleteComment(id));
        }
    };
}

ArticleComments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    articleId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    voteComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);