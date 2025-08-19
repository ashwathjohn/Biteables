import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr/>
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add/>} />
           <Route path='/list' element={<List/>} />
            <Route path='/orders' element={<Order/>} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
