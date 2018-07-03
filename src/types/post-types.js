// @flow

export type Post {
  id: number,
  image: string,
  date_posted: Date
}

export type PostsContainer {
  data: Post[],
  loading: boolean,
  shouldUpdate: boolean,
  error: ?string,
  page: ?number,
  pageSize: ?number,
  total: ?number,
  receivedAt: ?Date
}
