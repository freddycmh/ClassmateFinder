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
import AllQuiz from './Pages/AllQuiz';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { AuthProvider } from './Components/AuthContext';

function App() {
  console.log("hit");
  return (
    <Router>

      <AuthProvider>
        <div className="App">
          
          <Routes>
            <Route path="/ClassmateFinder" element={<Home />} />
            <Route path="/ClassmateFinder/quiz" element={<AllQuiz />} />
            <Route path="/ClassmateFinder/login" element={<LoginPage />} />
            <Route path="/ClassmateFinder/signup" element={<SignupPage />} />
            <Route path="/ClassmateFinder/class/:classname" element={<Class />} />
            <Route path="/ClassmateFinder/student/:studentData" element={<Student />} />
            <Route path="/ClassmateFinder/loginpause" element={<LoginPause />} />
            <Route path="/ClassmateFinder/addclass" element={<AddClass />} />

          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
