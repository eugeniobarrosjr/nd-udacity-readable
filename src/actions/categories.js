import { getAllCategories } from '../utils/api/categories';
import { receiveCategories, requestCategories } from './categories.creator';

const fetchCategories = () => dispatch => {
  dispatch(requestCategories());

  getAllCategories().then(categories =>
    dispatch(receiveCategories(categories)),
  );
};

export { fetchCategories };
