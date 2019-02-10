/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import { formatTimestamp } from '../../utils/helpers';
import PostVotingContainer from '../../containers/PostVotingContainer';
import PostEditActionsContainer from '../../containers/PostEditActionsContainer';
import { EDIT_POST } from '../../actions/posts.creator';
import CommentListContainer from '../../containers/CommentListContainer';
import CreateEditPostContainer from '../../containers/CreateEditPostContainer';

import {
  Body,
  Container,
  Header,
  HeaderBar,
  HeaderTitle,
  PostInfo,
  PostInfoLink,
} from './styles';

class PostDetail extends Component {
  static defaultProps = {
    postAction: '',
  };

  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    fetchPost: PropTypes.func.isRequired,
    post: PropTypes.shape({}).isRequired,
    match: PropTypes.shape({}).isRequired,
    postAction: PropTypes.string,
  };

  componentWillMount() {
    const {
      match: {
        params: { postId },
      },
      fetchPost,
    } = this.props;
    fetchPost(postId);
  }

  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if (
      !nextProps.isFetching &&
      (isEmpty(nextProps.post) ||
        (nextProps.post !== undefined && !isEmpty(nextProps.post.error)))
    ) {
      history.push('/404');
    }
  }

  renderPost = post => (
    <Container>
      <Header>{post.title}</Header>
      <PostInfo>
        Posted on {formatTimestamp(post.timestamp)} by{' '}
        <PostInfoLink>{post.author}</PostInfoLink> under{' '}
        <PostInfoLink>{post.category}</PostInfoLink>
      </PostInfo>
      <Body>{post.body}</Body>
      <PostInfo>Comments: {post.commentCount}</PostInfo>
      <PostEditActionsContainer entity={post} />
      <PostVotingContainer entity={post} />
    </Container>
  );

  render() {
    const {
      match: {
        params: { postId },
      },
    } = this.props;
    const { post, postAction } = this.props;
    const isEditing = postAction === EDIT_POST;

    return (
      <div>
        {isEditing ? (
          <Fragment>
            <HeaderBar>
              <HeaderTitle>Edit</HeaderTitle>
            </HeaderBar>
            <CreateEditPostContainer isEditing={isEditing} post={post} />
          </Fragment>
        ) : (
          <Fragment>
            <HeaderBar>
              <HeaderTitle>Post</HeaderTitle>
            </HeaderBar>
            {this.renderPost(post)}

            <CommentListContainer postId={postId} />
          </Fragment>
        )}
      </div>
    );
  }
}

export default PostDetail;
