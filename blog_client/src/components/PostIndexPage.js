import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../requests';
import Spinner from './Spinner';

export default function PostIndexPage(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Post.index().then(posts => {
      setPosts(posts);
    });
  }, []);
  // const deletePost = id => {
  //   setPosts(posts.filter(p => p.id !== id));
  // };
  const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};
  
  return posts ? (
    <main className="ui three column grid">
      <div className="row">
          {posts.map((post, index) => (
            <div className="column" key={index}>
              <div className="ui segment">
                <Link to={`/posts/${post.id}`}>{post.image.small.url ? <img src={`http://localhost:3000${post.image.small.url}`} alt={post.title} style={{ width: "100%",
      height: "auto" }} /> : null}</Link>
                <strong><h4><Link to={`/posts/${post.id}`}>{post.title}</Link></h4></strong>
                
                <p>{truncate(post.body, 50)}</p>
                <div className="ui teal tiny segment">
                <small className="ui green image tiny label">Created at: {new Date(post.created_at).toLocaleDateString()}</small>
                <small className="ui blue image tiny label ">Author: {post.author ? post.author.first_name : null}</small>
                {/* <small>{post.tags.map(tag => tag.name).join(' ')}</small> */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  ) : (
    <Spinner />
  );
}
