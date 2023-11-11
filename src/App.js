import React from 'react';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Card from './Components/Card';
import Class from './Pages/Class';
import Student from './Pages/Student';
import Quizlet from './Pages/Quizlet';
import './App.css'; // Import your CSS for the old-style layout.

function App() {
  console.log("testing")
  return (
    // <div className="App">
    //   <Header />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/classmate" element={<Class />} />
    //       <Route path="/quizcard" element={<Quizlet />} />
    //       {/* <Route path="/" element={<Home />} /> */}
    //     </Routes>
    //   </BrowserRouter>
    //   <Footer />
    // </div>
    <Router>
      <div className="App">
        <nav className="navbar"></nav>
        <Link to="/"> Home</Link>
        <Link to="/class"> Class</Link>
      
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class/:classname" element={<Class />} />
        <Route path="/student/:studentData" element={<Student />}/>
      </Routes>

    </Router>
    
  );
}

// function Home() {
//   const tabs = [
//     { name: 'classmate', img: 'https://images-platform.99static.com/Mz2IYNEW6EzNgv9RSix25T6qehw=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/129/129413/attachment_129413311' },
//     { name: 'quizcard', img: 'https://t3.ftcdn.net/jpg/02/10/55/50/360_F_210555062_97wqh5aRVaV2c7zcbY3zdMTYqxUpjF4j.webp' },
//   ];

//   return (
//     <div>
//       <br />
//       <div className="actionCard">
//         {tabs.map((tab, index) => (
//           <Link to={`/${tab.name.toLowerCase()}`} key={index}>
//             <Card name={tab.name} img={tab.img} />
//           </Link>
//         ))}

//       </div>
//     </div>
//   );
// }

export default App;
