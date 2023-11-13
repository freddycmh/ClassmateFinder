import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import Header from '../Components/Header';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {

    const userData = {
      name: username,
      yearOfStudy: "Junior",
      major: "Computer Science",
      email: username + "@example.com",
    }
    const dummyPassword = 1234;
    console.log(password == dummyPassword);
    if (username == "" && password == "") {
      setPasswordError("Please enter username and password");
      return;

    }
    if (password == dummyPassword) {

      login(userData);
      navigate('/');
    }

    console.log("here")
    setPasswordError("Incorrect username or password");
    return;


  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Login</h2>
                <form>
                  <span className="text-danger">{passwordError}</span>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password <span class="text-muted">(for text purpose, password is 1234)</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
