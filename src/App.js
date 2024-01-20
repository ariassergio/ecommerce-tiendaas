import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './modules/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product/Product';
import Products from './modules/Products/Products';
import Cart from './modules/Cart/Cart';
function App() {
  return (
   <div> 
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
   </div>
  );
}

export default App;
