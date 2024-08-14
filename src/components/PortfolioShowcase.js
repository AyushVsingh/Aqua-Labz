// // src/components/Portfolio.js
// import React from 'react';

// const projects = [
//     {
//         image: 'path_to_image1.jpg',
//         title: 'Project One',
//         description: 'A brief description of Project One.',
//         link: '#',
//     },
//     {
//         image: 'path_to_image2.jpg',
//         title: 'Project Two',
//         description: 'A brief description of Project Two.',
//         link: '#',
//     },
//     // Add more projects as needed
// ];

// const Portfolio = () => {
//     return (
//         <section id="portfolio" className="py-20 bg-gray-100">
//             <div className="container mx-auto px-6 md:px-12">
//                 <h2 className="text-3xl font-bold text-center text-gray-800">Our Portfolio</h2>
//                 <div className="mt-12 flex flex-wrap -mx-4">
//                     {projects.map((project, index) => (
//                         <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//                             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                                 <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
//                                 <div className="p-6">
//                                     <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
//                                     <p className="mt-2 text-gray-600">{project.description}</p>
//                                     <a href={project.link} className="mt-4 inline-block text-blue-500 hover:underline">View Details</a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Portfolio;

// src/components/PortfolioShowcase.js
import React from 'react';

const PortfolioShowcase = () => {
    return (
        <section className="bg-white py-20" id="portfolio">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Our Portfolio
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <img src="portfolio1.jpg" alt="Portfolio 1" className="mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Title 1</h3>
                        <p className="text-gray-600">
                            A brief description of the project and the technologies used.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <img src="portfolio2.jpg" alt="Portfolio 2" className="mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Title 2</h3>
                        <p className="text-gray-600">
                            A brief description of the project and the technologies used.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                        <img src="portfolio3.jpg" alt="Portfolio 3" className="mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Title 3</h3>
                        <p className="text-gray-600">
                            A brief description of the project and the technologies used.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioShowcase;
