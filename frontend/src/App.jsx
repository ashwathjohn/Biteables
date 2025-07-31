import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import LoginPopUp from './components/LoginPopup/LoginPopUp'


const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (

    <>
    {showLogin ?<LoginPopUp setShowLogin={setShowLogin}/> : <></>}
      <div className='app'>
        <Navbar setShowLogin = {setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>

      </div>
      <Footer />
    </>

  )
}

export default App
