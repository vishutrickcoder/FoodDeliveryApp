import React, { useContext, useState } from 'react'
import './LogInPopUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const LoginPopUp = ({setShowLogIn}) => {
    const {url , token , setToken} = useContext(StoreContext);
    const [currentState , setCurrentState] = useState("Login")
    const [data , setData] = useState({
      name:"",
      email:"",
      password: ""
    })

    const onChangeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value
      setData(data=>({...data , [name]:value}))
    }

    const onLogin = async (e) => {
      e.preventDefault()
      let newUrl = url 

      if(currentState === "Login"){
        newUrl += '/api/user/login'
      }else{
        newUrl += '/api/user/register'
      }

      const response = await axios.post(newUrl , data)
      if(response.status === 200){
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token);
        setShowLogIn(false)
        toast.success(response.data.message);
      }
      else{
        toast.error(response.data.message)
      }
    }

    

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img src={assets.cross_icon} onClick={() =>setShowLogIn(false)} alt="" />
        </div>

        <div className="login-popup-input">
            
            {currentState === "Login"?<></>:<input name='name' value={data.name} onChange={onChangeHandler} type="text" placeholder='Your name' required/>}
            <input type="email" onChange={onChangeHandler} value={data.email} name="email" placeholder='Your Email' required/>
            <input type="password" onChange={onChangeHandler} name='password' value={data.password} placeholder='Password' required/>
        </div>
        <button type='submit'>{currentState==="Sign Up"?"Create account":"Login"}</button>
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
