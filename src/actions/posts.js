// @flow

import type { Action } from '../types/action-types';
import type Post from '../types/post-types';
import postService from '../services/post-service';

export function getPosts() {
  return (function(dispatch){
    dispatch ({type: 'GET_POSTS_REQUEST'});
    postService.get()
    .then((posts) => dispatch({type: 'GET_POSTS_SUCCESS', posts }))
    .catch((error) => dispatch ({type: 'GET_POSTS_ERROR', error}));
  });
}
