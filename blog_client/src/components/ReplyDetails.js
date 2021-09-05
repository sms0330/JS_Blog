import React from 'react';
// import StarRating from './StarRating';

function ReplyDetails(props) {

  return (
    <div className="ui segment ReplyDetails">
      <div className="ui header"></div>
      <p>
        {props.body} <br />
      </p>
      <p>
        <small> Replier: {props.replier_name} |</small>
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

export default ReplyDetails;
