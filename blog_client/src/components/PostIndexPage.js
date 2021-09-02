import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../requests';
import Spinner from './Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostIndexPage(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Post.index().then(posts => {
      setPosts(posts);
    });
  }, []);
  const deletePost = id => {
    setPosts(posts.filter(p => p.id !== id));
  };
  const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};
  
  return posts ? (
    <main className="container">
      <div className="row">
          {posts.map((post, index) => (
            <div className="col-lg-4 py-2" key={index}>
              <div className="post-card">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                <p>{truncate(post.body, 50)}</p>
                <button
                  className="mini ui right floated red button"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
                {/* <img src={post.image}/> */}
                <small>Created at: {new Date(post.created_at).toLocaleDateString()}</small>
                <small>Author: {post.author ? post.author.name : null}</small>
                <div className="post-card-footer"></div>
              </div>
            </div>
          ))}
      </div>
    </main>
  ) : (
    <Spinner />
  );
}
