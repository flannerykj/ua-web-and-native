import Form from './form';
import type { Rules, FieldLabels } from './form';

export type RegistrationFormFields = {
  email: string,
  password: string,
  password2: string,
  consent: boolean
}

export default class RegistrationForm extends Form {
  get keys(): Array<string> {
    return [
      'email',
      'password',
      'password2',
      'consent'
    ];
  }

  get rules(): Rules {
    return {
      email: (input: string) => input.length > 1,
      password: (input) => input.length > 1,
      password2: (input) => input.length > 1,
      consent: (input) => !!input
    };
  }

  get fieldLabels(): FieldLabels {
    return {
      email: 'email',
      password: 'password',
      password2: 'password verification',
      consent: 'Terms & Conditions'
    };
  }
}
