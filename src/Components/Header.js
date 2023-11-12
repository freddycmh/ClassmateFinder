import React from 'react';
import { useAuth } from '../Components/AuthContext';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>

      {/* Navigation links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/class" className="nav-link">
              Class
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
              <span className="nav-link">{user}</span>
            </li>
            <li className="nav-item" onClick={logout}>
              <button className="btn btn-danger">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Login />
            </li>
            <li className="nav-item">
              <Signup />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
