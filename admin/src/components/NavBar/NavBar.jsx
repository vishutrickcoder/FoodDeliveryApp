import React from 'react'
import "./Navbar.css"
import {assets} from '../../assets/assets'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo' alt="" />
        <img src={assets.profile_image} className='profile' alt="" />
    </div>
  )
}

export default NavBar
