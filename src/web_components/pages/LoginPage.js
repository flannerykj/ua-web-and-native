import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import { authContainer } from '../../containers/AuthContainer';
import LoginForm from '../../types/login-form';

class LoginPage extends Component<PostsContainer> {
  constructor(props) {
    super(props);
    this.state = {
      form: new LoginForm()
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
    this.props.login(this.state.form);
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
        <h1>Log In</h1>
        <Form
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
              type='password'
              placeholder='Password'
              value={this.state.form.password}
              onChange={(e) => this.onFieldChange('password', e.target.value)}
            />
          </Form.Field>
          {Object.keys(this.state.form.errors).length > 0 && (
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
          {this.props.auth.error && (
            <Message
              error
              content={this.props.auth.error}
            />
          )}

          <Button type='submit'>Log In</Button>
        </Form>
      </div>
    )
  }
}

export default authContainer(LoginPage);
