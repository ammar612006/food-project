import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="bg-green-100 text-center py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        Start Making a Difference Today
      </h3>

      <Link to="/login">
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300 text-base sm:text-lg">
          Donate Now
        </button>
      </Link>
    </section>
  );
}
