// src/components/ContactForm.js
import React from 'react';

const ContactForm = () => {
    return (
        <section className="bg-white py-20" id="contact">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Contact Us
                </h2>
                <p className="text-gray-600 md:text-lg mb-6">
                    Have questions or want to work with us? Get in touch with our team today!
                </p>
                <form className="max-w-xl mx-auto">
                    <div className="mb-4">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
