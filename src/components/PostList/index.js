import React, { Component, Fragment } from 'react';

import { SortFilters } from '../../actions/sortFilter';
import PostListItem from '../PostListItem';

import {
  AddButton,
  Button,
  Container,
  Header,
  NotFound,
  HeaderTitle,
  Spotlight,
} from './styles';

export default class PostList extends Component {
  componentDidMount() {
    const { fetchPosts, filterCategory } = this.props;
    fetchPosts(filterCategory);
  }

  sortPosts = (posts, filter) => {
    switch (filter) {
      case SortFilters.VOTES_ASCENDING:
        return posts.slice(0).sort((a, b) => a.voteScore - b.voteScore);
      case SortFilters.VOTES_DESCENDING:
        return posts.slice(0).sort((a, b) => b.voteScore - a.voteScore);
      case SortFilters.DATE_ASCENDING:
        return posts.slice(0).sort((a, b) => a.timestamp - b.timestamp);
      default:
        return posts.slice(0).sort((a, b) => b.timestamp - a.timestamp);
    }
  };

  renderTitle = category => {
    if (category === 'all') return 'Readable';
    return category;
  };

  renderPosts = posts => {
    if (posts.length > 0)
      return posts.map(post => <PostListItem key={post.id} post={post} />);

    return <NotFound>Sorry no Posts</NotFound>;
  };

  render() {
    const { setSortFilter, sortFilter, filterCategory } = this.props;

    const {
      posts: { posts },
    } = this.props;

    const filtedPosts = this.sortPosts(posts, sortFilter);

    return (
      <Fragment>
        <Header>
          <HeaderTitle>{this.renderTitle(filterCategory)}</HeaderTitle>
          <AddButton to="/create">ADD A POST</AddButton>
        </Header>
        {posts.length > 0 && (
          <Container>
            <Spotlight>Order Posts By:</Spotlight>
            <Button onClick={() => setSortFilter(SortFilters.VOTES_DESCENDING)}>
              Most Votes
            </Button>
            <Button onClick={() => setSortFilter(SortFilters.VOTES_ASCENDING)}>
              Least Votes
            </Button>
            <Button onClick={() => setSortFilter(SortFilters.DATE_DESCENDING)}>
              Most Recent
            </Button>
            <Button onClick={() => setSortFilter(SortFilters.DATE_ASCENDING)}>
              Oldest
            </Button>
          </Container>
        )}

        {this.renderPosts(filtedPosts)}
      </Fragment>
    );
  }
}
