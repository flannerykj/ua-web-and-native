import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import { authContainer } from '../../containers/AuthContainer';
import RegistrationForm from '../../types/registration-form';

type Props = {
  auth: {},
}

class SignupPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      form: new RegistrationForm()
    }
  }
  componentWillMount() {
    if (this.props.auth.token) {
      this.props.history.push('/');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.token) {
      this.props.history.push('/');
    }
  }
  onFormSubmit = () => {
    this.state.form.validate();
    this.setState({
      form: this.state.form
    });
    if (this.state.form.hasErrors) {
      return;
    }
    this.props.register(this.state.form);
  }
  onFieldChange = (field, value) => {
    const form = this.state.form;
    form.updateValues({
      [field]: value
    });
    this.setState({
      form
    });
  }
  render () {
    const { errors } = this.state.form;
    return (
      <div>
        <h1>Sign Up</h1>
        <Form
          ref={this.form}
          onSubmit={this.onFormSubmit}
          error={Object.keys(this.state.form.errors).length > 0}
        >
          <Form.Field
            error={!!(errors.email)}
          >
            <Form.Input
              label='Email'
              placeholder='Email'
              value={this.state.form.email}
              onChange={(e) => this.onFieldChange('email', e.target.value)}
              error={!!(errors.email)}
            />
          </Form.Field>

          <Form.Field error={!!(errors.password)}>
             <Form.Input
              label='Password'
              placeholder='Password'
              value={this.state.form.password}
              onChange={(e) => this.onFieldChange('password', e.target.value)}
            />
          </Form.Field>

          <Form.Field error={!!(errors.password2)}>
             <Form.Input
              label='Password again'
              placeholder='Your password again'
              value={this.state.form.password2}
              onChange={(e) => this.onFieldChange('password2', e.target.value)}
            />
          </Form.Field>

          <Form.Field error={!!(errors.consent)}>
            <Checkbox
              label='I agree to the Terms and Conditions'
              checked={this.state.form.consent}
              onChange={(e) => this.onFieldChange('consent', !this.state.form.consent)}
            />
          </Form.Field>
          {Object.keys(errors).length > 0 && (
            <Message
              error
            >
              <ul>
                <h4>Errors</h4>
                {Object.keys(this.state.form.errors).map((key, i) =>
                  <li key={i}>{this.state.form.errors[key]}</li>
                )}
              </ul>
            </Message>
          )}
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default authContainer(SignupPage);
