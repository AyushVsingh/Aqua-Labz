// src/pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import ServiceOverview from '../components/ServiceOverview';
import PortfolioShowcase from '../components/PortfolioShowcase';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <ServiceOverview />
            <PortfolioShowcase />
            <Testimonials />
        </>
    );
};

export default Home;
