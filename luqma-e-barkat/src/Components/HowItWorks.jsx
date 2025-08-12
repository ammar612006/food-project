import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faBoxOpen, faSyncAlt, faTruck } from '@fortawesome/free-solid-svg-icons';

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-slate-300">
      <h3 className="text-3xl font-semibold text-center mb-10">How It Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Tile 1 */}
        <div className="bg-green-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
          <div className="text-5xl mb-4 text-center">
            <FontAwesomeIcon icon={faPenNib} />
          </div>
          <h4 className="font-semibold text-lg mb-2">Sign up as Donor or Donee</h4>
          <p className="text-gray-700 text-md">Create your account to start sharing or receiving food.</p>
        </div>

        {/* Tile 2 */}
        <div className="bg-green-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
          <div className="text-5xl mb-4 text-center">
            <FontAwesomeIcon icon={faBoxOpen} />
          </div>
          <h4 className="font-semibold text-lg mb-2">Post food availability/request</h4>
          <p className="text-gray-700 text-md">Let the community know about your food donations or needs.</p>
        </div>

        {/* Tile 3 */}
        <div className="bg-green-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
          <div className="text-5xl mb-4 text-center">
            <FontAwesomeIcon icon={faSyncAlt} />
          </div>
          <h4 className="font-semibold text-lg mb-2">Get matched instantly</h4>
          <p className="text-gray-700 text-md">Our system pairs donors with those in need quickly and efficiently.</p>
        </div>

        {/* Tile 4 */}
        <div className="bg-green-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-5xl mb-4 text-center">
            <FontAwesomeIcon icon={faTruck} />
          </div>
          <h4 className="font-semibold text-lg mb-2">Deliver or receive with ease</h4>
          <p className="text-gray-700 text-md">Coordinate safe and timely food delivery or pickup.</p>
        </div>
      </div>
    </section>
  );
}
