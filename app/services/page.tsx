'use client'
import React from 'react';

const services = ['Website Design', 'Web Analytics'];

const pricingData = [
  {
    name: "Starter",
    startingPrice: 500,
    features: [
      "Customizable Template Design",
      "Up to 3 Pages",
      "Mobile Responsive",
      "Basic Contact Form",
      "1 Hour Consultation",
    ],
  },
  {
    name: "Growth",
    startingPrice: 1000,
    features: [
      "Starter Package Features Included PLUS",
      "Custom Design Concept",
      "Up to 5 Pages",
      "SEO Optimization",
      "Social Media Integration",
      "Google Analytics Setup",

    ],
  },
  {
    name: "Premium",
    startingPrice: 2000,
    features: [
      "Bespoke Website Design & Development",
      "Custom CMS Integration",
      "E-commerce Functionality",
      "Advanced SEO Strategy",
      "Monthly Maintenance & Support",
      "1 Hour Consultation",
      "Growth Package Features Included",
    ],
  },
];

const analyticsPricingData = [
  {
    name: "Basic Setup",
    startingPrice: 50,
    features: [
      "Track Website Traffic",
      "Analyze User Behavior",
      "Generate Basic Reports",
    ],
  },
  {
    name: "Standard Package",
    startingPrice: 100,
    features: [
      "Track Website Traffic",
      "Analyze User Behavior",
      "Generate Basic Reports",
      "Goal Tracking & Conversion Analysis",
      "Custom Report Generation",
    ],
  },
  {
    name: "Advanced & Consulting",
    startingPrice: 250,
    features: [
      "Track Website Traffic",
      "Analyze User Behavior",
      "Generate Basic Reports",
      "Goal Tracking & Conversion Analysis",
      "Custom Report Generation",
      "Advanced Data Segmentation",
      "Marketing Campaign Performance Tracking",
      "Ongoing Analytics Consultation",
    ],
  },
];

function PricingCard({ name, startingPrice, features }) {
  return (

    <div className="bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg shadow-lg p-8 mb-8 w-full md:w-80">
      <h2 className="text-3xl text-center font-bold text-white mb-4">{name}</h2>
      <p className="text-xl text-center text-white">Starting from</p>
      <div className="text-5xl text-center font-bold text-white mb-4">${startingPrice}</div>
      <ul className="text-white text-lg mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    
  );
}
  
  export default function ServicesPage() {
    const [selectedService, setSelectedService] = React.useState('Website Design');
  
   
  const toggleService = (serviceName) => {
    setSelectedService(serviceName);
  };

  const serviceContent = {
    'Website Design': (
      <section className="container mx-auto py-20 px-4">
        <p className="text-gray-800 text-xl leading-relaxed mb-8">
            Struggling to establish a strong online presence? Let's transform your vision into a reality! I specialize in crafting beautiful, user-friendly websites that convert visitors into leads and customers. Whether you need a simple landing page or a complex e-commerce store, I have the skills and experience to bring your project to life. See the different plans below to find the perfect fit for your needs.
        </p>            
        <div className="flex justify-center flex-wrap">
          {pricingData.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>
    ),
    'Web Analytics': (
      <section className="container mx-auto py-20 px-4">
        <p className="text-gray-800 text-xl leading-relaxed mb-8">
          Unlock the power of data-driven insights! Our analytics service helps you understand your website traffic, user behavior, and marketing campaign performance. Choose from a range of plans to fit your needs: Basic Setup tracks website traffic and user behavior, generating basic reports. Standard Package builds on that foundation with goal tracking, conversion analysis, and custom reports. Advanced & Consulting dives deeper with advanced segmentation, marketing campaign tracking, and ongoing consultations – empowering you to optimize your website and marketing efforts for maximum impact.
        </p>
        <div className="flex justify-center flex-wrap">
          {analyticsPricingData.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>
    ),
  };

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-center text-black dark:text-white mb-8">Let's make the Perfect Solution for Your Business</h1>
      <section className="rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden py-12 md:py-24 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center mb-8 bg-black rounded-full pt-1 pb-1">
          {services.map((service) => (
            <button
              key={service}
              className={`flex-1 md:w-1/3 py-2 md:py-3 px-4 md:px-2 text-lg md:text-2xl rounded-full mb-4 md:mb-0 mx-2 md:mx-2 text-white ${selectedService === service ? 'bg-teal-500 hover:bg-teal-600' : 'bg-teal-300 hover:bg-teal-400'}`}
              onClick={() => toggleService(service)}
            >
              {service}
            </button>
          ))}
        </div>
        {selectedService && serviceContent[selectedService]}
        <a href="/contact" className="block mx-auto max-w-xs md:max-w-none text-center bg-teal-500 hover:bg-teal-600 text-white text-lg md:text-xl py-3 px-6 rounded-full font-bold">Schedule a Free Consultation to Get Started</a>
      </section>
    </div>
  );
}