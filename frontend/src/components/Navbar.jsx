import React, { useState } from 'react';
import { assets } from '../assets/assets';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

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
          <div className='dot'></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className='text-white bg-primary hover:bg-primary-dull transition delay-100 ease-linear cursor-pointer'
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
