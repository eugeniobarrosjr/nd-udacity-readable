import React from 'react';
import PropTypes from 'prop-types';

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

CommentEditWidget.propTypes = {
  openCommentEditForm: PropTypes.func.isRequired,
  closeCommentEditForm: PropTypes.func.isRequired,
  deleteEntity: PropTypes.func.isRequired,
  comment: PropTypes.shape({}).isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default CommentEditWidget;
