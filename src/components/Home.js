import React from 'react'
import './Home.css'

const Home = () => {
  return (
      <div id='homepage'>
           <article>
            <nav>
                <ul>
                      <a href="" id="left">Home</a>
                      <a href="" id="right">Log in</a>

                      
                </ul>
            </nav>
            <h1 class="fade-in">A Better Way To Study</h1>
            <div id="content" class="fade-in-2">
                <ul type="none">
                    <li><a href="">Note Sharing</a></li>
                    <li><a href="">Textbook Exchange</a></li>
                      <li><a href="">Quiz Cards</a></li>
                    <li><a href="">Classmates Finder</a></li>
                      
                </ul>
            </div>
            <div class="footer">
                  <p>
                      {/* group 3 */}
                </p>
            
            </div>
        </article>
    </div>
  )
}

export default Home