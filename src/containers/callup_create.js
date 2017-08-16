import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import * as actions from '../actions'

const FORM_FIELDS = {
  who: {
    type: 'input',
    label: 'what\'s his or her name?',
    class: 'col-md-6',
  },
  for_what: {
    type: 'input',
    label: 'for what? school board? congress? president?',
    class: 'col-md-6',
  },
  where: {
    type: 'input',
    label: 'where?',
    class: 'col-md-6',
  },
  email: {
    type: 'input',
    label: 'what\'s an email or mobile number for them?',
    class: 'col-md-6',
  },

  imageURL: {
    type: 'input',
    label: 'please include a link to a good pic of them! not on horrible sweater day...',
    class: 'col-md-12'
  },
  why: {
    type: 'textarea',
    label: 'why are they so awesome? why do we need them? what problems can they solve?',
    class: 'col-md-12',
  }
}

class CallUp extends Component {

  handleFormSubmit(formData) {
    console.log('formData', formData)
    const { resetForm } = this.props;
    this.props.createCallUp(formData, () => { this.props.history.push('/') });
  }

  renderField(configObject, field) {
    //there's one field helper per field. it has all the good stuff
    const fieldHelper = this.props.fields[field]

    return (
      <fieldset className={`form-group ${configObject.class} ${ fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : '' }`} key={ configObject.label }>
        <label>{ configObject.label }</label>
        <configObject.type type={ field.type } className="form-control" {...fieldHelper} />
        <div className="text-help">
          { fieldHelper.touched ? fieldHelper.error : '' }
        </div>
      </fieldset>
    )
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div style={{ marginBottom: 50 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div style={{ textAlign: 'center' ,backgroundColor: '#ff442c', maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 50, marginBottom: 50, padding: 50, color: '#fff', borderRadius: 25, }}>
              <h3 style={ styles.title }>CALL UP SOMEONE!</h3>
              <h3 style={{ fontFamily: 'Lobster', fontSize: 4.25 + 'em' }}>Good people cause change</h3>
              <h3 style={{ fontFamily: 'Droid Sans', fontSize: 5 + 'em' }}>Help us find them</h3>
            </div>
          </div>

          <div style={{ marginBottom: 50 }}>
            <form
              className="callup-form"
              onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }
              style={ styles.form }
              >
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <div className="row">
                    { _.map(FORM_FIELDS, this.renderField.bind(this)) }
                  </div>
                </div>
                <div className="col-md-11" style={{ marginTop: 10, marginBottom: 20 }}>
                <button action="submit" className="btn pull-right" style={{ backgroundColor: '#004687', color: '#fff', fontFamily: 'Comfortaa', fontSize: 1.2 + 'em' }}>Call Up</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    fontSize: 6 + 'em',
    fontFamily: 'Dosis',
  },

  form: {
    fontFamily: 'QuickSand',
    fontSize: 1.2 + 'em',
    fontWeight: 'bold',
  }

}


function validate(values) {
  const errors = {};
  console.log(values, ",lslks")
  _.map(FORM_FIELDS, (field, value) => {
    console.log('field\n', field, '\n value \n', value )
    if(!values[value]) {
      console.log('if(!values[value])', values[value])
      errors[value] = `enter a ${value}`
    }
  })

  return errors;
}
export default reduxForm({
  form: 'callup',
  fields: _.keys(FORM_FIELDS),
  validate
}, null, actions)(CallUp);

//// Dosis|Droid+Sans|Lobster|Nunito|PT+Sans+Narrow|Quicksand|Shadows+Into+Light|Varela+Round
