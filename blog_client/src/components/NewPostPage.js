import React, { useState } from 'react';
import { Post } from '../requests';
import NewPostForm from './NewPostForm';

const NewPostPage = props => {
  const [errors, setErrors] = useState([]);

  const createPost = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    const newPost = {
      title: fd.get("title"),
      body: fd.get("body"),
      image: fd.get("image"),
      tag: fd.get("tag")
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
    <NewPostForm
      errors={errors}
      onCreatePost={createPost}
      buttonMessage="Create Post"
    />
  );
};

export default NewPostPage;