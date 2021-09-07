
import React, { useState } from 'react';
import { Post } from '../requests';
import FormErrors from './FormErrors';

const NewPostPage = props => {
  const [errors, setErrors] = useState([]);

  const createPost = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    const newPost = {
      title: fd.get("title"),
      body: fd.get("body"),
      tag: fd.get("tag"),
      image: fd.get("image"),
    };

    Post.create(newPost).then(data => {
      if (data.errors) {
        setErrors(data.errors);
        console.log("errors: ", errors);
      } else {
        props.history.push(`/posts/${data.id}`);
      }
    });

    currentTarget.reset();
  };

  return (
    <form className="ui form" onSubmit={createPost}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <FormErrors errors={errors} forField="title" />
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter post title"
        />
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
        <FormErrors errors={errors} forField="body" />
        <textarea
          name="body"
          id="body"
          placeholder='Enter post body'
        />
      </div>
      <div className="field">
        <label htmlFor="tag">Tag</label>
        <FormErrors errors={props.errors} forField="tag" />
        <div className="ui right labeled left icon input">
          <i className="tags icon"></i>
          <input
            type="text"
            name="tag"
            placeholder='Enter post tag'
          />
          <i className="ui tag label">Add Tag</i>
        </div>
      </div>
      <div className="field">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          accept="image/*"
          name="image"
          id="image"
        />
      </div>
      <button className="ui primary button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewPostPage;