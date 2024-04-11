'use client'
import React from 'react';

const services = [
    {
        id: 1,
        name: "Web Design",
        description: "Unique websites designed to meet your unique business needs.",
        link: "/pricing-website.html"
    },
    {
        id: 2,
        name: "Cloud Hosting",
        description: "Reliable and scalable hosting solutions. Already have the perfect design? Let me host it for you without breaking the bank.",
        link: "/pricing-cloud-hosting.html"
    }
];

export default function ServicesPage() {
    return (
        <section className="p-8">
            <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Services We Offer</h1>
            <p className="text-2xl mb-4 tracking-tighter">Know someone who could use our help?</p>
            <p className="text-xl mb-8 tracking-tighter">Refer them to us and we'll give you 10% of the final sale!</p>


            <ul>
                {services.map(service => (
                    <li key={service.id} className="mb-6 service-item">
                        <h2 className="text-2xl font-bold">{service.name}</h2>
                        <p className="mb-2">{service.description}</p>
                        <a href={service.link}
                            className="text-blue-600 hover:text-blue-800 transition duration-300"> Learn More</a>
                        
                    </li>
                ))}
            </ul>
            <style jsx>{`
                .service-item {
                    transition: all 0.3s ease;
                }

                .service-item:hover {
                    transform: scale(1.05); /* Increase the scale factor for a larger expansion */
                }
            `}</style>
        </section>
    );
}