import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const { currentUser, onSignOut } = props;
  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === 'function') {
      onSignOut();
    }
  };
  return (
    <nav className="ui large menu">
      <NavLink className="active item" to="/">Home</NavLink>
      <NavLink className="item" to="/posts">Posts</NavLink>

      <div className="right menu">
      {currentUser ? (
        <>
          <span className="item">Welcome {currentUser.name}</span>
          <a className="active item" href="#sign_out" onClick={handleSignOutClick}>
            Sign Out
          </a>
          <NavLink className="active item" to="/posts/new">New Post</NavLink>
        </>
      ) : (
        <>
          <div className="item">
          <NavLink className="ui button" to="/sign_in">Sign In</NavLink>
          </div>
          <div className="item">
          <NavLink className="ui primary button" to="sign_up">Sign Up</NavLink>
          </div>
        </>
      )}
      </div>
    </nav>
  );
}

export default Navbar;
