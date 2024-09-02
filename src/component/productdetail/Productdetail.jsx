import React from 'react'
import "./Productdetail.css"
import arrow from "../anotherphotofolder/arrow.svg"

const Productdetail = (props) => {
  const {product} =props;  
    if (!product) {
      return <div>No product data available.</div>;
    }
  return (
    <div className='productdetail'>
        HOME <img src={arrow} alt=""width="40px" height="40px" />
        SHOP <img src={arrow} alt="" width="40px" height="40px"  />
        {product.catagory}
        <img src={arrow}alt="" width="40px" height="40px"  />
        {product.name}
    </div>
  )
}

export default Productdetail