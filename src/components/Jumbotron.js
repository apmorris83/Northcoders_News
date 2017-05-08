import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/JumboTron.css';

export default class Jumbotron extends Component {
    render(props) {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h3>{capitaliseHero(this.props.topic)} articles</h3>
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