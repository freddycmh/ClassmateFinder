// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Class from './Pages/Class';
import Student from './Pages/Student';
import LoginPause from './Pages/LoginPause';
import AddClass from './Pages/AddClass';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { AuthProvider } from './Components/AuthContext';

function App() {
  return (
    <Router>

      <AuthProvider>
        <div className="App">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/class/:classname" element={<Class />} />
            <Route path="/student/:studentData" element={<Student />} />
            <Route path="/loginpause" element={<LoginPause />} />
            <Route path="/addclass" element={<AddClass />} />

          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
