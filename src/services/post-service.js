// @flow

import apiService from './api-service';

import type { Post } from '../types/post-types';

class PostService {

  getAll(ids: string = ''): Promise<Post[]> {
    return apiService.get(`/posts`)
      .then((response) => response)
      .catch((error) => error);
  }
  getById(id: number): Promise<Post> {
    return apiService.get(`/posts/${id}`)
      .then((response) => response)
      .catch((error) => error);
  }
}

export default new PostService();
