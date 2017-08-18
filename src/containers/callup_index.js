import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Dotdotdot from 'react-dotdotdot'
import Masonry from 'react-masonry-component';

import * as actions from '../actions/index';


class Home extends Component {

  state = {
    value: '',
    name: '',
    email: '',
    address: ''
  }

  componentWillMount() {
    this.props.fetchCallUps();
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
    if(!this.props.callups) { return <div></div> }

    return (

      _.map(this.props.callups, callup => {
        return (
          <div
            className="card card-border col-md-4 col-sm-6"
            key={`${callup._id}`}
            style={{ padding: 0, border: '1px solid #D3E1E7' }}>

            <div className="view index-image-holder">
              <img src={ callup.imageURL } className="img img-responsive" alt="" />
            </div>

            <div style={{ background: '#B0BEC0', color: '#274E53', padding: 30 }}>
              <div>
                <h4 className="card-title" style={{ fontSize: 1.6 + 'em' }}>
                  { callup.who }
                  <span style={{ marginLeft: 7, marginRight: 7 }}>
                    for
                  </span>
                </h4>
                <h3 className="card-title" style={{ fontSize: 2.1 + 'em' }}>{ callup.for_what }</h3>
                <div>
                  { callup.calluperName == undefined  ? "" : `Called up by ${ callup.calluperName }` }
                </div>

              </div>
              <hr />
              <div style={{ marginBottom: 20 }}>
                <Dotdotdot clamp={4}>

                  <p className="card-text" style={{ paddingBottom: 20, textAlign: 'justify', textJustify: 'inter-word'  }}>{ callup.why }</p>
                </Dotdotdot>
              </div>

              <div className="row" style={{ marginTop: 20, marginBottom: 10 }}>
                <div className="col-md-2"></div>
                <div className="col-xs-12 col-md-8 index-button-div">
                  <Link href={`/callup/${callup._id}`}>
                    <button

                      style={{
                        width: 100 + '%',
                        backgroundColor: '#ff442c',
                        color: '#fff',
                        padding: 10,
                        border: 'none'
                       }}
                    >
                    Learn more about { callup.who }
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        );
      })
    );
  }

  // Dosis|Droid+Sans|Lobster|Nunito|PT+Sans+Narrow|Quicksand|Shadows+Into+Light|Varela+Round


  masonryOptions = {
    transitionDuration: 1000
  }
  render() {

    const childElements = this.renderCallUps()

    return(
      <div style={{ padding: 20, marginBottom: 60 }}>
        <div className="row" id="callup_index_content" style={{ paddingLeft: 30, paddingRight: 30, marginBottom: 10 }}>

          <div style={{ marginTop: 40, marginBottom: 40 }}>
            <div style={{ backgroundColor: '#ff442c', margin: 'auto', padding: 50, borderRadius: 25 }}>
              <img
                className="img img-responsive"
                src="./images/call_up_slogan_white.svg"
                style={{ margin: 'auto' }}/>
            </div>
          </div>

          <div className="row">
            <Masonry
               elementType={'div'}
               options={this.masonryOptions}
               disableImagesLoaded={false}
               updateOnEachImageLoad={false}>
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
