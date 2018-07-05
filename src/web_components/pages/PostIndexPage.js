import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import type { PostsContainer } from '../../types/post-types';
import PostList from '../shared/PostList';
import { Container, Loader } from 'semantic-ui-react';
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
  onPostClick = (post) => {
    this.props.setPost(post);
    this.props.history.push(`/posts/${post.id}`);
  }
  render () {
    return (
      <div>
        {this.props.posts.loading ? <Loader /> : (
          <PostList
            posts={this.props.posts.data}
            onPostClick={(post) => this.onPostClick(post)}
          />
        )}
      </div>
    )
  }
}

export default postsContainer(PostIndexPage);
