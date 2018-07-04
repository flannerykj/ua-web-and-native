// @flow

import type { Action } from '../types/action-types';
import type Post from '../types/post-types';
import postService from '../services/post-service';

export function getPosts() {
  return (function(dispatch){
    dispatch ({type: 'GET_POSTS_REQUEST'});
    postService.get()
    .then((response) => {
      if (response.data) {
        dispatch({type: 'GET_POSTS_SUCCESS', ...response})
      } else {
        dispatch ({type: 'GET_POSTS_ERROR', response})
      }})
    .catch((error) => dispatch ({type: 'GET_POSTS_ERROR', error}));
  });
}
