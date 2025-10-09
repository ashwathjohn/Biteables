import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>
        <span className="text-4xl cursor-pointer font-bold bg-gradient-to-r from-red-700 to-red-400 inline-block text-transparent bg-clip-text"> 
        Biteables.
      </span>
        </Link>

        <img className='profile' src={assets.profile_image} />
      
      
    </div>
  )
}

export default Navbar
