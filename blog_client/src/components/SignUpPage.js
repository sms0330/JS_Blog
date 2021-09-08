import React from 'react';
import { User } from '../requests';

const SignUpPage = props => {
  const { onSignUp } = props;

  const handleSubmit = event => {
    const { currentTarget } = event;
    event.preventDefault();
    const formData = new FormData(currentTarget);
    const params = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
    };
    User.create(params).then(user => {
      if (user?.id) {
        onSignUp(); //store user in App state
        props.history.push('/'); //navigate to index
      }
    });
  };
  return (
    <main>
      <h1 className="ui center aligned header">Sign Up</h1>
      <form className="ui large form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="first_name">First Name</label>
          <input type="text" name="first_name" id="first_name" required />
        </div>
        <div className="field">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" name="last_name" id="last_name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="field">
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input type="password" name="password_confirmation" id="password_confirmation" required />
        </div>
        <button className="ui right floated primary button" type="submit">
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default SignUpPage;
