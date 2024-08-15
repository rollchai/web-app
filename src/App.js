
import './App.css';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop';
import Shopcatagory from './pages/Shopcatagory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Loginsignup from './pages/Loginsignup';

function App() {
 
  return (
    
    <div >
<BrowserRouter>
   <Navbar/>
   
   <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/men' element={<Shopcatagory catagory="men"/>}/>
    <Route path='/women' element={<Shopcatagory catagory="women"/>}/>
    <Route path='/kids' element={<Shopcatagory catagory="kids"/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path=':productId' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Loginsignup/>}/>

   
   </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
