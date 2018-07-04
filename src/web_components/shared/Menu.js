import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

export default class AppMenu extends Component {
  render() {
    const activeItem = this.props.history;
    console.log(activeItem);

    return (
      <Menu size='large' fluid stackable style={{marginTop: '24px'}}>
        <Menu.Item name='Home' active={activeItem === 'home'} onClick={() => this.props.history.push('/posts')} />
        <Menu.Item
          name='Artists'
          active={activeItem === 'messages'}
          onClick={() => this.props.push('/artists')}
        />

        <Menu.Menu position='right' stackable>
          <Dropdown item text='Language' stackable>
            <Dropdown.Menu stackable>
              <Dropdown.Item stackable>English</Dropdown.Item>
              <Dropdown.Item stackable>French</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>

          <Menu.Item>
            <Button primary>Log In</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
