// src/components/Hero.js
import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-100 h-screen flex items-center">
            <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                    Transforming Your Business with Innovative IT Solutions
                </h1>
                <p className="mt-4 text-gray-600 md:text-lg">
                    We provide cutting-edge technology solutions to streamline your business processes and enhance growth.
                </p>
                <a href="#services" className="mt-8 inline-block bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition">
                    Explore Services
                </a>
            </div>
        </section>
    );
};

export default Hero;
