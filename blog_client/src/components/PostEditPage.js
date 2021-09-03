import React, { useState, useEffect } from 'react';

import { Post } from '../requests';
// import FormErrors from './FormErrors';
import Spinner from './Spinner';
import PostEditForm from './PostEditForm';

const PostEditPage = props => {
  const [errors, setErrors] = useState([]);
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Post.show(props.match.params.id).then(post => {
      setPost(post);
      setIsLoading(false);
    });
  }, [props.match.params.id]);

  if (isLoading) {
    return <Spinner />;
  }

  const updatePost = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    const updatedPost = {
      title: fd.get('title'),
      body: fd.get('body')
    };

    Post.update(props.match.params.id, updatedPost).then(data => {
      if (!data.errors) {
        props.history.push(`/posts/${data.id}`);
      } else {
        setErrors(data.errors);
      }
    });
  };

  return (
    <PostEditForm
      errors={errors}
      onUpdatePost={updatePost}
      buttonMessage="Update Post"
      post={post}
    />
  );
};

export default PostEditPage;
