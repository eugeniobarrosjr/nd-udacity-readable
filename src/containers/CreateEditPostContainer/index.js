import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { sendAddPost, sendEditPost } from '../../actions/posts';
import CreateEditPost from '../../components/CreateEditPost';

const mapStateToProps = (state, ownProps) => ({
  categories: state.categories,
  post: ownProps.post,
  isEditing: ownProps.isEditing,
});

const mapDispatchToProps = dispatch => ({
  sendAddPost: post => dispatch(sendAddPost(post)),
  sendEditPost: post => dispatch(sendEditPost(post)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CreateEditPost),
);
