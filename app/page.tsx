import Link from 'next/link';


const RoadmapItem = ({ icon, title, description }) => {
  return (
    <li className="flex items-center space-x-4">
      <div>
        {icon}
      </div>
      <div className="text-xl font-medium">
        <h3 className="text-gray-800 text-2xl mb-3 mt-1">{title}</h3>
        <p className="text-gray-600 text-xl">{description}</p>
      </div>
    </li>
  );
};


export default function Page() {
  return (
    <div className="mb-24">
    <header className="relative left-0 w-full flex flex-col items-center justify-center py-4">
      <h1 className="text-4xl text-center font-bold">Ready to stand out online?</h1>
      <h2 className="text-6xl font-bold tracking-widest leading-tight mb-2 text-center">
        Let's Build a Website That <span className="bg-gradient-to-r from-teal-400 to-blue-500 inline-block text-transparent bg-clip-text">Sparks</span> Engagement 
      </h2>
      <p className="text-xl text-center">Your Brand. Your Vision. My Expertise. Let's build your future together.</p>
    </header>
    <section className="rounded-lg relative top-10 mb-20 bg-gradient-to-r from-teal-400 to-teal-700 overflow-hidden text-white">
    <div className="hero bg-gradient-to-r from-teal-400 to-teal-700 text-white py-24 px-4 flex flex-col items-center justify-center">
  <h2 className="text-4xl font-bold text-center mb-8">Boost Your Business with a Winning Website</h2>
  <p className="text-xl text-center mb-8">Tired of a website that doesn't convert? Let's build a beautiful and effective website that attracts leads and grows your business.</p>
  <div className="flex justify-center">
    <Link href="/services">
      <button className="px-8 py-4 text-xl bg-white text-teal-500 font-bold rounded-full hover:bg-teal-100 hover:text-teal-400 shadow-md transition-all duration-300">
        See if the services we offer are a right fit for you!
      </button>
    </Link>
  </div>
</div>
</section>
<h2 className="text-6xl font-bold  text-center">
How we'll make a site
</h2>
<h2 className="text-6xl font-bold  text-center">
  that turns <span className="bg-gradient-to-r from-teal-400 to-blue-500 inline-block text-transparent bg-clip-text">traffic</span> into <span className="bg-gradient-to-r from-teal-400 to-blue-500 inline-block text-transparent bg-clip-text">sales</span>
</h2>
<section className="flex flex-col md:flex-row md:justify-between items-center py-20 mt-20 px-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg">

      <div className="w-full md:w-1/2 order-2 md:order-1">
        <img
          src="roadmap.png"
          alt="Planning to make a captivating website showcasing a business"
          className="rounded-lg shadow-md mx-auto md:mx-0 mb-4"
        />
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2 px-4 space-y-8">

        <ul className="flex flex-col space-y-6 items-center">
          <RoadmapItem
            icon={<span className="w-2 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white"></span>}
            title="Consultation"
            description="Let's chat about your vision, goals, and target audience. We'll work together to understand your unique needs and craft a website strategy that sets you up for success."
          />
          <RoadmapItem
            icon={<span className="w-2 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white"></span>}
            title="Conversion-Focused Design"
            description="We're not going to make a website that not only looks beautiful, but also strategically crafted to convert visitors into paying customers. We'll focus on user experience and clear calls to action to maximize your website's potential."
          />
          <RoadmapItem
            icon={<span className="w-2 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white"></span>}
            title="Seamless Launch"
            description="Once your website, powered by WordPress or a custom solution, is polished to perfection, we'll launch it to your customers."
          />
          <RoadmapItem
            icon={<span className="w-2 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white"></span>}
            title="Secure & Reliable Hosting"
            description="Offering secure and reliable website hosting so there are no worries about downtime or technical headaches. Your website will be up and running 24/7, showcasing your business to the world."
          />
          <RoadmapItem
            icon={<span className="w-2 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white"></span>}
            title="Continuous Growth Strategy"
            description="Your website is a living entity, not a static brochure. We will work with together to develop a data-driven growth strategy that continuously improves your website's performance and keeps you ahead of the curve."
          />
        </ul>
      </div>
    </section>
    </div >
  );
}