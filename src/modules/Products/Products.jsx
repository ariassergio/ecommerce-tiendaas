import React, {useEffect, useState}from 'react';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import data from '../../components/data/data';

const Products = () => {
    // Obtén las categorías únicas de tu array de datos
    const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
    const [categories, setCategories] = useState(uniqueCategories);
    const [selectedCategory, setSelectedCategory] = useState('Todas'); // Inicialmente selecciona todas las categorías
    // Este useEffect podría no ser necesario, dependiendo de tu aplicación
    useEffect(() => {
        // Puedes realizar operaciones adicionales aquí si es necesario
    }, [categories]);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    if (categories.length === 0) return <div>Loading...</div>;
    // Filtra los productos según la categoría seleccionada
    const filteredProducts = selectedCategory === 'Todas'
        ? data
        : data.filter(product => product.category === selectedCategory);

    return (
        <div>
            <FeatureCard card={categories} onCategoryChange={handleCategoryChange} />
            <ProductsCard products={filteredProducts} />
        </div>
    );
};

export default Products;