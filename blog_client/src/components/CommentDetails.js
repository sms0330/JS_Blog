import React, { useState } from 'react';
// import StarRating from './StarRating';

function CommentDetails(props) {
  let [ like, setLike ] = useState(0)

  return (
    <div className="ui segment CommentDetails">
        <div className="ui labeled button" tabIndex="0">
         <div className="ui button">
          <i className="heart pink icon" onClick={ () => setLike(like + 1) }></i>Likes
         </div>
          <button className="ui basic left pointing label">{props.like_count+like}</button>
        </div>
      <div className="ui header"></div>
      <p>
        {props.body} <br />
      </p>
      <p>
        <small> Commenter: {props.author_name} |</small>
        <small> Create Date: {new Date(props.created_at).toLocaleDateString()} |</small>
        <button
          className="ui right floated red button"
          onClick={() => {
            props.onDeleteClick(props.id);
          }}
        >
          Delete
        </button>
      </p>
      {/* <small>{props.replies.map(reply => reply.body) }</small> */}
    </div>
  );
}

export default CommentDetails;
