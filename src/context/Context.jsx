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
        console.log(cartitems)
    }
    const removefromcart=(itemId)=>{
        setcartitems((prev)=>({
...prev,[itemId]:prev[itemId]-1
        }))
    }
    const contextvalue= {allproduct,cartitems,addtocart,removefromcart}; 
    return (
        <Context.Provider value={contextvalue}>
            {props.children} 
            </Context.Provider>
    )
}
export default ContextProvider;