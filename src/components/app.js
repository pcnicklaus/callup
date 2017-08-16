import React, { Component } from 'react';
import logo from '../images/callup-favicon.png';

import Header from '../containers/blocks/_header';
import Footer from '../containers/blocks/_footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default App;
