import React, { useState } from 'react'
import './LogInPopUp.css'
import { useActionData } from 'react-router-dom'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogIn}) => {

    const [currentState , setCurrentState] = useState("Login")

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img src={assets.cross_icon} onClick={() =>setShowLogIn(false)} alt="" />
        </div>

        <div className="login-popup-input">
            
            {currentState === "Login"?<></>:<input type="text" placeholder='Your name' required/>}
            <input type="email" placeholder='Your Email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"?
        <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:
        <p>Already Have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopUp
