import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import '../public/bootstrap/css/bootstrap.min.css';

import App from './components/App';
import HomePage from './components/HomePage';
import reducer from './reducer/index.reducer';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={HomePage}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('app'));