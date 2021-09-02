import React, { Component } from 'react';
import FormErrors from './FormErrors';

export default class NewPostForm extends Component {
  render() {
    return (
      <form className="ui form" onSubmit={this.props.createPost}>
        <div className="field">
          <label htmlFor="title">Title</label>
          <FormErrors errors={this.props.errors} formField="title" />
          <input
            type="text"
            onChange={e => {
              this.props.onChange({ title: e.target.value });
            }}
            value={this.props.post.title}
            name="title"
            id="title"
            placeholder="Please Enter Title"
          />
        </div>
        <div className="field">
          <label htmlFor="body">Body</label>
          <FormErrors errors={this.props.errors} formField="body" />
          <input
            type="text"
            onChange={e => {
              this.props.onChange({ body: e.target.value });
            }}
            value={this.props.post.body}
            name="body"
            id="body"
            placeholder="Please write your opinion."
          />
        </div>
        {/* <div className="field">
          <label htmlFor="image">Image</label>
          <FormErrors errors={this.props.errors} formField="description" />
          <input
            type="file"
            accept="image/*"
            onChange={e => {
              this.props.onChange({ body: e.target.value });
            }}
            value={this.props.post.image}
            name="file"
            id="image"
          />
        </div> */}
        <button className="ui primary button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
