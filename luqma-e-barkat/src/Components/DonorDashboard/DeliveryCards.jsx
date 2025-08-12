//----------------------- First Design -----------------------
// import React from "react";

// const deliveries = [
//   {
//     id: 1,
//     title: "Food Package 1",
//     description: "Rice, beans, and water bottles.",
//     status: "Delivered",
//   },
//   {
//     id: 2,
//     title: "Food Package 2",
//     description: "Bread, milk, and canned food.",
//     status: "In Process",
//   },
//   {
//     id: 3,
//     title: "Food Package 3",
//     description: "Biscuits, juices, and snacks.",
//     status: "Not Delivered",
//   },
//   {
//     id: 4,
//     title: "Food Package 4",
//     description: "Vegetables and fruits.",
//     status: "Delivered",
//   },
//   {
//     id: 5,
//     title: "Food Package 5",
//     description: "Frozen meat and dairy items.",
//     status: "In Process",
//   },
//   {
//     id: 6,
//     title: "Food Package 6",
//     description: "Dry ration pack.",
//     status: "Not Delivered",
//   },
//   {
//     id: 7,
//     title: "Food Package 7",
//     description: "Dry ration pack.",
//     status: "Not Delivered",
//   },
// ];

// const statusColor = {
//   Delivered: "text-green-800",
//   "In Process": "text-yellow-600",
//   "Not Delivered": "text-red-600",
// };

// export default function DeliveryCards() {
//   return (
//     <div className="p-6">
//       <h1 className="text-center text-4xl text-black font-bold mb-6 mt-4">
//         My Donations
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {deliveries.map((delivery) => (
//           <div
//             key={delivery.id}
//             className="bg-soft-orange shadow-lg p-6 rounded-xl border border-gray-300"
//           >
//             <h2 className="text-xl font-semibold mb-2">{delivery.title}</h2>
//             <p className="text-gray-600 mb-3">{delivery.description}</p>
//             <p className={`mb-3 font-medium ${statusColor[delivery.status]}`}>
//               Status: {delivery.status}
//             </p>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//               Track
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//----------------------- Second Design -----------------------
import React from "react";
import { FaBoxOpen } from "react-icons/fa";

const deliveries = [
  {
    id: 1,
    title: "Food Package 1",
    description: "Rice, beans, and water bottles.",
    status: "Delivered",
  },
  {
    id: 2,
    title: "Food Package 2",
    description: "Bread, milk, and canned food.",
    status: "In Process",
  },
  {
    id: 3,
    title: "Food Package 3",
    description: "Biscuits, juices, and snacks.",
    status: "Not Delivered",
  },
  {
    id: 4,
    title: "Food Package 4",
    description: "Vegetables and fruits.",
    status: "Delivered",
  },
  {
    id: 5,
    title: "Food Package 5",
    description: "Frozen meat and dairy items.",
    status: "In Process",
  },
  {
    id: 6,
    title: "Food Package 6",
    description: "Dry ration pack.",
    status: "Not Delivered",
  },
  {
    id: 7,
    title: "Food Package 7",
    description: "Dry ration pack.",
    status: "Not Delivered",
  },
];

const statusStyles = {
  Delivered: "bg-green-100 text-green-800",
  "In Process": "bg-yellow-100 text-yellow-700",
  "Not Delivered": "bg-red-100 text-red-600",
};

export default function DeliveryCards() {
  return (
    <div className="p-6">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10 mt-4">
        📦 My Donations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl p-6 hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaBoxOpen className="text-2xl text-green-600" />
              <h2 className="text-xl font-bold text-gray-800">
                {delivery.title}
              </h2>
            </div>

            <p className="text-gray-600 mb-4">{delivery.description}</p>

            <span
              className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${statusStyles[delivery.status]}`}
            >
              {delivery.status}
            </span>

            <div className="mt-5">
              <button className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300">
                Track Delivery
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
