import React from 'react'
import "./Ofers.css"
import heroine from "../anotherphotofolder/fash2-removebg-preview.png"
const Offers = () => {
  return (
    <div className='offers'>
     
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offer for You</h1>
        <p>
          Only On Best Seller Products
        </p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
      <img src={heroine} alt="" />
      </div>
    </div>
  )
}

export default Offers