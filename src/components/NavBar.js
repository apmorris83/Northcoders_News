import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from '../../public/images/northcoders-news-logo.svg';
import '../css/NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link to="/"><img className="logo-svg" src={logo} alt={'Northcoders News'}></img></Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">All</Link></li>
                            <li><Link to="/football">Football</Link></li>
                            <li><Link to="/cooking">Cooking</Link></li>
                            <li><Link to="/coding">Coding</Link></li>
                            <li><Link to="/users">Users</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}