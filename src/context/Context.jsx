import React,{createContext} from "react";

import allproduct from "../component/assest/All_project"
export const Context =createContext(null);
const ContextProvider =(props)=>{
    const contextvalue= {allproduct};
    return (
        <Context.Provider value={contextvalue}>
            {props.children} 
            </Context.Provider>
    )
}
export default ContextProvider;