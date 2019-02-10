import { combineReducers } from 'redux';
import sortFilter from './sortFilter';
import posts from './posts';
import comments from './comments';
import categories from './categories';

const rootReducer = combineReducers({
  posts,
  comments,
  categories,
  sortFilter,
});

export default rootReducer;
