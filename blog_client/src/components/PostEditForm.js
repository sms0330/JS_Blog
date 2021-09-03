import React from 'react';

import FormErrors from './FormErrors';

const PostEditForm = props => {
  let doAction;
  if (props.onUpdatePost) {
    doAction = props.onUpdatePost;
  } else {
    doAction = props.onCreatePost;
  }

  let updatePost = { title: '', body: '' };
  let postPlaceholder = { ...updatePost };

  if (props.post) {
    updatePost = {
      title: props.post.title,
      body: props.post.body,
    };
  } else {
    postPlaceholder = {
      title: 'Enter post title',
      body: 'Enter post body',
    };
  }

  return (
    <form className="NewPostForm ui form" onSubmit={event => doAction(event)}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <FormErrors errors={props.errors} forField="title" />
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={updatePost.title}
          placeholder={postPlaceholder.title}
        />
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
        <FormErrors errors={props.errors} forField="body" />
        <textarea
          name="body"
          id="body"
          rows="10"
          defaultValue={updatePost.body}
          placeholder={postPlaceholder.body}
        />
      </div>
      <button className="ui orange button" type="submit">
        {props.buttonMessage}
      </button>
    </form>
  );
};

export default PostEditForm;