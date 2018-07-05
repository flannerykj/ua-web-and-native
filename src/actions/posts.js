// @flow

import type { Action } from '../types/action-types';
import type { Post } from '../types/post-types';
import postService from '../services/post-service';

export function setPost(post: Post) {
  return ((dispatch) => dispatch({ type: 'SET_POST', post }));
}

export function unsetPost(post: Post) {
  return ((dispatch) => dispatch({ type: 'UNSET_POST' }));
}

export function getPosts() {
  return (function(dispatch){
    dispatch ({type: 'GET_POSTS_REQUEST'});
    postService.getAll()
    .then((response) => {
      if (response.data) {
        dispatch({type: 'GET_POSTS_SUCCESS', ...response})
      } else {
        dispatch ({type: 'GET_POSTS_ERROR', response})
      }})
    .catch((error) => dispatch ({type: 'GET_POSTS_ERROR', error}));
  });
}

export function getPost(id: number) {
  return (function(dispatch){
    dispatch ({type: 'GET_POST_REQUEST'});
    postService.getById(id)
    .then((post) => {
      if (post) {
        dispatch({type: 'GET_POST_SUCCESS', post })
      } else {
        dispatch ({type: 'GET_POST_ERROR', response})
      }})
    .catch((error) => dispatch ({type: 'GET_POST_ERROR', error}));
  });
}
