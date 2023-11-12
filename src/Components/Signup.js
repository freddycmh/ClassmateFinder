// Signup.js
import React from 'react';
import { useAuth } from '../Components/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = () => {

    // Navigate to the signup route
    navigate('/signup');
  };

  return (
    <button className="btn btn-success" onClick={handleSignup}>
      Sign Up
    </button>
  );
};

export default Signup;
