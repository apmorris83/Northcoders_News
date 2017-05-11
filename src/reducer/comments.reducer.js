import * as types from '../actions/types';

const initialState = {
  comments: [],
  loading: false,
  error: null
};

function commentsReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    case types.FETCH_COMMENTS_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        comments: action.data
      });
    case types.FETCH_COMMENTS_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });
      case types.VOTE_COMMENT_SUCCESS:
        const commentId = action.data._id;
        const vote = action.data.vote === 'up' ? 1 : -1;
          return Object.assign({}, prevState, {
            byId: Object.assign({}, prevState.byId, {
              [commentId]: Object.assign({}, prevState.byId[commentId], {
                  votes: prevState.votes + vote
              })
          })
      });
    default:
      return prevState;
  }
}

export default commentsReducer;