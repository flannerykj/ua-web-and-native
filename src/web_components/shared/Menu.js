import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

export default class AppMenu extends Component {
  render() {
    const activeItem = this.props.history.location.pathname;
    console.log(activeItem);

    return (
      <Menu size='large' fluid stackable style={{marginTop: '24px'}}>
        <Menu.Item name='Posts' active={activeItem.indexOf('posts') > -1} onClick={() => this.props.history.push('/posts')} />
        <Menu.Item
          name='Artists'
          active={activeItem.indexOf('artists') > -1}
          onClick={() => this.props.push('/artists')}
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>French</Dropdown.Item>
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
