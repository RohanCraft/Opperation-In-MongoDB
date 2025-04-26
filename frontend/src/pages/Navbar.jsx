import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo or Title */}
        <div className="text-white text-2xl font-bold">
          MongoDB Connect
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className="text-white text-lg font-medium hover:text-indigo-200 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/addcontent" 
            className="text-white text-lg font-medium hover:text-indigo-200 transition-colors"
          >
            Add Content
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
