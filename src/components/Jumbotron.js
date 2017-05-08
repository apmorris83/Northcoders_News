import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/JumboTron.css';

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron extra-jumbotron vertical-center">
                <div className="container">
                    <h2>{capitaliseHero(this.props.topic)} articles</h2>
                </div>
            </div>
        );
    }
}

function capitaliseHero (str) {
  if (str === undefined) {
    return 'All';
  }
  return str[0].toUpperCase() + str.slice(1);
}