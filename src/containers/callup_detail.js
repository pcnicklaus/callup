import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import store from '../store';
import * as actions from '../actions';
import Modal from '../components/modal';
import SocialShare from '../components/social_share';


class CallUpDetail extends Component {

  state = {
    isModalOpen: false,
    name: '',
    email: '',
    address: ''
  }

  componentWillMount() {
    const { id } = this.props.params;
    this.props.fetchCallUp(id);
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  handleChange = (e) => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  submitSignature() {
    const id = this.props.params.id;
    const formData = { name: this.state.name, email: this.state.email, address: this.state.address };

    const callback = () => {
      alert('thanks for signing!!!');
      const newState = {name:'', email:'', address:'', isModalOpen: false};
      this.setState(newState);
    }
    this.props.vote(id, formData, callback);
  }

  renderCallUp() {
    return (
      <div>
        <div>
          <h4>Why { this.props.callup.who } has been called up</h4>
          <p >{ this.props.callup.why }</p>
        </div>
      </div>
    )
  }

  render() {
    const { callup } = this.props;

    if (!callup) { return; }

    return (
      <div className="row" style={{ marginBottom: 100 }} >
          <Modal
          isOpen={this.state.isModalOpen}
          onClose={() => this.closeModal()}
          style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 20, paddingBottom: 40, borderRadius: 25,  }}>

            <div style={{ margin: 20 }}>
            <h1 style={{ color: "#ff442c", fontSize: 3 + 'em', marginBottom: 2 }}>Give <span style={{ fontSize: 1.5 + 'em', color: '#004687' }}>{ this.props.callup.who }</span> a boom!</h1>
            <p style={{ color: "#004687", }}>In other words, sign a nomination/petition for them!</p>

            <hr style={{ borderTop: "1px solid #ff442c" }} />

            <fieldset className='form-group'>
              <label>Name</label>
              <input id='formName' className='form-control' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
            </fieldset>
            <fieldset className='form-group'>
              <label>Email</label>
              <input
                id='formEmail' className='form-control' name='email' type='email'  onChange={this.handleChange} value={this.state.email} />
            </fieldset>
            <fieldset className='form-group'>
                <label>Address</label>
                <input id='formAddress' className='form-control' name='address' type='text'  onChange={this.handleChange} value={this.state.address} />
            </fieldset>

            <button
              type="button"
              className="btn-group pull-right"
              onClick={ () => this.closeModal() }
              style={{ color: '#fffff', padding: 10, backgroundColor: '#004687', border: 'none', width: 110 }}
            >
              <p style={{ fontSize: 1.2 + 'em', justifyContent: 'center', margin: 0, color: '#fff' }}>Close
              </p>

            </button>

            <button
              type="button"
              className='btn-group pull-right'
              onClick={() => this.submitSignature() }
              style={{ color: '#fffff', padding: 10, backgroundColor: '#ff442c', border: 'none', width: 120, marginRight: 1 }}
            >
              <p style={{ fontSize: 1.2 + 'em', justifyContent: 'center', margin: 0, color: '#fff' }}>
                Boooooom!!
              </p>
            </button>


          </div>
        </Modal>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10" style={{ textAlign: 'center' }}>
            <h2 style={{ display: 'inline-block', fontSize: 4 + 'em' }}>{ callup.who } </h2>
            <h4 style={{ display: 'inline-block', fontSize: 2 + 'em', padding: 10 }}>for </h4>
            <h1 style={{ display: 'inline-block', fontSize: 6.5 + 'em' }}>{ callup.for_what }</h1>
          </div>
        </div>

        <div className="row" style={{ paddingTop: 10, paddingBottom: 40 }}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <hr style={{ backgroundColor: '#ff442c', height: 2, border: 0,}} />
          </div>
        </div>

        <div className="container">
          <div className="col-md-6" key={callup.what}>
            { this.renderCallUp() }
            <div>
              <SocialShare />
            </div>
            <div className="row" style={{ marginTop: 20, marginBottom: 20 }}>
              <div className="col-xs-12 col-md-12" >
                <button
                  type="button"
                  onClick={ () => this.openModal() }
                  style={{ color: '#fffff', padding: 10, width: 100 + '%', backgroundColor: '#ff442c', border: 'none' }}>
                  <p style={{ fontSize: 1.2 + 'em', justifyContent: 'center', margin: 0, color: '#fff' }}>Boom (sign) { callup.who }s Call Up</p>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6" key={`${callup.who}-${callup.for_what}`}>
            <img src={ this.props.callup.imageURL } className="img-responsive" alt="" />
          </div>
        </div>

      </div>
    )
  }

}

function mapStateToProps(state) {
  return { callup: state.callups }
}

export default connect(mapStateToProps, actions)(CallUpDetail);

// style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}

// <div >
//   <ul >
//     <li><i className="fa fa-clock-o"></i>{ this.props.callup.date }</li>
//     <li><Link className="list-group" href="#"><i className="fa fa-comments-o"></i>12</Link></li>
//     <li><Link href="#"><i className="fa fa-facebook"> </i>21</Link></li>
//     <li><Link href="#"><i className="fa fa-twitter"> </i>5</Link></li>
//   </ul>
// </div>
