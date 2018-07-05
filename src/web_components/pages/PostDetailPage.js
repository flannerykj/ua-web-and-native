import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import type { PostsContainer } from '../../types/post-types';
import PostList from '../shared/PostList';
import { Container, Loader, Image } from 'semantic-ui-react';
import { postsContainer } from '../../containers/PostsContainer';

class PostDetailPage extends Component<PostsContainer> {
  componentWillMount() {
    console.log(this.props.match.params.id);
    const { selectedPost } = this.props.posts;

    if (!selectedPost || (selectedPost && selectedPost.id !== this.props.match.params.id)) {
      this.props.getPost(this.props.match.params.id);
    }
  }

  render () {

    const { selectedPost } = this.props.posts;
    if (this.props.posts.error) <p> post could not be found</p>;
    if (selectedPost) {
      return (
        <div>
          <h1>{selectedPost && selectedPost.artist}</h1>
          <Image src={selectedPost.image} />
        </div>
      )
    }
    return <Loader />;
  }
}

export default postsContainer(PostDetailPage);
