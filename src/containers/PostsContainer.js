import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';

const mapStateToProps = (state) => ({
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts())
});

export function postsContainer(Component){
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
