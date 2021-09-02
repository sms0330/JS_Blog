import React from 'react';
function PostDetails(props) {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <p>
        Body:
        {props.body} <br />
      </p>
      {/* <h4>Image: ${props.image}</h4> */}
      <small>Create Date: {new Date(props.created_at).toLocaleDateString()} | </small>
      <small>Update Date: {new Date(props.updated_at).toLocaleDateString()}</small>
      <p>Author: {props.author.name} </p>
    </div>
  );
}

export default PostDetails;
