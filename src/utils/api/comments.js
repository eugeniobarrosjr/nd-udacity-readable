import { api, headers } from './helpers';

const addComment = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })
    .then(res => res.json())
    .then(data => data);

const getComment = commentId =>
  fetch(`${api}/comments/${commentId}`, { headers })
    .then(res => res.json())
    .then(data => data);

const voteComment = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option }),
  })
    .then(res => res.json())
    .then(data => data);

const editComment = (commentId, comment) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ timestamp: comment.created, body: comment.body }),
  })
    .then(res => res.json())
    .then(data => data);

const deleteComment = commentId =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => data);

export { addComment, deleteComment, editComment, getComment, voteComment };
