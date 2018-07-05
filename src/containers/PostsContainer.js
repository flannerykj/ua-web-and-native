import { connect } from 'react-redux';
import { getPosts, getPost, setPost, unsetPost } from '../actions/posts';

const mapStateToProps = (state) => ({
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
  getPost: (id) => dispatch(getPost(id)),
  setPost: (post) => dispatch(setPost(post)),
  unsetPost: () => dispatch(unsetPost())
});

export function postsContainer(Component){
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
