// @flow

import type { Action } from '../types/action-types';
import LoginForm from '../types/login-form';
import RegistrationForm from '../types/registration-form';
import authService from '../services/auth-service';

export function register(form: RegistrationForm) {
  console.log('action register with form: ', form);
  return ((dispatch) => {
    dispatch({ type: 'REGISTER_REQUEST'})
    authService.register(form)
    .then((response) => {
      if (response.ok) {
        dispatch({ type: 'REGISTER_SUCCESS', data: response.data})
      } else {
        dispatch({ type: 'REGISTER_ERROR', error: response.error})
      }
    })
    .catch((error) => dispatch({ type: 'REGISTER_ERROR', error }))
  });
}

export function login(form: LoginForm) {
  return ((dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST'})
    authService.getToken(form)
    .then((response) => {
      if (response.ok) {
        dispatch({ type: 'LOGIN_SUCCESS', data: response.data})
      } else {
        dispatch({ type: 'LOGIN_ERROR', error: response.errors})
      }
    })
    .catch((error) => dispatch({ type: 'LOGIN_ERROR', error }))
  });
}

export function logout() {
  return ((dispatch) => {
    dispatch({ type: 'LOGOUT_REQUEST'})
    authService.logout()
    .then((response) => {
      console.log(response);
      if (response.ok) {
        dispatch({ type: 'LOGOUT_SUCCESS', data: response.data})
      } else {
        dispatch({ type: 'LOGOUT_ERROR', error: response.error})
      }
    })
    .catch((error) => dispatch({ type: 'LOGOUT_ERROR', error }))
  });
}






