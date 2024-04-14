'use client'
import React from 'react';
import Link from 'next/link';

const navItems = [
  { path: '/', name: 'home' },
  { path: '/services', name: 'services' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
  { path: '/side_projects', name: 'side projects' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <aside className="-ml-2  mb-16 tracking-tight">
      <div className="z-50 pt-4">
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
          className={`flex bg-gradient-to-r  from-teal-400 to-teal-700 flex-col md:flex-row space-x-8 items-start px-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'absolute top-full right-0 md:static' : 'hidden md:flex'
          }`}
          id="nav"
        >
          <div className={`flex flex-col relative right-0 md:hidden ${isOpen ? '' : 'hidden'}`}>
            {navItems.map(({ path, name }) => (
              <a
                key={path}
                href={path}
                className="text-xl hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-4 mt-1 right-0 mb-1" // add text-right class
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
                className="transition-all text-xl hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
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