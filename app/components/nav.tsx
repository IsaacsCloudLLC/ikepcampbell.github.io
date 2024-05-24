'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
  { path: '/side_projects', name: 'Side Projects' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);



  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Update state when scrolled
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);


  return (
    <aside className="-ml-2 tracking-tight">
      <div className="z-50">
        <svg
          className="md:hidden lg:hidden absolute left-4 top-2 h-12 w-12 text-white-700 cursor-pointer"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Link href="/">
            <path
              d="M12 2L3 9V21H9V14H15V21H21V9L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Link>
        </svg>
        <button
          className="md:hidden flex items-center ml-auto mr-4 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-12 w-12 text-white-700"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <nav
          className={`flex pb-4 pt-4 flex-col md:flex-row space-x-8 items-start px-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'absolute top-full right-0 md:static bg-black' : 'hidden md:flex'
            } ${isScrolled ? 'bg-gray-800' : ''} `}
          id="nav"
        >
          <div className={`flex flex-col relative right-0 md:hidden ${isOpen ? '' : 'hidden'}`}>
            {navItems.map(({ path, name }) => (
              <a
                key={path}
                href={path}
                className="text-xl text-white dark:text-white hover:text-yellow-100 hover:font-semibold py-1 px-4 mt-1 right-0 mb-1"
                onClick={toggleMenu}
              >
                {name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex flex-row space-x-8">
            {navItems.map(({ path, name }) => (
              <a
                key={path}
                href={path}
                className={`transition-all text-2xl dark:hover:text-yellow-100 flex align-middle relative py-1 px-2 m-1 `}
              >
                {name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}