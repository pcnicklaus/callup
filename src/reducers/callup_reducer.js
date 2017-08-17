import {
  CREATE_CALLUP,
  FETCH_CALLUPS,
  FETCH_CALLUP
 } from '../actions/types';

export default function( state = {}, action) {

  switch (action.type) {
    case FETCH_CALLUPS:
      return action.payload
    case CREATE_CALLUP:
      return { ...state, action }
    case FETCH_CALLUP:
      return action.payload
  }

  return state;
}
