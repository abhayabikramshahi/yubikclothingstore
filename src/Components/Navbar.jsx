import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Yubik Clothing Store
        </Link>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`flex-col md:flex md:flex-row md:space-x-8 absolute md:static bg-white w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-200px]'}`}>
          <li>
            <Link
              to="/"
              className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 px-4"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/clothes/1"
              className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 px-4"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Clothes
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 px-4"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2 px-4"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;