import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/services': {
    name: 'services',
  },
  '/about': {
    name: 'about',
  },
  '/contact': {
    name: 'contact',
  },
  '/side_projects': {
    name: 'side projects',
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="z-50 pt-4 pb-4">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all text-2xl hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}