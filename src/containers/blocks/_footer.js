
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './_footer.css';

class Footer extends Component {

  render() {
    return (

      <div className="footer">

          <div className="footer__navigation">
              <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">the story</a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">call up</a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">resources</a>
                  </li>
                  <li className="footer__item">
                    <Link to="mailto:call.up.change@gmail.com?Subject=CallUp%20Shout%20Out" target="_top" href="#" className="footer__link">contact us</Link>
                  </li>
              </ul>
          </div>



          <div className="footer__copyright">
            <p className="footer__copyright__verbiage">
              Made by in Denver, Colorado
            </p>
            <p className="footer__copyright__verbiage">&copy; Patrick Nicklaus</p>
          </div>

      </div>

    );
  }
}

export default Footer;

// <div className="footer__slug">
//     <p className="footer__slug__verbiage">
//     Good people cause change
//     </p>
// </div>
