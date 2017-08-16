
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Footer extends Component {

  render() {
    return (

      <div id="footer" className="navbar-fixed-bottom" style={{ height: 50}}>
        <div className="container-fluid" style={{ backgroundColor: 'yellow' }}>
           <div className="row">

              <div className="hidden-xs col-sm-6 col-md-8">
                <p style={{ fontSize: 1.2 + 'em', marginBottom: 4 }}>
                  Good people cause change. (period)
                </p>
                <p style={{ marginBottom: 2 }}>If you find 'em, we'll help activate & empower em</p>
              </div>

              <div className="col-md-4" id="footer-contact">
                  <p style={{ marginBottom: 4 }}>
                    <Link   href="mailto:call.up.change@gmail.com?Subject=CallUp%20Shout%20Out" target="_top" style={{ color: '#fff', fontSize: 1.2 + 'em', }}>
                      call.up.change@gmail.com
                    </Link>
                  </p>
                  <p>
                    Made in Denver, Colorado
                  </p>
              </div>

            </div>
        </div>
      </div>

    );
  }
}

export default Footer;
