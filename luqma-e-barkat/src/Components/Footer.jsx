import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Luqma-E-Barkat. All rights reserved.</p>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          
          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-sky-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-pink-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
