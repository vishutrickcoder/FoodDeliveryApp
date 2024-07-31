import React, { useState } from 'react'
import Navbar from './components/Navbar/NavbarComponent'
import { Route, Routes } from 'react-router-dom'

// Route Imports 
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [showLogIn , setShowLogIn] = useState(false)

  return (
    <>
    <ToastContainer />
    {showLogIn ? <LoginPopUp setShowLogIn={setShowLogIn}/> : <></>}
    <div className='app'>
      <Navbar setShowLogIn={setShowLogIn} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />

      </Routes>

    </div>

    <Footer/>
 
    </>
     )
}

export default App
