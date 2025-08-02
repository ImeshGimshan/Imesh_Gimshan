'use client';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import '@/app/globals.css';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

  return (
    <nav className="bg-transparent backdrop-blur-sm border-b-1 border-white/30 rounded-2xl fixed top-0 left-0 w-full z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent p-3 md:p-5 md:text-2xl font-poppins">
          Imesh Gimshan
        </h1>
        <ul className="hidden md:flex gap-10 text-sm md:text-lg font-poppins font-semibold">
          {navItems.map((item) => (
            <li
              key={item}
              className="
                bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent 
                cursor-pointer transition-all duration-300 transform hover:text-blur hover:scale-110
              "
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          className="md:hidden p-3 md:p-5 text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <BiMenu size={36} />
        </button>
      </div>
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500 mt-4
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className="flex flex-col items-center gap-6 text-sm md:text-lg font-poppins font-semibold bg-black/70 py-6 rounded-lg">
          {navItems.map((item) => (
            <li
              key={item}
              className="
                bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent 
                cursor-pointer transition-all duration-300 hover:text-white
              "
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
