import { connect } from 'react-redux';

import { sendUpvotePost, sendDownvotePost } from '../../actions/posts';
import VotingWidget from '../../components/VotingWidget';

const mapStateToProps = (state, ownProps) => ({
  entity: ownProps.entity,
});

const mapDispatchToProps = dispatch => ({
  upvoteEntity: entity => dispatch(sendUpvotePost(entity)),
  downvoteEntity: entity => dispatch(sendDownvotePost(entity)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VotingWidget);
