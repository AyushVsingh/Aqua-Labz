// src/components/ServiceOverview.js
import React from 'react';

const ServiceOverview = () => {
    return (
        <section className="bg-gray-100 py-20" id="services">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Our Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Development</h3>
                        <p className="text-gray-600">
                            Creating responsive and dynamic websites tailored to your business needs.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
                        <p className="text-gray-600">
                            Building user-friendly mobile applications for both Android and iOS platforms.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">IT Consulting</h3>
                        <p className="text-gray-600">
                            Offering expert advice to optimize your IT infrastructure and strategy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
