import React, { useContext, useState } from 'react';
import './Loginpopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"
import { toast } from 'react-toastify'

const LoginPopUp = ({ setShowLogin }) => {

  const {url, handleLogin} = useContext(StoreContext)
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })


  const onChangeHandler = (event) => {
    const name= event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const toggleState = () => {
    setCurrState(prev => (prev === "Login" ? "Sign Up" : "Login"));
  };


  const onLogin = async(event) => {
    event.preventDefault()
    let newUrl = url;
    if(currState == "Login")
    {
      newUrl += "/api/user/login" 
    }
    else{
      newUrl +=  "/api/user/register" 
    }

    /*old code

    const response = await axios.post(newUrl,data);
    if(response.data.success)
    {
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
      
    */

    
    //new code

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        //setToken(response.data.token);
        //localStorage.setItem("token", response.data.token);
           await handleLogin(response.data.token);
        setShowLogin(false);

        
        if (currState === "Login") {
          toast.success("Logged in Successfully! 🎊");
        } else {
          toast.success("Account Created Successfully! 🎊");
        }
      } else {
        toast.error(response.data.message || "Something went wrong ❌");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error ❌");
    }

  }

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
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
            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Username" required />
          )}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Email" required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
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
