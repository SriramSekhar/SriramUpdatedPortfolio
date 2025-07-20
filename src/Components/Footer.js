import React from 'react';
import { FaHeart, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2">
        {/* Desktop View */}
        <div className="hidden custom:flex flex-col items-center justify-between custom:flex-row">
          {/* change the text as needed */}
          <p className="text-center">
            Made with <FaHeart className="inline text-red-500" /> by SRIRAM SEKHAR © {new Date().getFullYear()} 
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ml-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile View */}
        <div className="custom:hidden flex flex-col items-center">
          <div className="flex gap-4 mb-4">
            {/* change the social media links as needed */}
            <a
              href="https://www.linkedin.com/in/abdullahtariq78/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="https://www.facebook.com/abdullah.tariq.7262"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/abdullahtariq62/?next=%2F&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            >
              <FaInstagram className="text-white" />
            </a>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
