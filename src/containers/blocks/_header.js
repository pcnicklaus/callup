import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { Navbar, Nav, NavItem, Route } from 'react-bootstrap';
// import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import './_header.css';


class Header extends Component {

  render() {
    return(
      <nav className="navbar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="myNavbar">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">
              <div className="navbar__logo">
                <h5 style={{
                    fontFamily: "Alfa Slab One",
                    fontSize: 2 + 'rem'
                }}>
                  Call
                  <span style={{
                      display: "inline-block",
                      fontFamily: "Poiret One",
                      fontSize: 2 + 'rem',
                      marginLeft: 2
                  }}>
                    Up
                  </span>
                </h5>
              </div>

            </Link>
          </div>
            <ul className="nav navbar-nav navbar-right">

              <li className="nav__link">
                <Link to="/">home</Link>
                </li>
              <li>
                <Link className="nav__link" to="/callup">call up</Link>
              </li>
              <li>
                <Link className="nav__link" to="/story">the story</Link>
              </li>
              <li>
                <Link className="nav__link" to="/resources">resources</Link>
              </li>

            	<li className="dropdown">
                <a className="dropdown-toggle nav__link" data-toggle="dropdown" href="#">sign<span className="caret"></span></a>
                <ul className="dropdown-menu auth_dropdown">
                  <li><Link className="nav__link" to="/signup">up</Link></li>
                  <li><Link className="nav__link" to="/signin">in</Link></li>
                  <li><Link className="nav__link" to="/signout">out</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}
export default Header;

// <svg fill="red">
//     <image xlinkHref="../../images/call_up_slogan_white.svg" height="100" width="100" fill="red" />
// </svg>
