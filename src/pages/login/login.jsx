import React from 'react';
import "./login.scss";
import {Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='Login'>
      
        <img src="/Img/logo.png" className='imgLogo' alt="" />
       
      <div className="right">
        <h3>Sign In</h3>
        <div className='inputForm'>
         <div className='inputfields'>
          <p>Username</p>
          <input type="text" placeholder='type your username'/>
         </div>
          <div className='inputfields'>
            <p>Password</p>
            <input type="text" placeholder='type your password' />
          </div>
        </div>
        <div className='logins'>
          <p>New here?<Link to={'/register'}><strong> Register</strong></Link></p>
          <button className="loginButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login;