import React, { useContext } from 'react'
import "./Productdisplay.css"
import staricon from "../anotherphotofolder/starticon.svg"
import stardullicon from "../anotherphotofolder/stardull.svg"
import { Context } from '../../context/Context'
const Productdisplay = (props) => {
    const {product}=props
    const {addtocart}=useContext(Context);
  return (
    <div className='Productdisplay'>
     <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt=""width="250px" height="370px" />
            <img src={product.image} alt=""width="250px" height="370px" />
            <img src={product.image} alt="" width="250px" height="370px" />
            <img src={product.image} alt=""width="250px" height="370px" />
        </div>
        <div className="productdisplay-image">
            <img className="productdisplay-main-img" src={product.image} alt="" width="370px" height="440px"  />
        </div>
        </div>  
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={staricon} alt=""width="20px" height="20px" />
                <img src={staricon} alt=""width="20px" height="20px" />
                <img src={staricon} alt=""width="20px" height="20px" />
                <img src={staricon} alt=""width="20px" height="20px" />
                <img src={stardullicon} alt=""width="20px" height="20px" />
                <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quasi et ratione non earum ex cumque asperiores alias iure autem. Necessitatibus totam reiciendis numquam illo ipsam corrupti nobis quidem suscipit.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                      
                    </div>
                </div>
                <button onClick={()=>{
                    addtocart(product.id)
                }}>Add To Cart</button>
                <p className='productdisplay-right-catagory'><span>catagory :</span>woman, T-shirt, crop Top</p>
                <p className='productdisplay-right-catagory'><span>Tags :</span>Modern, Latest, crop Top</p>
                </div> 
    </div>
  )
}

export default Productdisplay