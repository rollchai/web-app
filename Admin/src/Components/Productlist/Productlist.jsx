import React, { useEffect, useState } from 'react'
import "./Productlist.css"
import cross_icon from '../../assets/cross.svg'
const Productlist = () => {
  const [allproducts,setallproducts]=useState([]);
  const fetchinfo=async()=>{
    await fetch('http://localhost:4000/allproducts').then((res)=>res.json())
    .then((data)=>{
      setallproducts(data)
    });
  }
  useEffect(()=>{
    fetchinfo();
  },[])

  const remove_product=async (id)=>{
    //we will provide this id to this api
    await fetch('http://localhost:4000/removeproduct',{
      method:'DELETE',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    }) 
  await fetchinfo();

  }
  return (
    <div className='Productlist'>
      <h1>All Product List</h1>
      <div className="list-product-formatmain">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr/>
        {allproducts.map((product,index)=>{
          return<> <div key={index} className="list-product-formatmain listproduct-format">
            <img src={product.image} alt="" className="listproduct-product-icon" width="150px" />
            <p>{product.name}</p>
            <p>{product.old_price}</p>
            <p>{product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{
              remove_product(product.id);
            }} className='listproduct-remove-icon' src={cross_icon} alt="" width='50px' />
          </div>
          <hr/>
          </>
        })}
      </div>
    </div>
  )
}

export default Productlist 