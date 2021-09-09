import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../logo.png';

function Navbar(props) {
  const { currentUser, onSignOut } = props;
  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === 'function') {
      onSignOut();
    }
  };
  return (
    <nav className="ui large invert menu">
      {/* <div className="item">
         <img src={logo} alt={"logo"} />
      </div> */}
      <NavLink className="active item" to="/">Home</NavLink>
      <NavLink className="item" to="/posts">Posts</NavLink>
      <div className="item">
      <div className="ui category search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search Posts..." />
          <i className="search icon"></i>
        </div>
      </div>
      </div>
      <div className="right menu">
      {currentUser ? (
        <>
          <span className="item">Welcome {`${currentUser.first_name} ${currentUser.last_name}`}</span>
          <div className="item">
          <a className="ui orange button" href="#sign_out" onClick={handleSignOutClick}>
            Sign Out
          </a>
          </div>
          <div className="item">
          <NavLink className="ui teal button" to="/posts/new">New Post</NavLink>
          </div>
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
