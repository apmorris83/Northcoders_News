import React, { Component } from 'react';

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