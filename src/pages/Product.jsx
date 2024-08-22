import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useParams } from 'react-router-dom'
import Productdetail from '../component/productdetail/Productdetail'
import allproduct from '../component/assest/All_project'
// console.log(allproduct)
const Product = () => {
  const {allproduct}=useContext(Context)
  const {productId}=useParams();
  console.log("Product ID from URL:", productId);
  console.log("All Products:", allproduct);
  const product =allproduct.find((e)=>
    e.id=== Number(productId)
)

  return (
    <div>
      <Productdetail product={product}/>
    </div>
  )
}

export default Product