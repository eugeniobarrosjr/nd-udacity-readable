import React from 'react';
import PropTypes from 'prop-types';

import { Button, Container } from './styles';

const PostEditWidget = ({ deleteEntity, entity }) => (
  <Container>
    <Button to={`/post/${entity.id}/edit`}>Edit</Button>
    <Button to="/" onClick={() => deleteEntity(entity)}>
      Delete
    </Button>
  </Container>
);

PostEditWidget.propTypes = {
  deleteEntity: PropTypes.func.isRequired,
  entity: PropTypes.shape({}).isRequired,
};

export default PostEditWidget;
