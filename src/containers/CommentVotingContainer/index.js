import { connect } from 'react-redux';

import VotingWidget from '../../components/VotingWidget';

import { sendUpvoteComment, sendDownvoteComment } from '../../actions/comments';

const mapStateToProps = (state, ownProps) => ({
  entity: ownProps.comment,
});

const mapDispatchToProps = dispatch => ({
  upvoteEntity: comment => dispatch(sendUpvoteComment(comment)),
  downvoteEntity: comment => dispatch(sendDownvoteComment(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VotingWidget);
