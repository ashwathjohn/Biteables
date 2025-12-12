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

  const url= import.meta.env.VITE_BASE_URL

 // const url="http://localhost:3000"
  return (
    <div>
      <ToastContainer 
      position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
      <Navbar />
      <hr/>
      
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
           <Route path='/list' element={<List url={url} />} />
            <Route path='/orders' element={<Order url={url} />} />
        </Routes>
       
      </div>
    
    </div>
  )
}

export default App
