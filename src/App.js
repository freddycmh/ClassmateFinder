import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';
import Class from './Pages/Class';
import Quizlet from './Pages/Quizlet';
import './App.css'; // Import your CSS for the old-style layout.

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/classmate" element={<Class />} />
          <Route path="/quizcard" element={<Quizlet />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

function Home() {
  const tabs = [
    { name: 'classmate', img: 'https://images-platform.99static.com/Mz2IYNEW6EzNgv9RSix25T6qehw=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/129/129413/attachment_129413311' },
    { name: 'quizcard', img: 'https://t3.ftcdn.net/jpg/02/10/55/50/360_F_210555062_97wqh5aRVaV2c7zcbY3zdMTYqxUpjF4j.webp' },
  ];

  return (
    <div>
      <br />
      <div className="actionCard">
        {tabs.map((tab, index) => (
          <Link to={`/${tab.name.toLowerCase()}`} key={index}>
            <Card name={tab.name} img={tab.img} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
