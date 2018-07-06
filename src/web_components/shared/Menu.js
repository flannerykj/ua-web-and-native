import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

type AuthMenuProps = {
  authenticated: boolean,
  history: {},
  onLogoutClick: () => void
}

const AuthMenu = (props: AuthMenuProps) => {
  if (props.authenticated) {
    return [
      <Menu.Item
        onClick={() => props.history.push('/profile')}
        key={0}
      >
        Profile
      </Menu.Item>,

      <Menu.Item
        key={1}
      >
        <Button
          primary
          onClick={props.onLogoutClick}
        >
          Log Out
        </Button>
      </Menu.Item>
    ]
  }
  return [
    <Menu.Item
      key={0}
    >
      <Button
        primary
        onClick={() => props.history.push('/signup')}
      >
        Sign Up
      </Button>
    </Menu.Item>,

    <Menu.Item
      key={1}
    >
      <Button
        primary
        onClick={() => props.history.push('/login')}
      >
        Log In
      </Button>
    </Menu.Item>
  ]
}

export default class AppMenu extends Component {
  render() {
    const activeItem = this.props.history.location.pathname;

    return (
      <Menu size='large' fluid stackable style={{marginTop: '24px'}}>
        <Menu.Item name='Posts' active={activeItem.indexOf('posts') > -1} onClick={() => this.props.history.push('/posts')} />
        <Menu.Item
          name='Artists'
          active={activeItem.indexOf('artists') > -1}
          onClick={() => this.props.history.push('/artists')}
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>French</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <AuthMenu
            authenticated={this.props.authenticated}
            onLogoutClick={this.props.onLogout}
            history={this.props.history}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
