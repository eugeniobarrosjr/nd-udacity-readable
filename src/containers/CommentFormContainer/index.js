import { connect } from 'react-redux';

import { sendAddComment, sendEditComment } from '../../actions/comments';
import CommentForm from '../../components/CommentForm';

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.postId,
  comment: ownProps.comment,
});

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(sendAddComment(comment)),
  editComment: comment => dispatch(sendEditComment(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentForm);
