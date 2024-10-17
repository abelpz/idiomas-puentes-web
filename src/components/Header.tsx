import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Globe className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">IdiomasPuentes</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><a href="#services" className="hover:text-blue-200">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;