import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopArticles } from '../reducer/articles.reducer';
import * as actions from '../actions/actions';

import ArticleList from './ArticleList';

class Homepage extends Component {
    componentDidMount() {
        this.props.fetchArticles(this.props.params.topic);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.params.topic !== this.props.params.topic) {
            this.props.fetchArticles(nextProps.params.topic);
        }
    }
    render() {
        return (
            <div>
                <ArticleList 
                    articles={this.props.articles}
                    voteArticle={this.props.voteArticle}
                />
            </div>
        ); 
    }
}

function mapStateToProps(state) {
    return {
        articles: getTopArticles(state, 10),
        loading: state.articles.loading,
        error: state.articles.error
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchArticles: (topic) => {
            dispatch(actions.fetchArticles(topic));
        },
        voteArticle: (id, vote) => {
            dispatch(actions.voteArticle(id, vote));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);