import {expect} from 'chai';
import { commentsReducer } from '../src/reducer/comments.reducer';
import * as actions from '../src/actions/actions';

describe('comments.reducer', () => {
    const initialState = {
        comments: [],
        loading: false,
        error: null
    };
    it('returns state when not passed an action', () => {
            const newState = commentsReducer(initialState);
            expect(newState).to.eql(initialState);
        });
    describe('when passed action FETCH_COMMENTS_REQUEST', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchCommentsRequest();
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('sets loading to true', () => {
            const action = actions.fetchCommentsRequest();
            const newState = commentsReducer(initialState, action);
            expect(newState.loading).to.equal(true);
        });
    });
    describe('when passed action FETCH_COMMENTS_SUCCESS', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchCommentsSuccess();
            const newState = commentsReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
    });
});