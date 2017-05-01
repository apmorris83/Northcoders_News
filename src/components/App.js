import React, { Component } from 'react';

import NavBar from './NavBar';


export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <br/>
                <br/>
                <h1>hello</h1>
                {this.props.children}
            </div>
        ); 
    }
}