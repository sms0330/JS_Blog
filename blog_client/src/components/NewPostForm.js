import React from 'react';
import FormErrors from './FormErrors';

const NewPostForm = props => {
  let doAction;
  if (props.onUpdatePost) {
    doAction = props.onUpdatePost;
  } else {
    doAction = props.onCreatePost;
  }

  // let tag = props.tags.map(tag => tag.name)
  let updatePost = { title: '', body: '', image: '', tag: ''};
  let postPlaceholder = { ...updatePost };

  if (props.post) {
    updatePost = {
      title: props.post.title,
      body: props.post.body,
      image: props.post.image.url,
      tag: props.post.tag.name
    };
  } else {
    postPlaceholder = {
      title: 'Enter post title',
      body: 'Enter post body',
      tag: 'Enter post tag'
    };
  }
  return (
    <form className="ui form" onSubmit={event => doAction(event)}>
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
          defaultValue={updatePost.body}
          placeholder={postPlaceholder.body}
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
              id="tag"
              defaultValue={updatePost.tag}
              placeholder={postPlaceholder.tag}
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
          defaultValue={updatePost.image}
        />
      </div>
      <button className="ui primary button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewPostForm;
