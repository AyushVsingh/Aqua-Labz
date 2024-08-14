// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <img src={logo} alt="Aqua Labz Logo" className="h-8 mr-3 rounded" />
                <Link to="/" className="text-white text-lg font-bold">Aqua Labz</Link>
                <div>
                    <Link to="/" className="text-white mx-2">Home</Link>
                    <Link to="/about" className="text-white mx-2">About Us</Link>
                    <Link to="/services" className="text-white mx-2">Services</Link>
                    <Link to="/portfolio" className="text-white mx-2">Portfolio</Link>
                    <Link to="/contact" className="text-white mx-2">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
