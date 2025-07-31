import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurreState] = useState("Sign Up");

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title"> 
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
