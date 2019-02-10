import { connect } from 'react-redux';

import { fetchComments } from '../../actions/comments';
import CommentList from '../../components/CommentList';

const mapStateToProps = (state, ownProps) => ({
  commentToEdit: state.comments.comment,
  comments: state.comments,
  postId: ownProps.postId,
});

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(fetchComments(postId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentList);
