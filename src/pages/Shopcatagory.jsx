import React, { useContext } from 'react'
import "./css/Shopcatagory.css"
import { Context } from '../context/Context'
const Shopcatagory = (props) => {
  const {All_project} =useContext(Context)
  return (
    <div className='shopcategory'>
      <img src={props.banner} alt="" width="100%"/>
    </div>
  )
}

export default Shopcatagory