import React from 'react';
function PostDetails(props) {
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <div className="meta">
        <i className="like">
          <i className="like pink icon"></i> {props.favourites_count} Likes
        </i>
      </div>
      <h4 className="ui teal tag label">{props.tags.map(tag => tag.name).join(' ')}</h4>
      <img src={`http://localhost:3000${props.image.url}`} alt={props.title}/>
      <p>
        Body:
        {props.body} <br />
      </p>
      <small>Create Date: {new Date(props.created_at).toLocaleDateString()} | </small>
      <small>Update Date: {new Date(props.updated_at).toLocaleDateString()}</small>
      <p>Author: {props.author.name} </p>
    </div>
  );
}

export default PostDetails;
