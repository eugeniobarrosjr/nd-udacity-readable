import React from 'react';

import { Container, Button, Vote } from './styles';

const VotingWidget = ({ upvoteEntity, downvoteEntity, entity }) => (
  <Container>
    <Button onClick={() => upvoteEntity(entity)}>UPVOTE</Button>
    <Vote>{entity.voteScore}</Vote>
    <Button onClick={() => downvoteEntity(entity)}>DOWNVOTE</Button>
  </Container>
);

export default VotingWidget;
