// @flow

import type { Post, PostsContainer } from '../types/post-types';
import initialStore from '../store/initialStore';


const worksReducer = (state: PostsContainer = initialStore.posts, action) => {
  switch(action.type){
    case 'GET_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
        shouldUpdate: false
      };
    case 'GET_POSTS_SUCCESS':
			return {
        data: action.data,
        page: action.page,
        pageSize: action.pageSize,
        total: action.total,
        receivedAt: action.receivedAt
      };

    case 'GET_POSTS_ERROR':
			return {
        ...state,
        error: action.error,
        shouldUpdate: true
      };
    default:
      return state || initialStore.posts;
	}
};

export default worksReducer;
