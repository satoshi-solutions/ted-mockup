'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLoading } from './LoadingProvider';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { showLoading, hideLoading } = useLoading();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleNavigation = (href: string) => {
    showLoading();
    router.push(href);
    // Hide loading after a short delay to ensure the loading state is visible
    setTimeout(hideLoading, 500);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('/')} 
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-ted-blue-500">TED-like</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('/')} 
              className="text-gray-700 hover:text-ted-blue-500 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/videos')} 
              className="text-gray-700 hover:text-ted-blue-500 font-medium"
            >
              Videos
            </button>
            <button 
              onClick={() => handleNavigation('/categories')} 
              className="text-gray-700 hover:text-ted-blue-500 font-medium"
            >
              Categories
            </button>
            <button 
              onClick={() => handleNavigation('/about')} 
              className="text-gray-700 hover:text-ted-blue-500 font-medium"
            >
              About
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search talks..."
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-ted-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-ted-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-ted-blue-600 focus:outline-none focus:ring-2 focus:ring-ted-blue-500"
              >
                Search
              </button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/')} 
                className="text-gray-700 hover:text-ted-blue-500 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/videos')} 
                className="text-gray-700 hover:text-ted-blue-500 font-medium"
              >
                Videos
              </button>
              <button 
                onClick={() => handleNavigation('/categories')} 
                className="text-gray-700 hover:text-ted-blue-500 font-medium"
              >
                Categories
              </button>
              <button 
                onClick={() => handleNavigation('/about')} 
                className="text-gray-700 hover:text-ted-blue-500 font-medium"
              >
                About
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 