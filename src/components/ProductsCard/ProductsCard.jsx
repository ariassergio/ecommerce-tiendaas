import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ products = [] }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {products.map((product) => {
                        const { id, name, price, category, image } = product;
                        return (
                            <div key={id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link to={`/products/${id}`} key={id} className="block w-full h-full border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg mb-4">
                                <div className="relative h-64 overflow-hidden rounded-lg">
                                    <img
                                        alt={name}
                                        className="object-contain w-full h-full"
                                        src={image}
                                    />
                                </div>
                                <div className="mt-4 ml-2">
                                    <h3 className="text-gray-500 text-xs tracking-widest uppercase mb-1">
                                        {category}
                                    </h3>
                                    <h2 className="text-gray-900 text-lg font-medium">{name}</h2>
                                    <p className="mt-1">${price}</p>
                                </div>
                            </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductsCard;

