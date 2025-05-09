import React from 'react'

import Navbar from './components/Navbar/Navbar'

import { Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from "./pages/LoginSignup"
import NotFound from './pages/NotFound';
import men_banner from "/Assets/men_banner.avif";
 import women_banner from "/Assets/women_banner.avif"
import kids_banner from "/Assets/kids_banner.avif";
import Footer from './components/Footer/Footer';
import Checkout from './components/Proceed/Checkout';




const App = () => {
  
 return (
    <div>
      
           <Navbar />
           
          
           <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
          <Footer/>
        
      
    </div>
   )
}

export default App