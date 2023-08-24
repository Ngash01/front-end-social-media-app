import React from 'react';
import "./auth.scss";
import {Link } from "react-router-dom"

const Auth = () => {
  return (
    <div className='Auth'>
      <div className="left">
        <img src="/Img/logo.png" alt="" />
        <div className='info'>
          <h2>ZKC Media</h2>
          <h4>Explore the ideas throghout the world!</h4>
        </div>
      </div>
      <div className="right">
        <h3>Register</h3>
        <div className='inputForm'>
          <div className="names">
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
          </div>
          <input type="text" placeholder='Username'/>
          <div className="passwords">
            <input type="text" placeholder='Password' />
            <input type="text" placeholder="Confirm Password" />
          </div>
        </div>
        <div className='logins'>
          <p>Already have an Account?<Link to={'/login'}><strong> Login</strong></Link></p>
          <button>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Auth;