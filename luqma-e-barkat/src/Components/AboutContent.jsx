import React from "react";
import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
        About Luqma-e-Barkat
      </h1>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto mb-12">
        <img src="./Images/AboutImage1.jpg" alt="Food Sharing" />
        
        <h2 className="mt-7 text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          Luqma-e-Barkat is a digital platform designed to reduce food waste and
          alleviate hunger by connecting food donors—such as restaurants,
          caterers, and households—with those in need. By using technology and
          community collaboration, we aim to build a bridge between surplus and
          scarcity.
        </p>
        <div className="mt-6 text-center">
        <Link className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition" to="/signup">
          Donate Now
        </Link>
        </div>
      </section>
      

      {/* Our Story */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p>
          Every day, tons of edible food are thrown away while many families go
          hungry. This platform was born from the belief that no one should
          sleep hungry while good food goes to waste. What began as a local
          initiative has evolved into a scalable digital solution for food
          redistribution.
        </p>
        <div className="mt-6 text-center">
        <Link className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition" to="/signup">
          Request Now
        </Link>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Collect surplus food from verified donors.</li>
          <li>Allow beneficiaries to request food easily.</li>
          <li>Enable volunteers to deliver food efficiently.</li>
          <li>Maintain food safety and hygiene standards.</li>
          <li>Empower communities through technology and awareness.</li>
        </ul>
      </section>



      {/* Values */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Sustainability:</strong> We are committed to reducing food waste by channeling surplus to those who need it most.</li>
          <li><strong>Compassion:</strong> Every action we take is rooted in genuine care for the well-being of our community.</li>
          <li><strong>Efficiency:</strong> We harness the power of technology to ensure swift and seamless food distribution.</li>
          <li><strong>Transparency:</strong> We maintain complete visibility in every donation, ensuring trust and accountability.</li>
        </ul>
      </section>


      {/* Call to Action */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Want to Get Involved?</h2>
        <p className="mb-6">Join our mission to reduce food waste and feed those in need.</p>
        <Link className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition" to="/signup">
          Join Now
        </Link>

      </section>
    </div>
  );
}

//Commented How it works section and user types table for now

// {/* How It Works */}
//       <section className="max-w-4xl mx-auto mb-12">
//         <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
//         <ol className="list-decimal pl-5 space-y-2">
//           <li>Donors sign up and list available food.</li>
//           <li>Beneficiaries request food and receive notifications.</li>
//           <li>Volunteers pick up and deliver food.</li>
//           <li>Admins oversee operations and ensure safety.</li>
//         </ol>
//       </section>

//       {/* User Types */}
//       <section className="max-w-4xl mx-auto mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Our Users</h2>
//         <div className="overflow-auto">
//           <table className="min-w-full table-auto border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-2 border">User Type</th>
//                 <th className="px-4 py-2 border">Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="px-4 py-2 border">Donors</td>
//                 <td className="px-4 py-2 border">List and schedule food donations</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border">Beneficiaries</td>
//                 <td className="px-4 py-2 border">Request and receive food</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border">Volunteers</td>
//                 <td className="px-4 py-2 border">Deliver food from donors to donees</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border">Admins</td>
//                 <td className="px-4 py-2 border">Manage users and ensure safety</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border">Support Staff</td>
//                 <td className="px-4 py-2 border">Provide user and technical support</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>
