import Form from './form';
import type { Rules, FieldLabels } from './form';

export type LoginFormFields = {
  email: string,
  password: string
}

export default class LoginForm extends Form {
  get keys(): Array<string> {
    return [
      'email',
      'password'
    ];
  }

  get rules(): Rules {
    return {
      email: (input: string) => input.length > 1,
      password: (input) => input.length > 1
    };
  }

  get fieldLabels(): FieldLabels {
    return {
      email: 'email',
      password: 'password'
    };
  }
}
