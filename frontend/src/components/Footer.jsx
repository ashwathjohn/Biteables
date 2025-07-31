import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <Link onClick={()=> {scrollTo(0,0);  setIsOpen(false)}} to='/' > <span className="text-3xl cursor-pointer font-bold bg-gradient-to-r from-red-700 to-red-400 inline-block text-transparent bg-clip-text">Biteables.</span></Link>
                 <p>Biteables is your go-to destination for fast, fresh, and flavorful food delivery. From local favorites to top rated restaurants, we bring delicious meals straight to your doorstep. Experience convenience, reliability, and taste in every bite.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt='' />
                     <img src={assets.twitter_icon} alt='' />
                      <img src={assets.linkedin_icon} alt='' />

                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9074554473 </li>
                    <li>contactbiteables@gmail.com</li>
                </ul>

            </div>

        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 © Biteables.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
