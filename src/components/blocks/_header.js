import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { Navbar, Nav, NavItem, Route } from 'react-bootstrap';
// import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';


class Header extends Component {

  render() {
    return(
      <nav className="navbar" style={{ backgroundColor: 'yellow' }}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand"><img src="../../images/callup_logo_white.svg" style={{ height: 29 }}/></Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">

              <li className="active"><a href="#">home</a></li>
              <li className="active"><a href="#">Call Up</a></li>
              <li className="active"><a href="#">the story</a></li>

            	<li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">account<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign In</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Log Outut</a></li>
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
