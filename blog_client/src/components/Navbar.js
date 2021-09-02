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
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 30px',
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>

      {currentUser ? (
        <>
          <span>Welcome {currentUser.name}</span>
          <a href="#sign_out" onClick={handleSignOutClick}>
            Sign Out
          </a>
          <NavLink to="/posts/new">New Post</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/sign_in">Sign In</NavLink>
          <NavLink to="sign_up">Sign Up</NavLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
