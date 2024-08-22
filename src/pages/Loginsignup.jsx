import React from 'react'
import "./css/Loginsignup.css"
const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Username"/>
          <input type="email" placeholder="Email"/>
          <input type='password ' placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Aleready have an account? <span>login Here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name="" id=""/>
          <p>By continuing i afree to the terms of use & privacy policies</p>
        </div>
      </div>

  
    </div>
  )
}

export default Loginsignup