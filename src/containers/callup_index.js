import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Dotdotdot from 'react-dotdotdot'
import Masonry from 'react-masonry-component';

import MainContent from './blocks/_main_content';
import Mission from './blocks/_mission';
import How from './blocks/_how';

import './callup_index.css';

import * as actions from '../actions/index';


class Home extends Component {

  state = {
    value: '',
    name: '',
    email: '',
    address: '',
    loading: true
  }

  async componentWillMount() {
    await this.props.fetchCallUps();
  }

  componentDidMount() {
    this.state.loading = false;
  }

  onInputChange = (event) => {
    this.setState({
      value: event.target.value,
      isOpen: true
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ isOpen: false })
    console.log(this.state.value, 'handle submit<');
  }

  renderCallUps() {
    if(!this.props.callups) { return null; }

    return (

      _.map(this.props.callups, callup => {
        return (
          <div
            className="card card-border col-md-4 col-sm-6"
            key={callup._id}
          >

            <div className="card__image__holder">
              <img src={ callup.imageURL } className="img test" alt="" />
            </div>

            <div className="card__body">
              <div className="card__header">
                <h4 className="card-title">
                  { callup.who }
                  <span>
                    for
                  </span>
                </h4>
                <h3 className="card-title card__forWhat">{ callup.for_what }</h3>
                <div>
                  { callup.calluperName == undefined ? "" : `Called up by ${ callup.calluperName }` }
                </div>
              </div>

              <div>
                <Dotdotdot clamp={4}>

                  <p className="card-text">{ callup.why }</p>
                </Dotdotdot>
              </div>

              <div className="">
                <Link href={`/callup/${callup._id}`}>
                  <button> Learn more about { callup.who } </button>
                </Link>
              </div>
            </div>

          </div>
        );
      })
    );
  }

  masonryOptions = {
    transitionDuration: 1000
  }

  render() {

    if(this.state.loading) {
      return null;
    }
    const childElements = this.renderCallUps()

    return(
      <div className="main">

        <MainContent />
        <Mission />
        <How />

        <div className="peeps" >

          <div className="mission__header peeps__header">
            <div className="mission__title ">
              <h2 className="mission__title__verbiage">Our Peeps</h2>
            </div>
            <div className="mission__quote">
              <h6 className="mission__quote__verbiage">It always seems impossible until it is done.</h6>
              <h5 className="mission__quote__author">Nelson Mandela</h5>
            </div>
          </div>


          <div className="callup__container">
            <Masonry
               elementType={'div'}
               options={this.masonryOptions}
               disableImagesLoaded={false}
               updateOnEachImageLoad={false}
               style={{ display: 'flex' }}
               >
               {childElements}
            </Masonry>
          </div>

        </div>
      </div>
    )
  }

}

function mapStateToProps(state){
  console.log('state', state);
  return { callups: state.callups }
};

export default connect(mapStateToProps, actions)(Home)

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

// <div
//   className="card card-border col-md-4 col-sm-6"
//   key={callup._id}
// >
//
//   <div className="view index-image-holder">
//     <img src={ callup.imageURL } className="img img-responsive" alt="" />
//   </div>
//
//   <div>
//     <div>
//       <h4 className="card-title">
//         { callup.who }
//         <span>
//           for
//         </span>
//       </h4>
//       <h3 className="card-title">{ callup.for_what }</h3>
//       <div>
//         { callup.calluperName == undefined ? "" : `Called up by ${ callup.calluperName }` }
//       </div>
//
//     </div>
//     <hr />
//     <div>
//       <Dotdotdot clamp={4}>
//
//         <p className="card-text">{ callup.why }</p>
//       </Dotdotdot>
//     </div>
//
//     <div className="row">
//       <div className="col-md-2"></div>
//       <div className="col-xs-12 col-md-8 index-button-div">
//         <Link href={`/callup/${callup._id}`}>
//           <button> Learn more about { callup.who } </button>
//         </Link>
//       </div>
//     </div>
//   </div>
//
// </div>
//
// <div
//   className="callup card"
//   key={callup._id}
// >
//
//   <div className="callup__image">
//     <img src={ callup.imageURL } className="" alt="" />
//   </div>
//
//   <div className="callup__content">
//     <div className="callup__content__title">
//       <h4 className="callup__content__title__name">
//         { callup.who }
//         <span className="callup__content__title__for">
//           for
//         </span>
//       </h4>
//       <h3 className="callup__content__title__what">{ callup.for_what }</h3>
//       <div className="callup__content__title__who">
//         { callup.calluperName == undefined ? "" : `Called up by ${ callup.calluperName }` }
//       </div>
//     </div>
//
//     <hr />
//
//     <div className="callup__content__body">
//       <Dotdotdot clamp={4}>
//         <p className="callup__content__body__verbiage">{ callup.why }</p>
//       </Dotdotdot>
//     </div>
//
//     <div className="callup__content__footer">
//       <Link href={`/callup/${callup._id}`}>
//         <button> Learn more about { callup.who } </button>
//       </Link>
//     </div>
//   </div>
//
// </div>
