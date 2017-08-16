import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app';
// import Signin from './components/auth/signin';
// import Signout from './components/auth/signout';
// import Signup from './components/auth/signup';
// import Feature from './containers/_feature';
// import RequireAuth from './components/auth/require_auth';
// import CallUp from './containers/callup_create';
import Home from './containers/callup_index';
// import CallUpDetail from './containers/callup_detail';
// import Story from './components/story';
//
// import Resource from ''
//
// // tried to load data on enter instead of compwillmount
// // import { onNominateIndexEnter } from './route_callbacks';
//
// import { AUTH_USER } from './actions/types';
import store from './store';

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  // store.dispatch({ type: AUTH_USER });
  console.log('yayaaya token!')
}
// <Route path="signin" component={Signin} />
// <Route path="signout" component={Signout} />
// <Route path="signup" component={Signup} />
// <Route path="story" component={Story} />
// <Route path="callup/:id" component={CallUpDetail} />
// <Route path="feature" component={RequireAuth(Feature)} />
// <Route path="callup" component={ RequireAuth(CallUp)} />

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ Home } />

      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
