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
        comments: sortComments(action.data)
      });
    case types.FETCH_COMMENTS_ERROR:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.error
      });
      case types.VOTE_COMMENT_SUCCESS:
        const commentId = action.data._id;
        const vote = action.data.vote === 'up' ? 1 : -1;

        const newState = Object.assign({}, prevState);
        newState.comments = newState.comments.map((comment) => {
          if (comment._id === commentId) {
            return Object.assign({}, comment, {votes: comment.votes + vote});
          }
          return comment;
        });
        return newState;
    default:
      return prevState;
  }
}

export function sortComments (data) {
  return data.sort((a, b) => {
    return b.votes - a.votes;
  });
}

export default commentsReducer;