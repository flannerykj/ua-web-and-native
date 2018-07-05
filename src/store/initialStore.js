const initialStore = {
  posts: {
    data: [],
    loading: false,
    shouldUpdate: true,
    error: null,
    page: null,
    pageSize: null,
    total: null,
    receivedAt: null,
    selectedPost: null
  },
  auth: {
    loggedIn: false,
    loading: false,
    error: null
  }
}

export default initialStore;
