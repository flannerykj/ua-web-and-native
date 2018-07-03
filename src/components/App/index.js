// @flow
import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import AppView from './AppView';
import { getPosts } from '../../actions/posts';

export default class AppContainer extends React.Component {
  render() {
    store.dispatch(getPosts());
    return (
      <Provider store={store}>
          <AppView/>
      </Provider>
    )
  }
}
