import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useParams } from 'react-router-dom'
import Productdetail from '../component/productdetail/Productdetail'
import Productdisplay from '../component/productdisplay/Productdisplay'
import DescriptionBox from '../component/Descriptionbox/DescriptionBox'
import Relatedproducts from '../component/relatedproducts/Relatedproducts'

const Product = () => {
  const {allproduct}=useContext(Context)
  const {productId}=useParams();
  
  
  const product =allproduct.find((e)=>
    e.id=== Number(productId),
)

  return (
    <div>
      <Productdetail product={product}/>
      <Productdisplay product={product}/>
      <DescriptionBox/>
      <Relatedproducts/>
    </div>
  )
}

export default Product