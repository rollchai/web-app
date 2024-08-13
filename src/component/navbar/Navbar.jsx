import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../assest/download (1).png"
import carticon from "../assest/Cart.svg"
const Navbar = () => {
const [menu,setmenu]=useState("shop")

  return (
    <div className='navbar'>
      <div className="nav-logo"> <img src={logo} alt="" />
      <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{
          setmenu("shop")
        }}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{
          setmenu("men")
        }}>Men {menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{
          setmenu("women")
        }}>Women {menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{
          setmenu("kids")
        }}>kids {menu==="kids"?<hr/>:<></>}</li>
      </ul>
       <div className="nav-login-cart">
        <button>Login</button>
        <img src={carticon} alt="" height="100px" width="100px"/>
        <div className="nav-cart-count">0</div>
      </div>
      
      
    </div>
  )
}

export default Navbar
