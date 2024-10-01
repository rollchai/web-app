import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../assest/download (1).png"
import carticon from "../assest/Cart.svg"
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
const Navbar = () => {
const [menu,setmenu]=useState("shop")
const{gettotalcartitem}=useContext(Context)
  return ( 
    <div className='navbar'>
      <div className="nav-logo"> <img src={logo} alt="" />
      <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{
          setmenu("shop")
        }}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{
          setmenu("men")
        }}><Link style={{textDecoration:"none"}} to={"/men"}>Men</Link> {menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{
          setmenu("women")
        }}><Link style={{textDecoration:"none"}} to={"/women"}>women</Link> {menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{
          setmenu("kids")
        }}><Link style={{textDecoration:"none"}} to={"/kids"}>kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
       <div className="nav-login-cart">
        <Link  style={{textDecoration:"none"}} to="/login">  <button>Login</button></Link>
      
       <Link   style={{textDecoration:"none"}}to={"/cart"}><img src={carticon} alt="" height="100px" width="100px"/></Link> 
        <div className="nav-cart-count">{gettotalcartitem()}</div>
      </div>
      
      
    </div>
  )
}

export default Navbar
