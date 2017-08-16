import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import callupReducer from './callup_reducer';


const rootReducer = combineReducers({
  form,
  auth: authReducer,
  callups: callupReducer
});

export default rootReducer;
