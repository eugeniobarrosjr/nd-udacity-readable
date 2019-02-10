import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose } from 'redux';

import { Provider } from 'react-redux';

import { SortFilters } from './actions/sortFilter';
import AppContainer from './containers/AppContainer';

import middleware from './middleware';
import reducer from './reducers';

import './index.css';

const initialState = {
  sortFilter: SortFilters.DATE_DESCENDING,
};

const store = createStore(reducer, initialState, compose(middleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
