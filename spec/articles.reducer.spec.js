import {expect} from 'chai';
import { articlesReducer } from '../src/reducer/articles.reducer';
import * as actions from '../src/actions/actions';

describe('articles.reducer', () => {
    const initialState = {
        byId: {
            1: {
                belongs_to: 'football',
                body: 'Lorem ipsum',
                comments: 3,
                created_by: 'joe bloggs',
                title: 'A story about football',
                votes: 5,
                _id: '001'
            }
        },
        loading: false,
        error: null
    };
    it('returns state when not passed an action', () => {
            const newState = articlesReducer(initialState);
            expect(newState).to.eql(initialState);
        });
    describe('when passed action FETCH_ARTICLES_REQUEST', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchArticlesRequest();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
        it('sets loading to true', () => {
            const action = actions.fetchArticlesRequest();
            const newState = articlesReducer(initialState, action);
            expect(newState.loading).to.equal(true);
        });
    });
    describe('when passed action FETCH_ARTICLES_SUCCESS', () => {
        // it('does not mutate the initial state', () => {
        //     const action = actions.fetchArticlesSuccess();
        //     const newState = articlesReducer(initialState, action);
        //     expect(newState).to.not.equal(initialState);
        // });
        // it('sets loading to false', () => {
        //     const action = actions.fetchArticlesSuccess();
        //     const newState = articlesReducer(initialState, action);
        //     expect(newState.loading).to.equal(false);
        // });
    });
    describe('when passed action FETCH_ARTICLES_ERROR', () => {
        it('does not mutate the initial state', () => {
            const action = actions.fetchArticlesError();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
    });
    describe('when passed action VOTE_ARTICLE_SUCCESS', () => {
        it('does not mutate the initial state', () => {
            const action = actions.voteArticleSuccess();
            const newState = articlesReducer(initialState, action);
            expect(newState).to.not.equal(initialState);
        });
    });
});