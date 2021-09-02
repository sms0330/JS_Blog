import React, { useState } from 'react';
import { Session } from '../requests';

export default function SignInPage(props) {
  const [errors, setErrors] = useState([]);
  const createSession = event => {
    event.preventDefault();
    const { currentTarget: form } = event;
    const formData = new FormData(form);

    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    Session.create(user).then(data => {
      if (data.status === 404) {
        setErrors([{ message: 'Wrong email or password' }]);
      } else {
        setErrors([]);
        props.history.push('/');
        if (typeof props.onSignIn === 'function') {
          props.onSignIn();
        }
      }
    });
  };
  return (
    <main>
      <form className="ui form" onSubmit={createSession}>
        {errors.length > 0 ? (
          <div className="ui negative message">
            <div className="header">Error Signing in...</div>
            <p>{errors.map(err => err.message).join(', ')}</p>
          </div>
        ) : (
          ''
        )}
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="email@example.com" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <button className="ui primary button" type="submit">
          Sign In
        </button>
      </form>
    </main>
  );
}
