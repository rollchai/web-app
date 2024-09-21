import React, { useContext } from 'react'
import "./cartitems.css"
import { Context } from '../../context/Context'
import removeicon from "../anotherphotofolder/remove.svg"
const cartitems = () => {
    const {allproduct,cartitem,removefromcart}=useContext(Context)
  return (
    <div className='cartiems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>  
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {allproduct.map((e)=>{
        if(cartitem[e.id]>0){
            return<div>
                <div className="cartitem-format">
                    <img src={e.image} alt=""className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartitems[e.id]}</button>
                    <p>{e.new_price*cartitems[e.id]}</p>
                    <img src={removeicon} onClick={()=>{
                         removefromcart(e.id)
                    }} alt="" />
                </div>
                <hr/>
            </div>
        }
        })}
    </div>
  )
}

export default cartitems