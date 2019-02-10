/* eslint-disable react/jsx-one-expression-per-line */
import { NavLink, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { EDIT_POST } from '../../actions/posts.creator';
import CreateEditPostContainer from '../../containers/CreateEditPostContainer';
import PostDetailContainer from '../../containers/PostDetailContainer';
import PostListContainer from '../../containers/PostListContainer';

import { Container, Sidebar, ListItem, Title, Content } from './styles';

export const NoMatch = () => (
  <div>
    <h1>404</h1>
    <h3>We're sorry, but this page does not exist.</h3>
  </div>
);

class App extends Component {
  static propTypes = {
    fetchCategories: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const {
      categories: { categories },
    } = this.props;

    return (
      <Container>
        <Sidebar>
          <div>
            <Title>READABLE</Title>
            <ul>
              <ListItem>
                <NavLink to="/">home</NavLink>
              </ListItem>
              {categories.map(category => (
                <ListItem key={category.name}>
                  <NavLink
                    key={category.name}
                    to={{ pathname: `/${category.path}` }}
                  >
                    {category.path}
                  </NavLink>
                </ListItem>
              ))}
            </ul>
          </div>
        </Sidebar>

        <Content>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <PostListContainer filterCategory="all" />}
            />
            {categories.map(category => (
              <Route
                key={category.name}
                exact
                path={`/${category.path}`}
                render={() => (
                  <PostListContainer
                    key={category.name}
                    filterCategory={category.name}
                  />
                )}
              />
            ))}
            <Route
              exact
              path="/:category/:postId"
              component={PostDetailContainer}
            />
            <Route
              exact
              path="/:category/:postId/edit"
              render={props => (
                <PostDetailContainer {...props} action={EDIT_POST} />
              )}
            />
            <Route
              exact
              path="/create"
              render={props => (
                <CreateEditPostContainer {...props} isEditing={false} />
              )}
            />
            <Route exact path="/404" component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
        </Content>
      </Container>
    );
  }
}

export default App;
