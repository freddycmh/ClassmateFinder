import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import Header from '../Components/Header';

const SignupPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [loginError, setLoginError] = useState('');


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordMatch(e.target.value, repassword);

  };

  const handleRepasswordChange = (e) => {
    setRepassword(e.target.value);
    checkPasswordMatch(password, e.target.value);

  };

  const checkPasswordMatch = (password, repassword) => {
    if (password !== repassword) {
      console.log("true");
      setPasswordMatchError('Passwords do not match');
    } else {
      setPasswordMatchError('');
    }
  };

  const handleLogin = () => {

    const userData = {
      name: username,
      yearOfStudy: "Junior",
      major: "Computer Science",
      email: username + "@example.com",
    }
    if (username == "" && password == "" && repassword == "") {
      setLoginError("Please enter username and password");
      return;

    }
    if (password == repassword) {
      login(userData);
      navigate('/');
    }

  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Sign up</h2>
                <form>
                  <span className="text-danger">{loginError}</span>
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
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="repassword" className="form-label">
                      {/* Re-type Password {passwordMatchError == "" ? "" : (
         
        )} */}Retype-password
                    </label><span className="text-danger ml-5"> &emsp;{passwordMatchError}</span>
                    <input
                      type="password"
                      className="form-control"
                      id="repassword"
                      placeholder="Re-enter your password"
                      value={repassword}
                      onChange={handleRepasswordChange}
                    />

                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={handleLogin}
                  >
                    Sign up
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

export default SignupPage;
