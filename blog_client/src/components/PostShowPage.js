import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PostDetails from './PostDetails';
import CommentList from './CommentList';
import { Post, Comment } from '../requests';
import Spinner from './Spinner';
import NewCommentForm from './NewCommentForm';

export default function PostShowPage(props) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    Post.show(props.match.params.id).then(post => {
      setPost(post);
    });
  }, [props.match.params.id]);
  
  const deletePost = id => {
    Post.destroy(id)
    .then(data => {
      if(data.status === 200) {
        setPosts(posts);
      }
      props.history.push("/posts");
    })
  };

  const deleteComment = commentId => {
    setPost({ ...post, comments: post.comments.filter(comment => comment.id !== commentId) });
    Comment.destroy(props.match.params.id, commentId);
  };

  const createComment = e => {
    e.preventDefault();
    const { currentTarget } = e;
    const fd = new FormData(currentTarget);
    const newComment = {
      body: fd.get("body"),
      created_at: "",
      post_id: post.id
    };
    
    Comment.create(newComment).then(data => {
      if (!data.errors) {
        setPost({
          ...post,
          comments: [
            {
              ...comment,
              id: Math.max(...post.comments.map(comment => comment.id)) + 1,
            },
            ...post.comments
          ],
        });
      } else {
          setErrors(data.errors);
          console.log(errors)
      };
    });
  };
  
  return post ? (
    <div>
      <PostDetails {...post} />
      <button
      className="ui right floated red button"
      onClick={() => deletePost(post.id)}
      >
        Delete
      </button>
      <Link
        className="ui left floated yellow button"
        to={`/posts/${post.id}/edit`}
      >
        Edit
      </Link>
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
