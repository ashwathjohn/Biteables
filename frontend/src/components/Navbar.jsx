import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import {Link, useNavigate} from 'react-router-dom';
import './Navbar.css';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();


  const logout =() => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

  }

  return (
    <div className='navbar'>
     <Link to='/'><span className="text-4xl cursor-pointer font-bold bg-gradient-to-r from-red-700 to-red-400 inline-block text-transparent bg-clip-text"> 
        Biteables.
      </span>
      </Link>
    

      <ul className="navbar-menu">
      
       <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active:pb-2 border-b-2 border-gray-600" : ""}>
         <a> Home</a>
          </Link>
       
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active:pb-2 border-b-2 border-gray-600" : ""}>
          <a href="#explore-menu">Menu</a>
        </li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active:pb-2 border-b-2 border-gray-600" : ""}>
          <a href="#app-download">Mobile-App</a>
        </li>
        <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active:pb-2 border-b-2 border-gray-600" : ""}>
          <a href="#footer">Contact</a>
        </li>
      </ul>

      <div className='navbar-right'>
        <img className='cursor-pointer' src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
          <Link  to='/cart'><img className='cursor-pointer' src={assets.basket_icon} alt='' /></Link>
          <div className={getTotalCartAmount() === 0 ? "":"dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)} className='text-white bg-primary hover:bg-primary-dull transition delay-100 ease-linear cursor-pointer'>
          Sign Up
        </button> : <div className='navbar-profile'>
          <img src={assets.profile_icon}/>
          <ul className='nav-profile-dropdown'>
            <li onClick={()=> navigate('/myorders')}><img src={assets.bag_icon}/><p>Orders</p></li>
            <hr/>
            <li onClick={logout}><img src={assets.logout_icon}/><p>LogOut</p></li>

          </ul>

          </div> }
       
      </div>
    </div>
  );
};

export default Navbar;
