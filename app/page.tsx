import Link from 'next/link';

export default function Page() {
  return (
    <div className="mb-24">
      <header className="relative left-0 w-full flex flex-col items-center justify-center py-4">
        <h1 className="text-6xl font-bold tracking-widest leading-tight mb-2 text-center">
          I Create Websites That <span className="bg-gradient-to-r from-teal-400 to-blue-500 inline-block text-transparent bg-clip-text">Spark</span>⚡️
        </h1>
        <p className="text-2xl text-center">A <span className="text-teal-500">Personal</span> touch with an <span className="text-teal-500">Enterprise</span> approach.</p>
      </header>


      <section className="relative top-10 bg-gradient-to-r from-teal-400 to-blue-500 overflow-hidden text-white">
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center">
          <p className="text-5xl text-center mb-8">Feeling stuck with a <span className='font-semibold'>mediocre</span> website? </p>

          <ul className="list-none space-y-4 text-center">
            <li className="text-2xl mb-2">
              Has your freelancer vanished, and now your website's outdated?
            </li>
            <li className="text-2xl mb-2">
              Unsure what you are paying for with Squarespace and BlueHost?
            </li>
            <li className="text-2xl mb-2">
              Why are you aying a corporation that doesn't understand your mission?
            </li>
            <li className="text-2xl mb-2">
              Are you dreading to look at your WordPress Website? You deserve better.
            </li>
          </ul>

          <p className="text-5xl text-center mt-8 mb-4">You deserve <span className='font-semibold'>excellence</span>.</p>

          <p className="text-2xl text-center mb-4">
            Your business is your livelihood. In a digital world, a captivating website is crucial. Don't get left behind with outdated platforms and impersonal service.
          </p>
          <p className="text-2xl text-center mb-8">
            Isaacs Cloud is dedicated to creating your dream website, with a personal touch that propels your business forward.
          </p>



          <Link href="/services">
            <button className="px-8 py-4 text-2xl bg-white text-teal-500 font-bold rounded-full hover:bg-teal-100 hover:text-teal-400 shadow-md transition-all duration-300">
              See my services that will help you craft your digital masterpiece ✨
            </button>
          </Link>
        </div>
      </section >
    </div >
  );
}