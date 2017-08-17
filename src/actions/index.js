import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  CREATE_CALLUP,
  FETCH_CALLUPS,
  FETCH_CALLUP,
  ACTIVE_CALLUP,
  TOGGLE_BURGER,
  VOTE,
  FETCH_VOTE_COUNT
} from './types';

const ROOT_URL = 'https://callup-server.herokuapp.com';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push('/');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}


export function createCallUp(formData, cb) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/callup`, formData, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {

        console.log('create callup response in actions/index', response);

        dispatch({
          type: CREATE_CALLUP,
          payload: response.data
        });
      })
      .then( () => { cb(); });
  }
}

export function fetchCallUps() {
  return function(dispatch){
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {

        console.log('response.data in actions/index', response.data);

        dispatch({
          type: FETCH_CALLUPS,
          payload: response.data
        });
      });
  }
}

export function fetchCallUp(id) {
  return function(dispatch){
    axios.get(`${ROOT_URL}/callup/${id}`, {
      headers: { authorization: localStorage.getItem('token')}
    })
      .then(response => {

        dispatch({
          type: FETCH_CALLUP,
          payload: response.data
        });
      });
  }
}

export function activeCallup(callup) {
  return {
    type: ACTIVE_CALLUP,
    payload: callup
  }
}

export function vote(id, formData, cb) {
  console.log("here!!!")
  return function(dispatch) {
    axios.post(`${ROOT_URL}/callup/${id}/signature`, formData)
      .then(response => {
        console.log('VOTE response in actions/index', response);

        dispatch({
          type: FETCH_CALLUP,
          payload: response.data
        });
      })
      .then( () => { cb(); });
  }
}

// export function fetchVoteCount(id) {
//   return function(dispatch) {
//     axios.get(`${ROOT_URL}/callup/${id}/signature`)
//       .then(response => {
//         console.log('FIRING response oin reducer', response);
//         dispatch({
//           type: FETCH_VOTE_COUNT,
//           payload: response.data
//         });
//       })
//   }
// }

//
// export function fetchMessage() {
//   return function(dispatch) {
//     axios.get(ROOT_URL, {
//       headers: { authorization: localStorage.getItem('token') }
//     })
//       .then(response => {
//         dispatch({
//           type: FETCH_MESSAGE,
//           payload: response.data.message
//         });
//       });
//   }
// }
