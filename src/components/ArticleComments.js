import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import CommentCard from './CommentCard';

class ArticleComments extends Component {
    componentWillMount() {
        this.props.fetchComments(this.props.articleId)
    }
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => {
                    return <CommentCard 
                        key={i}
                        {...comment}
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);