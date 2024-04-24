import React from 'react';
import Head from 'next/head';

export default function Page() {
  return (
    <div className="z-10">
      <Head>
        <title>About Us | Isaacs Cloud</title>
        <meta name="description" content="Learn more about Isaacs Cloud, our team, and our mission." />
        <meta name="keywords" content="website design Quad Cities, cloud solutions Iowa, DevOps services" />
        <meta property="og:image" content="/profile.jpeg" />
      </Head>
      <h1 className="mt-12 lg:text-6xl md:text-5xl font-bold text-center text-black dark:text-white mb-8">Our Team</h1>
      <section className="rounded-lg bg-slate-100 bg-opacity-80 overflow-hidden py-12 md:py-24 px-4 mb-12 md:mb-20">
        <div className="container mx-auto px-4">
          <p className="text-gray-700 lg:text-2xl md:text-xl leading-relaxed mb-8">
            Isaacs Cloud LLC is fueled by passionate individuals dedicated to providing exceptional Hosting as a Service (HaaS) solutions for small and mid-sized businesses. Our team boasts extensive experience across FinTech, Education, Consulting, and Insurance, bringing a wealth of knowledge and diverse perspectives to the table.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" rounded-lg shadow-md overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Isaac Campbell"
                className="w-full h-96 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="lg:text-3xl font-semi-bold text-gray-800 mb-2">Isaac Campbell</h3>
                <p className="text-gray-600 font-bold text-2xl mb-2">Founder</p>
                <div className="text-xl">
                  <p className="text-gray-600 mb-4">
                    Isaac comes with over 6 years of experience in cloud, infrastructure as code, and containerization solutions. He's been supporting websites his entire career, and now Isaac wants to bring those enterprise solutions to you. He is skilled in a wide range of technologies including AWS, Azure, Kubernetes, Docker, Terraform, and various programming languages.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Isaac has a proven track record of leading and inspiring teams, architecting cloud migrations, implementing DevOps pipelines, and troubleshooting complex production issues.  In his previous roles, he has successfully delivered projects for companies in FinTech, Education, Insurance, and Consulting.
                  </p>
                  <p className="text-gray-600 mb-4">
                    He currently holds an AWS Solutions Architect Associate certification, and has held a Microsoft Azure: DevOps Engineer Expert Certificaiton.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="lg:text-6xl md:text-5xl font-bold text-center mb-8">Why Partner with Us?</h1>
      <section className="rounded-lg bg-slate-100 bg-opacity-80 overflow-hidden py-12 md:py-24 px-4 mb-12 md:mb-20">
        <div className="container mx-auto py-12 px-4">
          <p className="text-gray-700 lg:text-2xl md:text-xl leading-relaxed mb-8">
            You deserve a partner who understands your business and cares about your success. At Isaacs Cloud, we're not just about technology – we're about building genuine relationships and helping you achieve your goals.
          </p>
          <ul className="list-disc space-y-4 lg:text-2xl mg:text-xl">
            <li className="text-gray-800">
              <span className="text-black font-bold">Your Trusted Tech Advisor:</span> We take the time to understand your unique needs and challenges. We'll work collaboratively with you to develop a customized website that scales with your business.
            </li>
            <li className="text-gray-800">
              <span className="text-black font-bold">Your Peace of Mind, Guaranteed:</span> We prioritize the security and reliability of your data. Our team of experts is available 24/7 to ensure your website is always up and running smoothly.
            </li>
            <li className="text-gray-800">
              <span className="text-black font-bold">Focus on What Matters Most:</span> We handle the technical complexities of all aspects about your website, from the design to the nuances, so you can focus on what you do best – running your business. Let us empower your team to be more productive and efficient.
            </li>
          </ul>
        </div>
        <a href="/contact" className="block w-1/2 mx-auto max-w-xs md:max-w-none text-center bg-gray-800 text-yellow-200 hover:bg-yellow-100 hover:text-gray-800  text-lg md:text-xl py-3 px-6 rounded-full font-bold">Schedule a Free Consultation to Get Started</a>
      </section>
    </div>
  );
}