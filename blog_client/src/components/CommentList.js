import React from 'react';
import CommentDetails from './CommentDetails';

function CommentList(props) {
  return (
    <div className="CommentList">
      {props.comments.slice(0).reverse().map(comment => (
        <div className="ui segment" key={comment.id}>
          <CommentDetails {...comment} onDeleteClick={props.onCommentDelete} />
        </div>
      ))}
    </div>
  );
}

export default CommentList;
