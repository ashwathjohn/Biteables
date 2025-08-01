import React, { useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  const toggleState = () => {
    setCurrState(prev => (prev === "Login" ? "Sign Up" : "Login"));
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Username" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing I agree to the terms of use & privacy policy
          </p>
        </div>

        <div className="login-popup-toggle">
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={toggleState}>Click here.</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={toggleState}>Login here.</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
