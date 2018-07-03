// @flow

import apiService from './api-service';

import type { Post } from '../types/post-types';

class PostService {

  get(ids: string = ''): Promise<Post[]> {
    return apiService.get(`/posts`)
      .then((response) => response)
      .catch((error) => error);
  }
}

export default new PostService();
