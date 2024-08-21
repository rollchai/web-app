import React from 'react'
import "./newcollection.css"
import newcollection from "../assest/newcollection"
import Item from '../item/Item'
const Newcollection = () => {
  return (
    <div className='newcollection'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
{
    newcollection.map((item,i)=>{
return <Item key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
    })
}
        </div>
    </div>
  )
}

export default Newcollection