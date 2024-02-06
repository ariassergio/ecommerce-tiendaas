import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        Swal.fire({
          title: '¿Estás seguro?',
          text: 'Esto vaciará tu carrito de compras',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, vaciar carrito',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            vaciarCarrito();
            Swal.fire('¡Carrito vaciado!', 'Tu carrito de compras ha sido vaciado.', 'success');
          }
        });
      };
    

  return (
    <div className="container-cart">
      <h1 className="main-title">Carrito</h1>

      {carrito.length > 0 ? (
        <div className="carrito-items">
          {carrito.map((prod) => (
            <div key={prod.id} className="carrito-item">
              <img src={prod.image} alt={prod.name} className="carrito-item-image" />
              <div className="carrito-item-details">
                <h3>{prod.name}</h3>
                <p>Precio unitario: ${prod.price}</p>
                <p>Cantidad: {prod.cantidad}</p>
                <p>Precio total: ${prod.price * prod.cantidad}</p>
              </div>
            </div>
          ))}
          <div className="carrito-total">
            <h2>Total: ${precioTotal()}</h2>
            <button onClick={handleVaciar} className="btn-vaciar">Vaciar Carrito</button>
            <Link to="/checkout" className="btn-finalizar">Finalizar compra</Link>
          </div>
        </div>
      ) : (
        <h2>El carrito está vacío 😒</h2>
      )}
    </div>
  )
}

export default Carrito