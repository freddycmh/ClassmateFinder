// Login.js
import React from 'react';
import { useAuth } from '../Components/AuthContext';

function Login() {
  const { login } = useAuth();

  const handleLogin = () => {
    // Implement login logic and set user name
    login('User Name');
  }

  return (
    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
  );
}

export default Login;