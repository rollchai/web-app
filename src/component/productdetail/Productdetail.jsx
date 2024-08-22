import React from 'react'
import "./Productdetail.css"
import arrow from "../anotherphotofolder/arrow.svg"
const Productdetail = (props) => {
  const {product} =props;
  console.log(product)
    console.log('Product data:', product);
    if (!product) {
      return <div>No product data available.</div>;
    }
  return (
    <div className='productdetail'>
        HOME <img src={arrow} alt="" />
        SHOP <img src={arrow} alt="" />
        {product.catagory}
        <img src={arrow}alt="" />
        {product.name}
    </div>
  )
}

export default Productdetail