import React from 'react';
import { useAuth } from '../Components/AuthContext';
import {Link} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';

function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/class" className="nav-link">Class</Link>
          </li>
        </ul>
        <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
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
              <li className="nav-item"><Login /></li>
              <li className="nav-item"><Signup /></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
