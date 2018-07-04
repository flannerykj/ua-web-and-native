import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import type { PostsContainer } from '../../types/post-types';
import PostList from '../shared/PostList';
import { Container } from 'semantic-ui-react';
import { postsContainer } from '../../containers/PostsContainer';

class PostIndexPage extends Component<PostsContainer> {
  componentWillMount() {
    if (this.props.posts.shouldUpdate) {
      this.props.getPosts();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.posts.shouldUpdate) {
      this.props.getPosts();
    }
  }
  render () {
    return (
      <PostList posts={this.props.posts.data} history={this.props.history} />
    )
  }
}

export default postsContainer(PostIndexPage);
