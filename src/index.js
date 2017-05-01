import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import '../public/bootstrap/css/bootstrap.min.css';

import App from './components/App';
import HomePage from './components/HomePage';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomePage}/>
        </Route>
    </Router>
    , document.getElementById('app'));