// Login.js
import React from 'react';
import { useAuth } from '../Components/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); 

  const handleLogin = () => {

    navigate('/login');
  };

  return (
    <button className="btn btn-primary" onClick={handleLogin}>
      Login
    </button>
  );
};

export default Login;
