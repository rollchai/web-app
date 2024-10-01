import React, { useContext } from 'react'
import './Carditems.css'
import { Context } from '../../context/Context'
import removeicon from "../anotherphotofolder/remove.svg"

const Carditems = () => {
    const{allproduct,cartitems,removefromcart,gettotalcartamount}=useContext(Context)
    
  return (
    <div className='Cartitems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>remove</p>
        </div>
        <hr/>
        
{allproduct.map((e)=>{
//  debugger
if(cartitems[e.id]>0)
{
   return (<div>
    <div className="cartitems-format cartitems-format-main">
        <img src={e.image}alt="" className='carticon-product-icon'width="72px" height="72px" />
<p>{e.name}</p>
<p>${e.new_price}</p>
<button className='cartitmes-quantity'>{cartitems[e.id]}</button>
<p>${e.new_price*cartitems[e.id]}</p>
<img className='cartitems-remove-icon' src={removeicon} onClick={()=>{
    removefromcart(e.id)}} alt="" height="40px" width="40px"/>
    </div>
    <hr/>
</div>)
}
return null;
})}
<div className="cartitems-down">
    <div className="cartitem-total">
        <h1>cart total</h1>
        <div>
        <div className="cartitems-total-item">
            <p>
                subtotal
            </p>
            <p>
                &{gettotalcartamount()}
            </p>
        </div>
        <hr/>
        <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
        </div>
        <hr/>
        <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${gettotalcartamount()}</h3>
        </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
    </div>
    <div className="cartitems-promocode">
        <p>If You have a promocode, Enter it here</p>
        <div className="cartitems-promobox">
            <input type='text' placeholder='promo code '/>
            <button>Submit</button>
        </div>
    </div>
</div>
    </div>
  )
}

export default Carditems