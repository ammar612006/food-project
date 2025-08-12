import React from "react";
import { Link } from "react-router-dom"; // Uncomment if using React Router

export default function HeroSection() {
  return (
    
    <section className="relative text-center py-20 px-6 overflow-hidden">
  {/* Background Image + Overlay */}
  <div
    className="absolute inset-0 bg-center bg-cover bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://www.shutterstock.com/shutterstock/photos/2439810815/display_1500/stock-photo-hands-sharing-bowl-of-dates-for-ramadan-iftar-dinner-ramadan-kareem-sharing-food-concept-2439810815.jpg')",
      zIndex: -2,
    }}
  ></div>

  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black opacity-70 z-[-1]"></div>


      <h2 className="text-4xl text-white font-bold mb-4">Bridge the Gap – Share Your Meal, Spread the Hope</h2>
      <p className="text-lg text-white mb-6">Join hands to reduce food waste and feed the hungry.</p>
      <div className="space-x-4">
        <Link to="/login">
        <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">Become a Donor</button>
        </Link>
        <Link to="/login">
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">Become a Donee</button>
        </Link>
      </div>
    </section>
  );
}