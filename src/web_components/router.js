// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Grid, Container } from 'semantic-ui-react';

import PostIndexPage from './pages/PostIndexPage.js';
import PostDetailPage from './pages/PostDetailPage.js';
import ArtistIndexPage from './pages/ArtistIndexPage.js';
import ArtistDetailPage from './pages/ArtistDetailPage.js';
import FourOFourPage from './pages/404Page.js';
import SignupPage from './pages/SignupPage.js';
import LoginPage from './pages/LoginPage.js';
import ProfilePage from './pages/ProfilePage.js';

import Menu from './shared/Menu.js';

export default () => (
  <Router history={history}>
    <Container>
      <Menu history={history} />
      <Switch>
        <Route exact path='/' render={() => (
          <Redirect to='/posts' />
        )} />
        <Route exact path='/posts' component={PostIndexPage} />
        <Route exact path='/posts/:id' component={PostDetailPage} />
        <Route path='/artists' component={ArtistIndexPage} />
        <Route exact path='/artists/:id' component={ArtistDetailPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/profile' component={ProfilePage} />
        <Route path='/' component={FourOFourPage} />
      </Switch>
    </Container>
  </Router>
);
