import React from "react";
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4 px-6 flex justify-between items-center">
      <Link to="/">
      <h1 className="text-2xl font-bold text-orange-500">Luqma-E-Barkat</h1>
      </Link>
      <nav className="space-x-1 hidden flex  md:flex items-center">
        <Link className="text-gray-700 font-medium px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white" to="/" >Home</Link>

        <Link to="/about" className="text-gray-700 font-medium px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white">About</Link>

        <Link to="/how-it-works" className="text-gray-700 font-medium px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white">How It Works</Link>

        <Link to="/ourproject" className="text-gray-700 font-medium px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white">Our Project</Link>

        {/* <Link to="/request" className="text-gray-700 font-medium px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white">Request</Link> */}

        <Link to="/contact" className="text-gray-700 font-medium px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white">Contact</Link>

        <Link to="/login" className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600">Log In</Link>
      </nav>
    </header>
  );
}
