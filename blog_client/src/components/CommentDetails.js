import React from 'react';
// import StarRating from './StarRating';

function CommentDetails(props) {
  return (
    <div className="ui segment CommentDetails">
        <div className="ui labeled button" tabIndex="0">
         <div className="ui button">
          <i className="heart pink icon"></i> Like
         </div>
          <button className="ui basic left pointing label">{props.like_count}</button>
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
    </div>
  );
}

export default CommentDetails;
