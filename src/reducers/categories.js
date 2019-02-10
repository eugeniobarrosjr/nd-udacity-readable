import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
} from '../actions/categories.creator';

const initialState = {
  isFetching: false,
  categories: [],
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        categories: action.categories,
      };
    default:
      return state;
  }
};

export default categories;
