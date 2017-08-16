import React, { Component } from 'react';
import logo from '../images/callup-favicon.png';

import Header from './blocks/_header.js';
import Footer from './blocks/_footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
