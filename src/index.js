import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import '../public/bootstrap/css/bootstrap.min.css';

import App from './components/App';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';
import UsersHome from './components/UsersHome';
import reducer from './reducer/index.reducer';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={HomePage}/>
                <Route path='/:topic' component={HomePage} />
                <Route path='/:topic/:articleId' component={ArticlePage} />
                <Route path='/users' component={UsersHome} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));