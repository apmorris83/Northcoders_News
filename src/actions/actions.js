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
