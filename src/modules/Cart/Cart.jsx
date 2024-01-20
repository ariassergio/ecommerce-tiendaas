import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'; 
import Modal from 'react-modal';


const Cart = () => {
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        confirmEmail: '',
    });
    const handleBuy = () => {
        // Validar que todos los campos requeridos estén completos
        const { firstName, lastName, phone, email, confirmEmail } = formData;
        if (!firstName || !lastName || !phone || !email || !confirmEmail) {
          // Mostrar alerta de SweetAlert2 indicando que faltan campos
          Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Por favor, complete todos los campos antes de realizar la compra.',
          });
          return; // No permitir la compra si falta algún campo
        }
    
        // Realizar acciones necesarias antes de mostrar la alerta
    
        // Mostrar SweetAlert2
        Swal.fire({
          icon: 'success',
          title: '¡Muchas gracias por su compra!',
          text: 'Su pedido ha sido procesado con éxito.',
        });
    
        // Cierra el modal después de mostrar la alerta
        setIsModalOpen(false);
      };
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const carts = JSON.parse(localStorage.getItem('cart')) || []

    useEffect(() => {
        const total = carts.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0)
        setTotal(total)
    }, [carts])

    const handleInc = (id) => {
        const updatedCart = carts.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    const handleDec = (id) => {
        const updatedCart = carts.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    const removeProduct = (id) => {
        const updatedCart = carts.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica para procesar la compra
        // Puedes acceder a los datos del formulario a través de formData
        console.log(formData);
        // Cerrar el modal después de procesar la compra
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    if (carts.length === 0) {
        return <div className=' h-[55vh] flex justify-center items-center text-4xl '>El carrito esta vacio 😓</div>
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
                <div className="w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Carrito de compras</h1>
                        <h2 className="font-semibold text-2xl">{carts?.length} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalles del producto</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Cantidad</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Precio</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                    </div>
                    {
                        carts?.map(cart => {
                            return (
                                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24" src={cart?.image} alt={cart?.name} />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{cart?.name}</span>
                                            <span className="text-red-500 text-xs capitalize">{cart?.category}</span>
                                            <div className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={() => removeProduct(cart?.id)}>Eliminar</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() => handleDec(cart?.id)}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>

                                        <input className="mx-2 border text-center w-8" type="text" value={cart?.quantity} />

                                        <svg className="fill-current text-gray-600 w-3 cursor-pointer" onClick={() => handleInc(cart?.id)} viewBox="0 0 448 512">
                                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">${cart?.price}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">${cart?.price * cart?.quantity}</span>
                                </div>
                            )
                        })
                    }

                    <Link to={'/products'} className="flex font-semibold text-indigo-600 text-sm mt-10">

                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continuar comprando
                    </Link>
                </div>

                <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Resumen del pedido</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {carts?.length}</span>
                        <span className="font-semibold text-sm">{total?.toFixed(2)}$</span>
                    </div>

                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total costo</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={() => setIsModalOpen(true)}>Realizar compra</button>
                    </div>
                </div>

            </div>
            {/* Modal para completar los datos */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Completa tus datos"
                className="modal-dialog modal-dialog-centered"
                overlayClassName="modal-overlay" // Estilo de fondo del modal de Bootstrap
                style={{
                    overlay: {
                      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo borroso
                    },
                  }}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={() => setIsModalOpen(false)}>
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                    <h2>Completa tus datos</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firstName">Nombre:</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName">Apellido:</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone">Teléfono:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email">Correo electrónico:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmEmail">Confirmar correo electrónico:</label>
                            <input
                                type="email"
                                id="confirmEmail"
                                name="confirmEmail"
                                value={formData.confirmEmail}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full" onClick={handleBuy}>
                            Comprar
                        </button>
                    </form>
                    </div>
                    </div>
            </Modal>
        </div>
    )
}

export default Cart