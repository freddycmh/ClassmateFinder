import React from 'react';
import { useAuth } from '../Components/AuthContext';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        Class Helper
      </span>

      {/* Navigation links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" style={{ borderLeft: '1px solid black', borderRight: '1px solid black', transition: 'border-color 0.3s' }}>
            <Link to="/ClassmateFinder" className="nav-link" style={{ display: 'block', padding: '10px' }}>
              Home
            </Link>
          </li>
          {/* Add other navigation links as needed */}
        </ul>
      </div>

      {/* User-related content */}
      <ul className="navbar-nav ml-auto">
        {user ? (
          <>
            <li className="nav-item">
              <span className="nav-link">{user.name}</span>
            </li>
            <li className="nav-item" onClick={logout}>
              <button className="btn btn-danger">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
                 <Link to="/ClassmateFinder/login" className="nav-link nav-item" >
              log in
            </Link>
              </li>
              <li className="nav-item">
                <Link to="/ClassmateFinder/signup" className="nav-link nav-item" >
              Sign up
            </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
