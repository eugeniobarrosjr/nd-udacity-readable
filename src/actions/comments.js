import { api, headers } from '../utils/api/helpers';

import {
  addComment as addCommentService,
  deleteComment as deleteCommentService,
  editComment as editCommentService,
  voteComment,
} from '../utils/api/comments';

import {
  addComment,
  closeCommentEdit,
  deleteComment,
  downvoteComment,
  editComment,
  editCommentSuccess,
  openCommentEdit,
  receiveComments,
  requestComments,
  upvoteComment,
} from './comments.creator';

const closeCommentEditForm = () => dispatch => {
  dispatch(closeCommentEdit());
};

function fetchComments(postId) {
  return dispatch => {
    dispatch(requestComments(postId));

    const apiUrl = `${api}/posts/${postId}/comments`;

    return fetch(apiUrl, { headers })
      .then(res => res.json())
      .then(json => dispatch(receiveComments(postId, json)));
  };
}

const openCommentEditForm = comment => dispatch => {
  dispatch(openCommentEdit(comment));
};

const sendAddComment = comment => dispatch => {
  addCommentService(comment).then(data => dispatch(addComment(data)));
};

const sendDeleteComment = comment => dispatch => {
  deleteCommentService(comment.id).then(dispatch(deleteComment(comment.id)));
};

const sendDownvoteComment = comment => dispatch => {
  voteComment(comment.id, 'downVote').then(dispatch(downvoteComment(comment)));
};

const sendEditComment = comment => dispatch => {
  dispatch(editComment(comment.id));

  editCommentService(comment.id, comment).then(data =>
    dispatch(editCommentSuccess(data.id, data)),
  );
};

const sendUpvoteComment = comment => dispatch => {
  voteComment(comment.id, 'upVote').then(dispatch(upvoteComment(comment)));
};

export {
  closeCommentEditForm,
  fetchComments,
  openCommentEditForm,
  sendAddComment,
  sendDeleteComment,
  sendDownvoteComment,
  sendEditComment,
  sendUpvoteComment,
};
