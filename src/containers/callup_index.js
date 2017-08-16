import _ from 'lodash';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import Dotdotdot from 'react-dotdotdot'
// import Masonry from 'react-masonry-component';
//
// import { slide as Menu } from 'react-burger-menu';
// import SocialShare from '../components/social_share'
// import Slideshow from '../components/slideshow';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import * as actions from '../actions/index';

class Home extends Component {
  render() {
    return(
      <h1 style={{ marginTop: 80 }}>yoaouaouaoua</h1>
    )
  }
}
function mapStateToProps(state){
  console.log('state', state);
  return { callups: state.callups }
};

export default Home;

// side menu for when you get search set up
// <Menu isOpen = { this.state.isOpen }>
//   <form onSubmit={ this.handleSubmit }>
//       <input
//         key="one"
//         type="text"
//         className="form-control"
//         value={ this.state.value }
//         onChange={ this.onInputChange }
//         placeholder="coming soon!"
//         disabled
//       />
//       <input key="two" type='submit' class="form-control" value="Search" disabled />
//   </form>
// </Menu>
