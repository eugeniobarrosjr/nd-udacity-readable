import { api, headers } from './helpers';

const addPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then(res => res.json())
    .then(data => data);

const deletePost = postId =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => data);

const editPost = (postId, post) => {
  const { title, body } = post;
  return fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  })
    .then(res => res.json())
    .then(data => data);
};

const getAllPostComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

const postDetail = postId =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data);

const votePost = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option }),
  })
    .then(res => res.json())
    .then(data => data);

export {
  addPost,
  deletePost,
  editPost,
  getAllPostComments,
  getAllPosts,
  postDetail,
  votePost,
};
