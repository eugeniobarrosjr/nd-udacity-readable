import { api, headers } from './helpers';

const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

const getAllPostsInCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export { getAllCategories, getAllPostsInCategory };
