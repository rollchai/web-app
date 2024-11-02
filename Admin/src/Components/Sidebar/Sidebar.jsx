import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import add_product from "../../assets/Cart.svg";
import listproduct from "../../assets/list.svg";
const Sidebar = () => {
  return (
    <div className='Sidebar'>
<Link to={'/addproduct'} style={{textDecoration:"none"}}>
<div className='sidebar-item'>
    <img src={add_product} alt=""width="100px" />
    <p>Add Product</p>
</div>

</Link>
<Link to={'/listproduct'} style={{textDecoration:"none"}}>
<div className='sidebar-item'>
    <img src={listproduct} alt="" width="100px"  />
    <p> Product List</p>
</div>

</Link>
    </div>
  )
}

export default Sidebar