import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import { Input, Form, Label, Button } from './styles';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    const { postId } = this.props;

    this.state = {
      id: uuidv4(),
      timestamp: Date.now(),
      body: '',
      author: '',
      parentId: postId,
    };
  }

  componentDidMount() {
    const { comment } = this.props;

    if (comment !== undefined) {
      this.setState(comment);
    }
  }

  handleInputChange = event => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { isEditing, editComment, addComment } = this.props;
    const { id, timestamp, body, author, parentId } = this.state;

    const comment = {
      id,
      timestamp,
      body,
      author,
      parentId,
    };

    if (isEditing) {
      editComment(comment);
    } else {
      addComment(comment);
    }
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      id: uuidv4(),
      body: '',
      author: '',
    });
  };

  render() {
    const { isEditing } = this.props;
    const { author, body } = this.state;
    return (
      <Form
        id="addCommentForm"
        name="addCommentForm"
        action="POST"
        onSubmit={this.handleFormSubmit}
      >
        {!isEditing && (
          <div>
            <Label htmlFor="author">Author:</Label>
            <Input
              type="text"
              name="author"
              value={author}
              onChange={this.handleInputChange}
            />
          </div>
        )}

        <Label htmlFor="body">Body:</Label>
        <Input
          type="text"
          name="body"
          value={body}
          onChange={this.handleInputChange}
        />

        <Button type="submit" name="submit" />
      </Form>
    );
  }
}
