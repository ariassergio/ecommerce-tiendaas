import React from 'react';

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">La tienda del campeon del mundo 🌟🌟🌟
                        <br className="hidden lg:inline-block"/>
                    </h1>
                    <p className="mb-8 leading-relaxed"> Vivi, senti y vesti como la seleccion 💙🤍</p>
                    
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="/imagenes/imagenprincipal.jpg"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;