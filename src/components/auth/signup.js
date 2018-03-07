import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

import './auth.css';

const FIELDS = {
  email: {
    type: null,
    label: 'Email goes here'
  },
  name: {
    type: null,
    label: 'What\'s your name?'
  },
  password: {
    type: 'password',
    label: 'Password, por favor'
  },
  passwordConfirm: {
    type: 'password',
    label: 'Rinse and repeat. w/o the rinse'
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
            <fieldset
              className="form-group"
              key={fieldConfig.label}
            >
              <label
                style={{ color: '#fff', paddingLeft: 5 }}
              >
                { fieldConfig.label }
              </label>

              <input 
                type={fieldConfig.type}
                style={{ width: 94 + '%' }}
                className="form-control"
                {...fieldHelper}
              />
                { fieldHelper.touched &&
                  fieldHelper.error &&
                  <div className="auth__error" >
                    Oops... {fieldHelper.error}
                  </div>}

            </fieldset>
    )
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="auth__container">
        <div className="container">

          <div className="center">
            <form
              className="signupForm" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            >
              <object
                className="center-block"
                type="image/svg+xml" data="images/callup_logo_white.svg"
                width="40%"
              ></object>

              { _.map(FIELDS, this.renderField.bind(this)) }

              {this.renderAlert()}

              <button action="submit" className="btn auth__submitButton">Sign up!</button>

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
  marginTop: 110,

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
