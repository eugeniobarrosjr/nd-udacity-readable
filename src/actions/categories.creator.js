const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const requestCategories = () => ({
  type: REQUEST_CATEGORIES,
});

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export {
  RECEIVE_CATEGORIES,
  REQUEST_CATEGORIES,
  receiveCategories,
  requestCategories,
};
