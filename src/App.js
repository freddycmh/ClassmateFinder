import React from 'react';
import Header from './Components/Header'
import './App.css';
import Signup from './Pages/Signup';
import Footer from './Components/Footer';
import Card from './Components/Card';
import { useState } from 'react';



function App() {
const [tabs, useTabs] = useState([
  { name: 'classmate', img:'https://e.saravanaonline.com/img/m/238.jpg'},
  { name: 'quizcard', img:'https://t3.ftcdn.net/jpg/02/10/55/50/360_F_210555062_97wqh5aRVaV2c7zcbY3zdMTYqxUpjF4j.webp'}
  
  
  

  ]);

  return (
    <div className="App">
      <Header />

     <br/>
      <div className='actionCard'>
          {tabs.map((tabs) => {
            return (
              < Card name={tabs.name}  img={tabs.img} />
            )
          })
          }
      </div>
     

      
      <Footer className="footer"/>

    </div>
  );
}

export default App;
