import React from 'react';

import { Button, Container } from './styles';

const PostEditWidget = ({ deleteEntity, entity }) => (
  <Container>
    <Button to={`/post/${entity.id}/edit`}>Edit</Button>
    <Button to="#" onClick={() => deleteEntity(entity)}>
      Delete
    </Button>
  </Container>
);

export default PostEditWidget;
