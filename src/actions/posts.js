import { api, headers } from '../utils/api/helpers';
import {
  addPost as addPostService,
  deletePost as deletePostService,
  editPost as editPostService,
  votePost,
} from '../utils/api/posts';

import {
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
} from './posts.creator';

const fetchPost = postId => dispatch => {
  dispatch(requestPost(postId));

  fetch(`${api}/posts/${postId}`, { headers }).then(res => {
    if (res.ok) {
      res.json().then(data => dispatch(receivePost(postId, data)));
    } else {
      dispatch(receivePostError(postId, res.statusText));
    }
  });
};

const fetchPosts = (category = 'all') => dispatch => {
  dispatch(requestPosts(category));

  let apiUrl = `${api}/posts`;

  if (category !== 'all') {
    apiUrl = `${api}/${category}/posts`;
  }

  return fetch(apiUrl, { headers })
    .then(res => res.json())
    .then(json => dispatch(receivePosts(category, json)));
};

const sendAddPost = post => dispatch => {
  dispatch(addPost(post));
  addPostService(post).then(data => dispatch(addPostSuccess(data)));
};

const sendDeletePost = post => dispatch => {
  deletePostService(post.id).then(dispatch(deletePost(post.id)));
};

const sendDownvotePost = post => dispatch => {
  votePost(post.id, 'downVote').then(dispatch(downvotePost(post)));
};

const sendEditPost = post => dispatch => {
  dispatch(editPost(post));

  editPostService(post.id, post).then(data =>
    dispatch(editPostSuccess(post.id, data)),
  );
};

const sendUpvotePost = post => dispatch => {
  votePost(post.id, 'upVote').then(dispatch(upvotePost(post)));
};

export {
  fetchPost,
  fetchPosts,
  sendAddPost,
  sendDeletePost,
  sendDownvotePost,
  sendEditPost,
  sendUpvotePost,
};
