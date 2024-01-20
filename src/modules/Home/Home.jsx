import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import Products from '../Products/Products';
import data from '../../components/data/data';
const Home = () => {
    const [products, setProducts] = useState([]);

    // En lugar de hacer la llamada a la API, simplemente asignamos el array de datos
    useEffect(() => {
        setProducts(data);
    }, []);
    return (
        <div>
            <Hero/>
            <h2 className='text-4xl font-bold text-center mt-20'>Productos Disponibles</h2>
            {
                products.length > 0 ?
                <ProductsCard products={products}/>
                :
                <div> Loading...</div>
            }
            
        </div>
    );
};

export default Home;