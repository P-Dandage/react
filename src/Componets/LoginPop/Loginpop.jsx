import React, { useState } from 'react'
import "./LoginPop.css"
import { assets } from '../../assets/assets';
const Loginpop = ({setshowLogin}) => {
    const[currstate,setcurrState]=useState("Login");
  return (
    <div className='Login-popup'>
    <form  className="login-pop-contaier">
  <div className="login-pop-title">
    <h2>{currstate}</h2>
    <img onClick={()=>setshowLogin(false)}src={assets.cross_icon} alt="" />
  </div>
  <div className="login-pop-input">
    {currstate==="Login"?<></>: <input type='text' placeholder='Your Name' required></input>}
    <input type='email' placeholder='Your Email' required></input>
    <input type='password' placeholder='Password' required></input>
  </div>
  <button>{currstate==="Sign Up"?"Create  account":"Login"}</button>
  <div className="login-popup-condition">
    <input type='checkbox' required></input>
    <p>By continuing, i agree to the terms of use & privacy policy.</p>
  </div>
      {currstate==="Login"
      ?<p> Create a New account?<span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
      : <p>Already have an account?<span onClick={()=>setcurrState("Login")}>Login here</span></p>
      } 
    </form>
    </div>
  )
}

export default Loginpop
