"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from "@heroicons/react/24/solid"; // Assuming you are using these icons
import MenuOverLays from './MenuOverLays';

const navlinks = [
  { title: "Home", path: "#home" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbaropen, setNavbaropen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100'> {/* Set z-index to 50 */}
      <div className='flex flex-wrap items-center justify-between p-4 mx-auto'>
        <Link href={"/"} className='pl-6 text-2xl font-extrabold text-white'>PORTFOLIO</Link>

        <div className="block mobile-menu md:hidden">
          {!navbaropen ? 
            <button onClick={() => setNavbaropen(true)} className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200'>
              <Bars3Icon className='w-5 h-5' />
            </button>
            :
            <button onClick={() => { setNavbaropen(false) }} className='flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          }
        </div>

        <div className="hidden menu md:block md:w-auto" id='navbar'>
          <ul className='flex p-4 mr-20 md:p-0 md:flex-row md:space-x-8'>
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* You can show your mobile menu overlay if needed */}
      {navbaropen ? <MenuOverLays links={navlinks} /> : null}
    </nav>
  );
}

export default Navbar;
