import React from 'react';
import Navigation from './Navigation';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <div className="center">
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
