import { connect } from 'react-redux';

import CommentEditWidget from '../../components/CommentEditWidget';

import {
  closeCommentEditForm,
  openCommentEditForm,
  sendDeleteComment,
  sendEditComment,
} from '../../actions/comments';

const mapStateToProps = (state, ownProps) => ({
  entity: ownProps.entity,
  isEditing: ownProps.isEditing,
});

const mapDispatchToProps = dispatch => ({
  openCommentEditForm: comment => dispatch(openCommentEditForm(comment)),
  closeCommentEditForm: () => dispatch(closeCommentEditForm()),
  editEntity: entity => dispatch(sendEditComment(entity)),
  deleteEntity: entity => dispatch(sendDeleteComment(entity)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentEditWidget);
