// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Router from './web_components/router.js';

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
