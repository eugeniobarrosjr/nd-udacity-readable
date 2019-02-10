const ADD_POST = 'ADD_POST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const DELETE_POST = 'DELETE_POST';
const DOWNVOTE_POST = 'DOWNVOTE_POST';
const EDIT_POST = 'EDIT_POST';
const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
const RECEIVE_POST = 'RECEIVE_POST';
const RECEIVE_POSTS = 'RECEIVE_POSTS';
const RECEIVE_POST_ERROR = 'RECEIVE_POST_ERROR';
const REQUEST_POST = 'REQUEST_POST';
const REQUEST_POSTS = 'REQUEST_POSTS';
const UPVOTE_POST = 'UPVOTE_POST';

const addPost = post => ({
  type: ADD_POST,
  post,
});

const addPostSuccess = post => ({
  type: ADD_POST_SUCCESS,
  post,
});

const deletePost = postId => ({
  type: DELETE_POST,
  postId,
});

const downvotePost = post => ({
  type: DOWNVOTE_POST,
  post,
});

const editPost = post => ({
  type: EDIT_POST,
  post,
});

const editPostSuccess = (postId, json) => ({
  type: EDIT_POST_SUCCESS,
  postId,
  post: json,
});

const receivePost = (postId, json) => ({
  type: RECEIVE_POST,
  postId,
  post: json,
});

const receivePosts = (category, json) => ({
  type: RECEIVE_POSTS,
  category,
  posts: json,
});

const receivePostError = (postId, json) => ({
  type: RECEIVE_POST_ERROR,
  postId,
  error: json,
});

const requestPost = postId => ({
  type: REQUEST_POST,
  postId,
});

const requestPosts = category => ({
  type: REQUEST_POSTS,
  category,
});

const upvotePost = post => ({
  type: UPVOTE_POST,
  post,
});

export {
  ADD_POST,
  ADD_POST_SUCCESS,
  DELETE_POST,
  DOWNVOTE_POST,
  EDIT_POST,
  EDIT_POST_SUCCESS,
  RECEIVE_POST,
  RECEIVE_POSTS,
  RECEIVE_POST_ERROR,
  REQUEST_POST,
  REQUEST_POSTS,
  UPVOTE_POST,
  addPost,
  addPostSuccess,
  deletePost,
  downvotePost,
  editPost,
  editPostSuccess,
  receivePost,
  receivePostError,
  receivePosts,
  requestPost,
  requestPosts,
  upvotePost,
};
