import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const LoginPause = () => {
    return (
        <div>
            <Header/>
            <div className="container mt-5">
            <div className="card text-center">
                <div className="card-body">
                    <h2 className="card-title">You are not logged in</h2>
                    <p className="card-text">Please login or register to access this page.</p>
                    <div>
                        <div className="mb-2">
                            <Link to="/ClassmateFinder/login" className="btn btn-primary">
                                Login
                            </Link>
                        </div>
                        <span>OR</span>
                        <div>
                            <Link to="/ClassmateFinder/signup" className="btn btn-success mt-2">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default LoginPause;