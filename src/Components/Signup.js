// Signup.js
import React from 'react';
import { useAuth } from '../Components/AuthContext';


function Signup() {
  const { login } = useAuth();

  const handleSignup = () => {
    // Implement sign-up logic and set user name
    login('User Name');
  }

  return (
    <button className="btn btn-success" onClick={handleSignup}>Sign Up</button>
  );
}

export default Signup;