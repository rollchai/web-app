import React, { useContext } from 'react'
import "./css/Shopcatagory.css"
import { Context } from '../context/Context'
import dropdownicon from "../component/anotherphotofolder/dropdown.svg"

import Item from '../component/item/Item'
const Shopcatagory = (props) => {
  
  
  const {allproduct} =useContext(Context)
  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt="" width="100%"/>
      <div className="shopcatagory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 21 Products
        </p>
        <div className="shopcatagory-sort">
          Sort By
          <img src={dropdownicon} alt="" width="50px" height="40px" />
        </div>
      </div>
      <div className="shopcatagory-product">{allproduct.map((item,i)=>{
if(props.catagory===item.catagory){
  return <Item key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
}
else{
  return null
}
      })}</div>
      <div className="shopcatagory-loadmore">Explore More</div>
    </div>
  )
}

export default Shopcatagory