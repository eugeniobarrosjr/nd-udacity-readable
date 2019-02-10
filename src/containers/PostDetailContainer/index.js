import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchPost } from '../../actions/posts';
import PostDetail from '../../components/PostDetail';

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.posts.isFetching,
  post: state.posts.post,
  postAction: ownProps.action,
});

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PostDetail),
);
