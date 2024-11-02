import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/download (1).png"
import navprofileicon from "../../assets/profile.svg"
const Navbar = () => {
  return (
    <div className="Navbar">
        <img src={navlogo} alt="" className="nav-logo"  />
       <h1>SHOPWAVE</h1>
        <h3>Admin Panel</h3>
       <img src={navprofileicon} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar