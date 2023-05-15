import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-form__heading">Log In</h3>
      <div className="login-form__inputs">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Log In</button>
      </div>
    </div>
  );
};

export default LoginForm;
