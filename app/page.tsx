import Link from 'next/link';

export default function Page() {
  return (
    <div className="mb-24">
      <header className="absolute left-0 w-full z-50 flex items-center justify-center py-4">
        <h1 className="text-6xl font-bold tracking-widest leading-tight mb-2">
          Crafting Websites That <span className="text-teal-500">Spark⚡️</span>
        </h1>
        <p className="text-xl">Unique Design. Cutting-Edge Tech.</p>
      </header>
      <section className="relative top-24 bg-gradient-to-r from-teal-400 to-blue-500 overflow-hidden text-white">
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center">
          <p className="max-w-lg text-xl mb-8">
            Tired of websites that look and feel like yesterday's news? Let's break
            free from the snoozefest! I create websites that are as exciting and
            unique as your business, with the technical muscle to make them thrive.
          </p>
          <Link href="/services">
            <button className="px-8 py-4 bg-white text-teal-500 font-bold rounded-full hover:bg-teal-100 hover:text-teal-400 shadow-md transition-all duration-300">
              Let's craft your digital masterpiece ✨
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}