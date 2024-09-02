import React from 'react'
import "./Relatedproduct.css"
import newcollection from "../assest/newcollection"
import Item from '../item/Item'
const Relatedproducts = () => {
  return (
    <div className='Relatedproducts'>
<h1>Related Products</h1>
<hr/>
<div className="relatedproduct-items">
{newcollection.map((item,i)=>{
  return <Item key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
</div>

    </div>
  )
}

export default Relatedproducts