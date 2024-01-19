import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import Products from '../Products/Products';
const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async () =>{
            const response = await fetch ('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])
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
            <Products/>
            <FeatureCard/>
        </div>
    );
};

export default Home;