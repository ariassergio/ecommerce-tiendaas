import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Carrito from "./Components/Carrito";
import Checkout from './Components/Checkout';
import { useState } from 'react';




function App() {

  const [carrito, setCarrito] = useState([]);

  return (
    <div>
      <CartProvider value ={{carrito, setCarrito}}>
        <BrowserRouter>
          <Navbar />
          

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:category" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
