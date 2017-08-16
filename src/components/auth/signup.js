import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

const FIELDS = {
  email: {
    type: null,
    label: 'Enter your email addy'
  },
  password: {
    type: 'password',
    label: 'enter a password, por favor'
  },
  passwordConfirm: {
    type: 'password',
    label: 'rinse and repeat please! w/o the rinse :)'
  }
}

class Signup extends Component {

  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];
    return (
            <fieldset className="form-group">
              <label style={{ color: '#fff', fontSize: 1.2 +'em', paddingLeft: 5 }}>{ fieldConfig.label }</label>

                <input type={fieldConfig.type} style={{ width: 94 + '%' }} className="form-control"  {...fieldHelper} />
                {fieldHelper.touched && fieldHelper.error && <div className="error">{fieldHelper.error}</div>}

            </fieldset>
    )
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="signup" >
        <div className="container"
          style={{
            top: 12 + '%',
            left: 2 + '%',
            position: 'absolute',
          }}
        >
          <div className="col-md-3 col-xs-1"></div>
          <div className="col-md-6 col-xs-10" >
            <form  style={ styles }
              className="signupForm" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            >
            <object
              className="center-block"
              type="image/svg+xml" data="images/callup_logo_white.svg"
              width="40%"
              ></object>

              { _.map(FIELDS, this.renderField.bind(this)) }
              {this.renderAlert()}
              <button action="submit" className="btn" style={{ backgroundColor: '#004687', color: '#fff', fontFamily: 'Comfortaa', fontSize: 1.2 + 'em' }}>Sign up!</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
//    <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
//    <g>
//       <title>Layer 1</title>
//       <ellipse ry="30" rx="30" id="svg_1" cy="50" cx="50" stroke-width="5" stroke="#000000" fill="#FF0000"/>
//    </g>
//  </svg>
const styles = {
  borderRadius: 25,
  background: '#ff442c',
  padding: 30,
  marginTop: 70,

  // width: 200,
  // height: 150,
}

function validate(formProps) {
  const errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  _.each(FIELDS, (type, field) => {
    if (!formProps[field]) {
      errors[field] = `Enter a ${field}`
    }
  })

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: _.keys(FIELDS),
  validate
}, mapStateToProps, actions)(Signup);