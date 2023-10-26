import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div class="loginMenu">
  <div class="form">
    <form class="registerForm">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <input type="mail" placeholder="email adress"/>
      <button>Gooooo!</button>
      <p class="message">Do you have an account? <a href="#">Sign In</a></p>
    </form>
    <form class="loginForm">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>Sign in</button>
      <p class="message">Don't you have an account? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
  )
}

export default Login