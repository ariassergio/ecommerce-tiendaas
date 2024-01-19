import React, {useEffect, useState}from 'react';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import FeatureCard from '../../components/FeatureCard/FeatureCard';


const Products = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        const fetchCategories = async () =>{
            const response = await fetch ('https://fakestoreapi.com/products/categories')
            const data = await response.json()
            console.log(data)
            setCategories(data)
        }
        fetchCategories()
    }, [])
    if (categories.length === 0) return <div>Loading...</div>
    return (
        <div>
            <FeatureCard card={categories}/>
            <ProductsCard/>
        </div>
    );
};

export default Products;