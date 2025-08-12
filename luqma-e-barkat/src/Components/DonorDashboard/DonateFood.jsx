//---------------------------- First Design ----------------------------

// import React from "react";
// import {
//   FaUtensils,
//   FaListOl,
//   FaRegStickyNote,
//   FaClock,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const DonateFoodForm = () => {
//   return (
//     <div className="max-w-2xl mx-auto bg-white shadow-md rounded-3xl p-8 mt-6">
//       <h2 className="text-2xl text-green-700 font-bold mb-6 text-center">Donate Food</h2>
//       <form className="space-y-5">
//         {/* Item Name */}
//         <div className="flex items-center border-b-2 border-gray-300 py-2">
//           <FaUtensils className="text-gray-500 mr-3" />
//           <input
//             type="text"
//             placeholder="Item Name"
//             className="w-full focus:outline-none"
//           />
//         </div>

//         {/* Quantity */}
//         <div className="flex items-center border-b-2 border-gray-300 py-2">
//           <FaListOl className="text-gray-500 mr-3" />
//           <input
//             type="number"
//             placeholder="Quantity"
//             className="w-full focus:outline-none"
//           />
//         </div>

//         {/* Description */}
//         <div className="flex items-center border-b-2 border-gray-300 py-2">
//           <FaRegStickyNote className="text-gray-500 mr-3" />
//           <textarea
//             placeholder="Description"
//             className="w-full focus:outline-none resize-none"
//             rows={3}
//           />
//         </div>

//         {/* Pick Up Time */}
//         <div className="flex items-center border-b-2 border-gray-300 py-2">
//           <FaClock className="text-gray-500 mr-3" />
//           <input
//             type="time"
//             className="w-full focus:outline-none"
//             onFocus={(e) => e.target.showPicker && e.target.showPicker()} // Optional enhancement
//           />
//         </div>

//         {/* Location */}
//         <div className="flex items-center border-b-2 border-gray-300 py-2">
//           <FaMapMarkerAlt className="text-gray-500 mr-3" />
//           <input
//             type="text"
//             placeholder="Enter Pickup Location"
//             className="w-full focus:outline-none"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
//         >
//           Submit Donation
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DonateFoodForm;



//----------------------------- Second Design -----------------------------
import React from "react";
import {
  FaUtensils,
  FaListOl,
  FaRegStickyNote,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DonateFoodForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <h2 className="text-3xl font-extrabold text-center text-green-700 mb-8">
          Donate Food
        </h2>

        <form className="space-y-6">
          {/* Item Name */}
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
            <FaUtensils className="text-green-600 mr-3" />
            <input
              type="text"
              placeholder="Item Name"
              className="w-full bg-transparent focus:outline-none text-gray-700"
            />
          </div>

          {/* Quantity */}
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
            <FaListOl className="text-green-600 mr-3" />
            <input
              type="number"
              placeholder="Quantity"
              className="w-full bg-transparent focus:outline-none text-gray-700"
            />
          </div>

          {/* Description */}
          <div className="flex items-start bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
            <FaRegStickyNote className="text-green-600 mr-3 mt-1" />
            <textarea
              placeholder="Description"
              className="w-full bg-transparent focus:outline-none resize-none text-gray-700"
              rows={3}
            />
          </div>

          {/* Pickup Time */}
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
            <FaClock className="text-green-600 mr-3" />
            <input
              type="time"
              className="w-full bg-transparent focus:outline-none text-gray-700"
            />
          </div>

          {/* Location */}
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
            <FaMapMarkerAlt className="text-green-600 mr-3" />
            <input
              type="text"
              placeholder="Enter Pickup Location"
              className="w-full bg-transparent focus:outline-none text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-full shadow-md transition duration-300"
          >
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateFoodForm;

