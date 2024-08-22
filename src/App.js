
import './App.css';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop';
import Shopcatagory from './pages/Shopcatagory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Loginsignup from './pages/Loginsignup';
import Footer from './component/footer/Footer';
import manbanner from "./component/anotherphotofolder/Screenshot (110) copy 2.png"
import womanbanner from "./component/anotherphotofolder/Screenshot (109) copy 2.png"
import kids from "./component/anotherphotofolder/Screenshot (111) copy.png"

function App() {

  return (
    
    <div >
<BrowserRouter>
   <Navbar/>
   
   <Routes>
    
    <Route path='/' element={<Shop/>}/>
    <Route path='/men' element={<Shopcatagory banner={manbanner} catagory="men" />}/>
    <Route path='/women' element={<Shopcatagory  banner= {womanbanner}catagory="women"/>}/>
    <Route path='/kids' element={<Shopcatagory banner={kids} catagory="kids"/>}/>
    <Route path='/product/:productId' element={<Product />} />

    {/* <Route path='/product' element={<Product/>}/>
    <Route path=':productId' element={<Product/>}/> */}
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Loginsignup/>}/>
   =
   </Routes>
   <Footer/> 
</BrowserRouter>

    </div>
  );
}

export default App;
