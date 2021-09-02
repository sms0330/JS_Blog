import React, { useState, useEffect } from 'react';
import PostDetails from './PostDetails';
import CommentList from './CommentList';
import { Post } from '../requests';
import Spinner from './Spinner';
import NewCommentForm from './NewCommentForm';

export default function PostShowPage(props) {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState({});
  useEffect(() => {
    Post.show(props.match.params.id).then(post => {
      setPost(post);
    });
  }, [props.match.params.id]);
  const deleteComment = commentId => {
    setPost({ ...post, comments: post.comments.filter(comment => comment.id !== commentId) });
  };
  const createComment = e => {
    e.preventDefault();
    setPost({
      ...post,
      comments: [
        {
          ...comment,
          id: Math.max(...post.comments.map(comment => comment.id)) + 1,
        },
        ...post.comments,
      ],
    });
  };
  return post ? (
    <div>
      <PostDetails {...post} />
      <br />
      <h2>Comments</h2>
      <NewCommentForm
        body={comment.body}
        like={comment.like}
        comment={comment}
        onChange={setComment}
        createComment={createComment}
      />
      <CommentList onCommentDelete={deleteComment} comments={post.comments} />
    </div>
  ) : (
    <Spinner />
  );
}
