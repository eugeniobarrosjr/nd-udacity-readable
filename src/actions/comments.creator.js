const ADD_COMMENT = 'ADD_COMMENT';
const CLOSE_COMMENT_EDIT_FORM = 'CLOSE_COMMENT_EDIT_FORM';
const DELETE_COMMENT = 'DELETE_COMMENT';
const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';
const OPEN_COMMENT_EDIT_FORM = 'OPEN_COMMENT_EDIT_FORM';
const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
const UPVOTE_COMMENT = 'UPVOTE_COMMENT';

const addComment = comment => ({
  type: ADD_COMMENT,
  comment,
});

const closeCommentEdit = () => ({
  type: CLOSE_COMMENT_EDIT_FORM,
});

const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  commentId,
});

const downvoteComment = comment => ({
  type: DOWNVOTE_COMMENT,
  comment,
});

const editComment = commentId => ({
  type: EDIT_COMMENT,
  commentId,
});

const editCommentSuccess = (commentId, json) => ({
  type: EDIT_COMMENT_SUCCESS,
  commentId,
  comment: json,
});

const openCommentEdit = comment => ({
  type: OPEN_COMMENT_EDIT_FORM,
  comment,
});

const receiveComments = (postId, json) => ({
  type: RECEIVE_COMMENTS,
  comments: json,
  postId,
});

const requestComments = postId => ({
  type: REQUEST_COMMENTS,
  postId,
});

const upvoteComment = comment => ({
  type: UPVOTE_COMMENT,
  comment,
});

export {
  ADD_COMMENT,
  CLOSE_COMMENT_EDIT_FORM,
  DELETE_COMMENT,
  DOWNVOTE_COMMENT,
  EDIT_COMMENT,
  EDIT_COMMENT_SUCCESS,
  OPEN_COMMENT_EDIT_FORM,
  RECEIVE_COMMENTS,
  REQUEST_COMMENTS,
  UPVOTE_COMMENT,
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
};
