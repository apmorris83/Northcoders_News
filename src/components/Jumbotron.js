import React, { Component } from 'react';
import { Link } from 'react-router';

import '../css/JumboTron.css';

export default class Jumbotron extends Component {
    render() {
        if (this.props.topic === undefined) {
                return (
                <div className="jumbotron vertical-center all">
                    <div className="container">
                        <h2>{capitaliseHero(this.props.topic)} articles</h2>
                    </div>
                </div>
            );
        }
        else if (this.props.topic === 'football') {
                return (
                <div className="jumbotron vertical-center football">
                    <div className="container">
                        <h2>{capitaliseHero(this.props.topic)} articles</h2>
                    </div>
                </div>
            );
        }
        else if (this.props.topic === 'cooking') {
                return (
                <div className="jumbotron vertical-center cooking">
                    <div className="container">
                        <h2>{capitaliseHero(this.props.topic)} articles</h2>
                    </div>
                </div>
            );
        }
        else if (this.props.topic === 'coding') {
                return (
                <div className="jumbotron vertical-center coding">
                    <div className="container">
                        <h2>{capitaliseHero(this.props.topic)} articles</h2>
                    </div>
                </div>
            );
        }
        else {
                return (
                <div className="jumbotron vertical-center all">
                    <div className="container">
                        <h2>Users</h2>
                    </div>
                </div>
            );
        }
    }
}

function capitaliseHero (str) {
  if (str === undefined) {
    return 'All';
  }
  return str[0].toUpperCase() + str.slice(1);
}