/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import CommentVotingContainer from '../../containers/CommentVotingContainer';
import CommentEditContainer from '../../containers/CommentEditContainer';
import CommentFormContainer from '../../containers/CommentFormContainer';
import { formatTimestamp } from '../../utils/helpers';

import { Container, PostInfo, PostInfoLink, Body } from './styles';

const Comment = ({ comment, isEditing }) => (
  <Container key={comment.id}>
    <PostInfo>
      Comment by: <PostInfoLink>{comment.author}</PostInfoLink> on{' '}
      <PostInfoLink> {formatTimestamp(comment.timestamp)}</PostInfoLink>
    </PostInfo>
    <CommentEditContainer comment={comment} isEditing={isEditing} />

    {isEditing && <CommentFormContainer comment={comment} isEditing />}
    {!isEditing && <Body>{comment.body}</Body>}
    <CommentVotingContainer comment={comment} />
  </Container>
);

Comment.propTypes = {
  comment: PropTypes.shape({}).isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default Comment;
