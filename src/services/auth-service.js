// @flow

import apiService from './api-service';

import type { Post } from '../types/post-types';
import LoginForm from '../types/login-form';
import RegistrationForm from '../types/registration-form';

class AuthService {
  login(form: LoginForm): Promise<{token: string}> {
    return apiService.post(`/login`, {...form, username: 'flannj'})
      .then((response) => response)
      .catch((error) => error);
  }
  register(form: RegistrationForm): Promise<{token: string}> {
    return apiService.post(`/register`, form)
      .then((response) => response)
      .catch((error) => error);
  }
}

export default new AuthService();
