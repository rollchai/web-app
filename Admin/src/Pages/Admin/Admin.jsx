import React from 'react'
import "./Admin.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../../Components/Addproduct/Addproduct'
import Productlist from '../../Components/Productlist/Productlist'
const Admin = () => {
  return (
    <div className='Admin'>
<Sidebar/>
<Routes>
    <Route path='/addproduct' element={<Addproduct/>}/>
    <Route path='/listproduct' element={<Productlist/>}/>

</Routes>
    </div>
  )
}

export default Admin