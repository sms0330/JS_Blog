import React from 'react';
// import StarRating from './StarRating';

function CommentDetails(props) {
  return (
    <div className="ui segment CommentDetails">
      <div className="ui header">Comment Details</div>
      <p>
        {props.body} <br />
      </p>
      <p>
        <small> Commenter: {props.author_name} |</small>
        <small> Create Date: {new Date(props.created_at).toLocaleDateString()} |</small>
        <small> ({props.like_count}likes)</small>
        <button
          className="ui right floated red button"
          onClick={() => {
            props.onDeleteClick(props.id);
          }}
        >
          Delete
        </button>
      </p>
      {/* <StarRating max={5} current={props.rating} /> */}
    </div>
  );
}

export default CommentDetails;
