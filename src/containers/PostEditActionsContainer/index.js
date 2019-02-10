import { connect } from 'react-redux';

import { sendDeletePost } from '../../actions/posts';
import PostEditWidget from '../../components/PostEditWidget';

const mapStateToProps = (state, ownProps) => ({
  entity: ownProps.entity,
});

const mapDispatchToProps = dispatch => ({
  deleteEntity: entity => dispatch(sendDeletePost(entity)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostEditWidget);
