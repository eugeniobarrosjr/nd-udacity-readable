import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import CommentFormContainer from '../../containers/CommentFormContainer';

import { Container, Header } from './styles';

class CommentList extends Component {
  static propTypes = {
    fetchComments: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
    commentToEdit: PropTypes.shape({}).isRequired,
    comments: PropTypes.shape({}).isRequired,
  };

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
