import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../components/data/data';
import Swal from 'sweetalert2'; 

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate(); // Usa 'useNavigate' y asigna a 'navigate'
    console.log(id, 'id', product);

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = data.find(item => item.id === parseInt(id));
            setProduct(productData || {});
        };
        fetchProduct();
    }, [id]);

    const handleCart = (product, redirect) => {
        console.log(product);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExist = cart.find(item => item.id === product.id);

        if (isProductExist) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1 // Corregir aquí
                    };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantify: 1 }]));
        }


        if (redirect) {
            navigate('/cart');  // Utiliza la función navigate para redirigir al carrito
        } else { // Agrega esta condición para mostrar la alerta solo al agregar al carrito
            Swal.fire({
                icon: 'success',
                title: 'Producto añadido al carrito',
                showConfirmButton: false,
                timer: 1500
            });
          }
    };

    if (!Object.keys(product).length > 0) {
        return <div>Product Not Found</div>;
    }

return (
    <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt={product?.title} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product?.image} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{product?.categorie}</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.name}</h1>

                    <p className="leading-relaxed">{product?.details}</p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        {product?.category === 'Indumentaria' && (
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex">
                        <span className="title-font font-medium text-2xl text-gray-900">${product?.price}</span>
                        <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" onClick={() => handleCart(product, true)}>Comprar ahora</button>
                        <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded" onClick={() => handleCart(product)}>Añadir al carrito</button>
                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};
export default Product;