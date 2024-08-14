// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6 text-center text-white">
            <p>© {new Date().getFullYear()} IT Solutions. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
