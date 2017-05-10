import * as types from './types';
import axios from 'axios';
import { ROOT } from '../../config';

export function fetchArticles (topic) {
  let url = `${ROOT}`;
  if (topic) {
    url += `/topics/${topic}/articles`;
  } else {
    url += '/articles';
  }
  return (dispatch) => {
    dispatch(fetchArticlesRequest());
    axios
      .get(url)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(err => {
         dispatch(fetchArticlesError(err));
      });
  };
}

export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}

export function fetchArticlesSuccess (articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: articles
  };
}

export function fetchArticlesError (err) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    err: err
  };
}

export function voteArticle (id, vote) {
  return (dispatch) => {
    dispatch(voteArticleRequest());
    axios
      .put(`${ROOT}/articles/${id}?vote=${vote}`)
      .then(res => {
        console.log(res);
        dispatch(voteArticleSuccess({_id: id, vote}));
      })
      .catch(error => {
         dispatch(voteArticleError(error.message));
      });
  };
}

export function voteArticleRequest () {
  return {
    type: types.VOTE_ARTICLE_REQUEST,
    
  };
}

export function voteArticleSuccess (data) {
  return {
    type: types.VOTE_ARTICLE_SUCCESS,
    data: data
  };
}

export function voteArticleError (err) {
  return {
    type: types.VOTE_ARTICLE_ERROR,
    err: err
  };
}

export function fetchComments (articleId) {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    axios
      .get(`${ROOT}/articles/${articleId}/comments`)
      .then(res => {
        dispatch(fetchCommentsSuccess(res.data.comments));
      })
      .catch(err => {
         dispatch(fetchCommentsError(err));
      });
  };
}

export function fetchCommentsRequest () {
  return {
    type: types.FETCH_COMMENTS_REQUEST
  };
}

export function fetchCommentsSuccess (comments) {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    data: comments
  };
}

export function fetchCommentsError (err) {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    err: err
  };
}

export function fetchUsers () {
  let url = `${ROOT}`;

  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(`${url}/users`)
      .then(res => {
        dispatch(fetchUsersSuccess(res.data.users));
      })
      .catch(err => {
         dispatch(fetchUsersError(err));
      });
  };
}

export function fetchUsersRequest () {
  return {
    type: types.FETCH_USERS_REQUEST
  };
}

export function fetchUsersSuccess (users) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    data: users
  };
}

export function fetchUsersError (err) {
  return {
    type: types.FETCH_USERS_ERROR,
    err: err
  };
}

export function addComment (id, comment) {
  return (dispatch) => {
    dispatch(addCommentRequest());
    axios
      .post(`${ROOT}/articles/${id}/comments`, {
        body: comment,
        belongs_to: id
      })
      .then(res => {
        console.log(res);
        dispatch(addCommentSuccess({_id: id, comment}));
      })
      .catch(error => {
         dispatch(addCommentError(error.message));
      });
  };
}

export function addCommentRequest () {
  return {
    type: types.ADD_COMMENT_REQUEST,
    
  };
}

export function addCommentSuccess (data) {
  return {
    type: types.ADD_COMMENT_SUCCESS,
    data: data
  };
}

export function addCommentError (err) {
  return {
    type: types.ADD_COMMENT_ERROR,
    err: err
  };
}