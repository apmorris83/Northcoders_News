import * as types from '../actions/types';

const initialState = {
  byId: {},
  loading: false,
  error: null
};

export function articlesReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLES_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    case types.FETCH_ARTICLES_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        byId: normaliseData(action.data)
      });
    case types.FETCH_ARTICLES_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });

    default:
      return prevState;
  }
}

function normaliseData (data) {
  return data.reduce(function (acc, item) {
    acc[item._id] = item;
    return acc;
  }, {});
}

export function getTopArticles (state, num) {
  return Object.keys(state.articles.byId).reduce(function (acc, id) {
    return acc.concat(state.articles.byId[id]);
  }, []).sort(function (a, b) {
    return b.votes - a.votes;
  }).slice(0, num); 
}