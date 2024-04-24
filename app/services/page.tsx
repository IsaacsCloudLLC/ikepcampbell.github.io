'use client'
import React from 'react';
import Head from 'next/head';

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
      "Everything in Starter PLUS",
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
      "Everything in Growth PLUS",
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
    <div className="bg-gray-600 rounded-lg shadow-lg p-8 w-full mb-12 mr-24 md:w-80">
      <h2 className="text-3xl text-center font-bold text-white mb-4">{name}</h2>
      <p className="text-xl text-center text-white">Starting from</p>
      <div className="text-5xl text-center font-bold text-white mb-4">${startingPrice}</div>
      <ul className="text-white text-lg mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <p className="text-gray-800 text-3xl leading-relaxed mb-8">
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
        <p className="text-gray-800 text-3xl leading-relaxed mb-8">
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
    <div className='z-10'>
      <Head>
        <title>Quad Cities Website Design & Web Analytics | Isaacs Cloud</title>
        <meta name="description" content="Grow your business with beautiful, user-friendly websites and data-driven web analytics. I offer website design, web development, and analytics solutions in the Quad Cities (Davenport, Bettendorf, etc.) - Free Consultation!" />
        <meta name="keywords" content="Quad Cities website design, Quad Cities web developer, web design Davenport, web design Bettendorf, web design Iowa, web analytics Quad Cities, analytics Davenport, analytics Bettendorf, Isaac Campbell web design" />
      </Head>
      <h1 className="mt-12 lg:text-6xl md:text-5xl font-bold text-center text-black dark:text-white mb-8">Let's make the Perfect Solution for Your Business</h1>
      <section className="rounded-lg bg-gray-200 bg-opacity-30 overflow-hidden py-12 md:py-24 px-4">
        <div className="flex md:flex-row items-center md:items-stretch justify-center mb-8 bg-white rounded-full pt-1 pb-1">
          {services.map((service) => (
            <button
              key={service}
              className={`flex-1 py-2 py-3 px-4 md:px-2 text-lg md:text-2xl sm:text-2xl rounded-full md:mb-0 mx-2 
          ${selectedService === service ? 'bg-gray-800 text-yellow-200 hover:bg-yellow-100 hover:text-gray-800' : 'bg-gray-300 hover:bg-yellow-100 text-black'}`}
              onClick={() => toggleService(service)}
            >
              {service}
            </button>
          ))}
        </div>
        {selectedService && serviceContent[selectedService]}
        <a href="/contact" className="block w-1/2 mx-auto max-w-xs md:max-w-none text-center bg-gray-800 text-yellow-200 hover:bg-yellow-100 hover:text-gray-800 text-white text-lg md:text-xl py-3 px-6 rounded-full font-bold">Schedule a Free Consultation to Get Started</a>

      </section>
    </div>
  );
}