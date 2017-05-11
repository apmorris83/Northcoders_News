import React, { Component } from 'react';
import logo from '../../public/images/loader.svg';
import '../css/Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="Loader">
          <img src={logo} className="Loader-logo" alt="logo" />
      </div>
    );
  }
}

export default Loader;