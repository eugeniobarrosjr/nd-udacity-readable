import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button, Vote } from './styles';

const VotingWidget = ({ upvoteEntity, downvoteEntity, entity }) => (
  <Container>
    <Button onClick={() => upvoteEntity(entity)}>UPVOTE</Button>
    <Vote>{entity.voteScore}</Vote>
    <Button onClick={() => downvoteEntity(entity)}>DOWNVOTE</Button>
  </Container>
);

VotingWidget.propTypes = {
  upvoteEntity: PropTypes.func.isRequired,
  downvoteEntity: PropTypes.func.isRequired,
  entity: PropTypes.shape({}).isRequired,
};

export default VotingWidget;
