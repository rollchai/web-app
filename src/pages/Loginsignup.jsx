import React, { useState } from 'react'
import "./css/Loginsignup.css"
const Loginsignup = () => {
  const [state,setstate]=useState("Login")
  const [formData,setformData]=useState({
    username:"",
    password:"",
    email:"",

  })
  const changehandler=(e)=>{
setformData({...formData,[e.target.name]:e.target.value})
  }
  const login=async()=>{
  console.log("login function Executed",formData)
  }
  const signup =()=>{
    console.log("signup function Executed",formData)
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="sign up"?<input type="text" placeholder="Username" name='username' value={formData.username} onChange={
            changehandler
          }/>:<></>}
          <input name='email' value={formData.email} onChange={changehandler} type="email" placeholder="Email"/>
          <input  name="password" value={formData.password} onChange={
            changehandler
          } type='password ' placeholder='password'/>
        </div>
        <button onClick={()=>{
          state==="Login"?login():signup()
        }}>Continue</button>
        {state==="sign up"? <p className="loginsignup-login">Already have an account? <span onClick={()=>{
          setstate("Login")
        }}>login Here</span></p>:<p className="loginsignup-login">Create an account? <span onClick={()=>{
          setstate("sign up")
        }}>click Here</span></p>}
       
        
        <div className="loginsignup-agree">
          <input type='checkbox' name="" id=""/>
          <p>By contineuing i agree to the terms of use & privacy policies</p>
        </div>
      </div>

  
    </div>
  )
}

export default Loginsignup