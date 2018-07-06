// @flow
import type { Action } from '../types/action-types';
import LoginForm from '../types/login-form';
import RegistrationForm from '../types/registration-form';
import authService from '../services/auth-service';
import localStorageService from '../services/LocalStorage';

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
    authService.login(form)
    .then((response) => {
      if (response.ok) {
        localStorageService.setItem('token', response.data.token);
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
      if (response.ok) {
        localStorageService.setItem('token', null);
        dispatch({ type: 'LOGOUT_SUCCESS', data: response.data})
      } else {
        dispatch({ type: 'LOGOUT_ERROR', error: response.error})
      }
    })
    .catch((error) => dispatch({ type: 'LOGOUT_ERROR', error }))
  });
}






