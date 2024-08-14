// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    What Our Clients Say
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">
                            "IT Solutions transformed our business. Their innovative solutions helped us streamline our processes and grow."
                        </p>
                        <h3 className="text-xl font-semibold text-gray-800">Client Name</h3>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">
                            "Their team is highly professional and knowledgeable. We highly recommend their services."
                        </p>
                        <h3 className="text-xl font-semibold text-gray-800">Client Name</h3>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">
                            "Excellent service and support. We are extremely satisfied with the results."
                        </p>
                        <h3 className="text-xl font-semibold text-gray-800">Client Name</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
