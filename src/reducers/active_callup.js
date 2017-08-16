import {
  ACTIVE_CALLUP
 } from '../actions/types';

export default function( state = {}, action) {

  switch (action.type) {
    case ACTIVE_CALLUP:
      // console.log('in nom reducer action.payload',action.payload)
      return action.payload;
  }

  return state;
}
