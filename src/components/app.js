import React, { Component } from 'react';
import logo from '../images/callup-favicon.png';

import Header from '../containers/blocks/_header';


class App extends Component {

  async componentWillUnmount() {
    await localStorage.removeItem('token');
  }

  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default App;
