import Link from 'next/link';

const RoadmapItem = ({ title, description }) => {
  return (
    <li className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 z-10">
      <div className="md:w-1/5">
        <span className="w-2 h-12 md:h-16 lg:relative lg:left-24 bg-yellow-200 rounded-full flex items-center justify-center text-white"></span>
      </div>
      <div className="lg:w-full md:w-4/5 text-center md:text-left">
        <h3 className="text-gray-900 lg:text-3xl font-semibold md:text-2xl mb-2 md:mt-0">{title}</h3>
        <p className="text-gray-800 lg:text-2xl md:text-xl mt-2">{description}</p>
      </div>
    </li>
  );
};

export default function Page() {
  return (
    <div className="mb-24 relative z-10">
      <div className="relative h-full w-full">
        <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover z-10'>
          <source src="/home.mp4" type="video/mp4" />
        </video>
        <header className="relative left-0 w-full flex flex-col items-center justify-center py-4 text-white z-10">
          <div className="z-10 relative mt-24">
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-center font-bold">Welcome To Isaacs Cloud</h1>
            <h2 className="lg:text-7xl md:text-6xl font-bold tracking-widest leading-tight mb-2 text-center ">
              Let's Build a Website That{' '}
              <span className="bg-gradient-to-r from-yellow-100 to-white inline-block text-transparent bg-clip-text">
                Sparks
              </span>{' '}
              Engagement
            </h2>
            <p className="lg:text-2xl md:text-xl text-center">
              Your Brand. Your Vision. My Expertise. Let's build your future together.
            </p>
          </div>
        </header>

        <section className="rounded-lg relative overflow-hidden text-white z-10">
          <div className="bg-slate-300 bg-opacity-40 text-white py-16 md:py-24 px-4 flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">
              Boost Your Business with a Winning Website
            </h2>
            <p className="lg:text-2xl md:text-xl text-center mb-4 md:mb-8">
              Tired of a website that doesn't convert? Let's build a beautiful and effective website that attracts leads
              and grows your business.
            </p>
            <div className="flex justify-center">
              <Link href="/services">
                <button className="px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl bg-gray-800 text-yellow-100 font-bold rounded-full hover:bg-yellow-100 hover:text-gray-800 shadow-md transition-all duration-300">
                  See if the services we offer are a right fit for you!
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className='relative p-1 bg-gray-800 z-10 mb-10'></div>

      <section className="z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 z-10">How we'll make a site</h2>
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">
          that turns{' '}
          <span className="bg-gradient-to-r from-yellow-200 to-white  inline-block text-transparent bg-clip-text">traffic</span>{' '}
          into{' '}
          <span className="bg-gradient-to-r from-yellow-200 to-white inline-block text-transparent bg-clip-text">sales</span>
        </h2>
      </section>

      <div className='relative p-1 bg-gray-800 z-10'></div>
      <section className="flex flex-col md:flex-row md:justify-between items-center py-12 md:py-20 px-4 bg-slate-100 bg-opacity-80 z-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:order-2 z-10">
          <img
            src="roadmap.png"
            alt="Planning to make a captivating website showcasing a business"
            className="rounded-lg shadow-md mx-auto md:mx-0"
          />
        </div>
        <div className="w-full md:w-1/2 md:order-1 px-4 space-y-8 z-10">
          <ul className="flex flex-col space-y-6 items-center md:items-start">
            <RoadmapItem
              title="Consultation"
              description="Let's chat about your vision, goals, and target audience. We'll work together to understand your unique needs and craft a website strategy that sets you up for success."
            />
            <RoadmapItem
              title="Conversion-Focused Design"
              description="We're not going to make a website that not only looks beautiful, but also strategically crafted to convert visitors into paying customers. We'll focus on user experience and clear calls to action to maximize your website's potential."
            />
            <RoadmapItem
              title="Seamless Launch"
              description="Once your website, powered by WordPress or a custom solution, is polished to perfection, we'll launch it to your customers."
            />
            <RoadmapItem
              title="Secure & Reliable Hosting"
              description="Offering secure and reliable website hosting so there are no worries about downtime or technical headaches. Your website will be up and running 24/7, showcasing your business to the world."
            />
            <RoadmapItem
              title="Continuous Growth Strategy"
              description="Your website is a living entity, not a static brochure. We will work with together to develop a data-driven growth strategy that continuously improves your website's performance and keeps you ahead of the curve."
            />
          </ul>
        </div>
      </section>
    </div>
  );
}
