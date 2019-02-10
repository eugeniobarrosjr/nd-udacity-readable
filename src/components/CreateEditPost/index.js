import React, { Component, Fragment } from 'react';
import uuidv4 from 'uuid/v4';
import { EDIT_POST, ADD_POST } from '../../actions/posts.creator';

import {
  HeaderTitle,
  Input,
  Container,
  Button,
  Label,
  Select,
  TextBox,
  HeaderBar,
} from './styles';

class CreateEditPost extends Component {
  constructor(props) {
    super(props);

    const { post, isEditing } = props;

    this.state = {
      id: post ? post.id : uuidv4(),
      title: post ? post.title : '',
      body: post ? post.body : '',
      author: post ? post.author : '',
      category: post ? post.category : '',
      post_action: isEditing ? EDIT_POST : ADD_POST,
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.post === undefined) return;

    const { id, title, body, author, category } = nextProps.post;

    if (
      title !== undefined &&
      body !== undefined &&
      author !== undefined &&
      category !== undefined
    ) {
      this.setState({
        id,
        title,
        body,
        author,
        category,
        post_action: EDIT_POST,
      });
    }
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { id, title, body, author, category, post_action } = this.state;
    const { history, sendEditPost, sendAddPost } = this.props;

    const post = {
      id,
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
    };

    if (
      post.title === '' ||
      post.body === '' ||
      post.author === '' ||
      post.category === ''
    ) {
      this.setState({
        errors: 'Please Fill out All Fields',
      });
      return;
    }

    if (post_action === ADD_POST) {
      sendAddPost(post);
    } else {
      sendEditPost(post);
    }

    history.push(`/${post.category}/${post.id}`);
  };

  render() {
    const { errors, title, author, body, category } = this.state;
    const {
      isEditing,
      categories: { categories },
    } = this.props;

    return (
      <div>
        {!isEditing && (
          <HeaderBar>
            <HeaderTitle>Add</HeaderTitle>
          </HeaderBar>
        )}

        {errors && <h3>{errors}</h3>}

        <form
          id="postForm"
          name="postForm"
          action="POST"
          onSubmit={this.handleFormSubmit}
        >
          <Container>
            <Label htmlFor="title">Title:</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />

            {!isEditing && (
              <Fragment>
                <Label htmlFor="author">Author:</Label>
                <Input
                  type="text"
                  id="author"
                  name="author"
                  value={author}
                  onChange={this.handleInputChange}
                />
              </Fragment>
            )}
            <Label htmlFor="body">Body:</Label>
            <TextBox
              id="body"
              name="body"
              value={body}
              onChange={this.handleInputChange}
              rows="5"
            />

            {!isEditing && (
              <Fragment>
                <Label htmlFor="category">Category:</Label>
                <Select
                  id="category"
                  name="category"
                  value={category}
                  onChange={this.handleInputChange}
                >
                  <option disabled value="">
                    Select a Category
                  </option>
                  {categories.map(cat => (
                    <option key={cat.name} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </Select>
              </Fragment>
            )}
            <Button type="submit" id="submit" name="submit" />
          </Container>
        </form>
      </div>
    );
  }
}

export default CreateEditPost;
