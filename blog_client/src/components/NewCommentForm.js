import React from 'react';

export default function NewCommentForm(props) {
  const { body, onChange, createComment, comment } = props;
  return (
    <form className="ui form" onSubmit={createComment}>
      <div className="field">
        <label htmlFor="body">Body</label>
        <textarea
          type="text"
          name="body"
          id="body"
          value={body}
          onChange={e => {
            onChange({ ...comment, body: e.target.value });
          }}
          placeholder="Please Enter Body"
          rows="3"
        />
      </div>
      <button className="ui primary button" type="submit">
        Submit
      </button>
    </form>
  );
}
