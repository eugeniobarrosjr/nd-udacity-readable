import React, { Component } from 'react';
import Comment from '../Comment';
import CommentFormContainer from '../../containers/CommentFormContainer';

import { Container, Header } from './styles';

class CommentList extends Component {
  componentDidMount() {
    const { fetchComments, postId } = this.props;
    fetchComments(postId);
  }

  render() {
    const { postId, commentToEdit } = this.props;

    const {
      comments: { comments },
    } = this.props;

    return (
      <Container>
        <Header>Comments</Header>

        <CommentFormContainer postId={postId} isEditing={false} />
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            isEditing={
              commentToEdit.isEditing && comment.id === commentToEdit.data.id
            }
          />
        ))}
      </Container>
    );
  }
}

export default CommentList;
