import React from 'react';
import { Link } from 'react-router-dom';

const navigations =[
    {
        name: 'Inicio',
        path: '/',
    },
    {
        name: 'Productos',
        path:'/products',
    }
]

const Header = () => {
    return (
        <header className="text-gray-600 body-font shadow">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    
                    <span className="ml-3 text-xl">Tienda AS</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    {
                        navigations.map((navigation)=>{
                            return(
                                <Link to ={navigation.path} className="mr-5 hover:text-ray-900">{navigation.name}</Link>
                            )
                        })
                    }
                   
                </nav>
                <Link to={'/cart'} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Ir al carrito
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </header>
    );
};

export default Header;