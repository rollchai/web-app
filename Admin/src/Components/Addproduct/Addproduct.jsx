import React, { useState } from 'react'
import "./Addproduct.css"
import cloud from "../../assets/cloud.svg"
import { json } from 'react-router-dom'

//function for displaying the image in file section

const Addproduct = () => {
const [image,setimage]=useState(false)
const [productdetails,setproductdetails]=useState({
    name:"",
    image:"",
    category:"woman",
    new_price:"",
    old_price:""
})
const imagehandler=(e)=>{
setimage(e.target.files[0]);

}

const changehandler=(e)=>{
    setproductdetails({...productdetails,[e.target.name]:e.target.value})
}
//function for the add button

const add_product=async ()=>{
    console.log(productdetails);
    let responsedata;
    let product = productdetails;

    let formdata=new FormData();
    formdata.append("product",image);  //product is key and image is value

    await fetch("http://localhost:4000/Upload",{
        method:'POST',
        headers:{
            Accept:"application/json"
        },
        body:formdata,
    }).then((resp)=>
        resp.json()
).then((data)=>{
    responsedata=data
});
if(responsedata.success){
    product.image=responsedata.image_url;
    console.log(product)
    await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
       body:JSON.stringify(product)
    }).then((resp)=>
        resp.json()
).then((data)=>{
data.success?alert("Product Added"):alert("Failed")
})
}
}
  return (
    <div className='Addproduct'>
<div className="addproduct_itemfield">
    <p>Product Title</p>
    <input value={productdetails.name} onChange={changehandler} type='text' name='name' placeholder='Type Here'/>
</div>
<div className="addproduct-price">
    <div className="addproductitem-fields">
        <p>Price</p>
        <input value={productdetails.old_price} onChange={changehandler} type='text' name='old_price' placeholder='TYpe-here'/>
    </div>
    <div className="addproductitem-fields">
        <p> offer Price</p>
        <input value={productdetails.new_price} onChange={changehandler} type='text' name='new_price' placeholder='TYpe-here'/>
    </div>
</div>
<div className="addproduct-itmefield">
    <p>Product Category</p>
<select value={productdetails.category} onChange={changehandler} name="category" className='add-product-selector'>
    <option value="women">women</option>
    <option value="men">men</option>
    <option value="kid">kid</option>
</select>
</div>
<div className="addproduct-itemfield">
    <label htmlFor='file-input'>
        <img src={image?URL.createObjectURL(image):cloud} alt=""width="200px" />
    </label>
    <input onChange={imagehandler} type="file"name='image' id='file-input' hidden />
</div>
<button onClick={()=>{
    add_product()
}} className='addproduct'>Add </button>
    </div>
  )
}

export default Addproduct