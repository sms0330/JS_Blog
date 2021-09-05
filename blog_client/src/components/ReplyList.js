import React from 'react';
import ReplyDetails from './ReplyDetails';

function ReplyList(props) {
  return (
    <div className="ReplyList">
      {props.replies.map(reply => (
        <div className="ui segment" key={reply.id}>
          <ReplyDetails {...reply} onDeleteClick={props.onReplyDelete} />
        </div>
      ))}
    </div>
  );
}

export default ReplyList;
