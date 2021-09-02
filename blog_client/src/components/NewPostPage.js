import React, { Component } from 'react';
import { Post } from '../requests';
import NewPostForm from './NewPostForm';

export default class NewPostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      post: {},
    };
  }
  createPost = event => {
    event.preventDefault();
    Post.create(this.state.post).then(post => {
      if (post.errors) {
        this.setState({ errors: post.errors });
      } else this.props.history.push(`/posts/${post.id}`);
    });
  };

  render() {
    return (
      <main>
        <div className="header">Create a Post</div>
        <NewPostForm
          createPost={this.createPost}
          post={this.state.post}
          errors={this.state.errors}
          onChange={val => this.setState({ post: { ...this.state.post, ...val } })}
        />
      </main>
    );
  }
}
