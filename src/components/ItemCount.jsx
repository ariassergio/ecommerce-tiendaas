import React from 'react';
import Swal from 'sweetalert2';

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {
    const agregarAlCarrito = () => {
        handleAgregar();
        Swal.fire({
            icon: 'success',
            title: '¡Producto agregado al carrito!',
            showConfirmButton: false,
            timer: 1500 // El mensaje se ocultará después de 1.5 segundos
        });
    };

    
    return (
        <div>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p> {cantidad} </p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className='agregar-al-carrito' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;