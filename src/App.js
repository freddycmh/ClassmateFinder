import React from 'react';
import Header from './Components/Header'
import './App.css';
import Signup from './Pages/Signup';
import Footer from './Components/Footer';
import Card from './Components/Card';
import { useState } from 'react';



function App() {
const [tabs, useTabs] = useState([
  { name: 'classmate finder', img:'https://static.vecteezy.com/system/resources/previews/016/062/036/non_2x/quiz-time-logo-icon-symbol-cartoon-yellow-bubble-speech-vector.jpg'},
  { name: 'quizcard', img:'https://static.vecteezy.com/system/resources/previews/016/062/036/non_2x/quiz-time-logo-icon-symbol-cartoon-yellow-bubble-speech-vector.jpg'},
  { name: 'class', img: 'https://static.vecteezy.com/system/resources/previews/016/062/036/non_2x/quiz-time-logo-icon-symbol-cartoon-yellow-bubble-speech-vector.jpg' },
  
  
  

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
     

      
      {/* <Footer className="footer"/> */}

    </div>
  );
}

export default App;
