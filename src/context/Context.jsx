import React,{createContext, useState} from "react";

import allproduct from "../component/assest/All_project"
export const Context =createContext(null);
const getDefaultValue=()=>{
    let cart={};
   
    for (let index = 0; index < allproduct.length+1; index++) {
        cart[index] = 0
        
    }
    return cart;
}

const ContextProvider =(props)=>{
    const [cartitems,setcartitems]=useState(getDefaultValue())
    
     
    const addtocart=(itemId)=>{
        setcartitems((prev)=>({
            ...prev,[itemId]:prev[itemId]+1
        }))
       
    }
    const removefromcart=(itemId)=>{
        setcartitems((prev)=>({
...prev,[itemId]:prev[itemId]-1
        }))
    }
    // console.log(cartitems)
   
    const gettotalcartamount=()=>{
        let totalamount=0;
     
   
        for(const item in cartitems)
        {
            if(cartitems[item]>0){
                let iteminfo=allproduct.find((product)=>
                    product.id===Number(item))
               
                totalamount += iteminfo.new_price*cartitems[item];
                
            }
        }
        return totalamount;
    }
    let gettotalcartitem=(()=>{
        let totalitem=0;
        for(const item in cartitems)
        {
            if(cartitems[item]>0){
                totalitem += cartitems[item];
            }
        }
return totalitem
    })
    // console.log(cartitems[item])
    const contextvalue= {allproduct,cartitems,addtocart,removefromcart,gettotalcartamount,gettotalcartitem}; 
 
    return (
        <Context.Provider value={contextvalue}>
            {props.children} 
            </Context.Provider>
    )
}
export default ContextProvider;