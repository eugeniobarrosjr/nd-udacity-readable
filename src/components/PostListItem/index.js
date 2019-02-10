/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { formatTimestamp } from '../../utils/helpers';
import PostEditActionsContainer from '../../containers/PostEditActionsContainer';
import PostVotingContainer from '../../containers/PostVotingContainer';

import { Container, HeaderLink, PostInfo, PostInfoLink, Body } from './styles';

const PostListItem = ({ post }) => (
  <Container>
    <h2>
      <HeaderLink to={`/${post.category}/${post.id}`}>{post.title}</HeaderLink>
      <PostEditActionsContainer entity={post} />
    </h2>

    <Body>{post.body}</Body>

    <PostInfo>
      Posted on {formatTimestamp(post.timestamp)} by{' '}
      <PostInfoLink>{post.author}</PostInfoLink> under{' '}
      <PostInfoLink>{post.category}</PostInfoLink>
    </PostInfo>
    <PostInfo>Comments: {post.commentCount}</PostInfo>
    <PostVotingContainer entity={post} />
  </Container>
);

PostListItem.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export default PostListItem;
