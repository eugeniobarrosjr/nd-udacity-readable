import React from 'react';

import { Button, Container } from './styles';

const CommentEditWidget = ({
  openCommentEditForm,
  closeCommentEditForm,
  deleteEntity,
  comment,
  isEditing,
}) => (
  <Container>
    {!isEditing && (
      <Button onClick={() => openCommentEditForm(comment)}>Edit</Button>
    )}
    {isEditing && (
      <Button onClick={() => closeCommentEditForm(comment)}>Cancel</Button>
    )}
    <Button onClick={() => deleteEntity(comment)}>Delete</Button>
  </Container>
);

export default CommentEditWidget;
