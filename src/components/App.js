import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import Jumbotron from './Jumbotron';

import '../css/App.css';

export default class App extends Component {
    render() {
        return (
            <div className="mainContainer">
            <Jumbotron 
            topic={this.props.params.topic}
            />
            <div>
                <NavBar />
                {this.props.children}
            </div>
            </div>
        );
    }
}

App.propTypes = {
    params: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
};