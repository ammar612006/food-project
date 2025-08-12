//--------------------- First Design ---------------------

// import React, { useState } from "react";
// import { FaUser, FaEnvelope, FaPhone, FaLock, FaEdit } from "react-icons/fa";

// export default function Profile() {
//   const [profileData, setProfileData] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     email: "john@example.com",
//     phone: "1234567890",
//     password: "password123",
//   });

//   const [editingField, setEditingField] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     console.log("Updated profile:", profileData);
//     alert("Profile updated (frontend only)");
//     setEditingField(null); // stop editing all fields after save
//   };

//   const renderField = (label, name, Icon) => (
//     <div className="flex items-center justify-between py-4 border-b">
//       <div className="flex items-center gap-2 text-gray-500 font-semibold">
//         {Icon && <Icon />}
//         {label}
//       </div>
//       <div className="flex items-center gap-2">
//         {editingField === name ? (
//           <input
//             type={name === "password" ? "password" : "text"}
//             name={name}
//             value={profileData[name]}
//             onChange={handleChange}
//             className="border p-1 rounded"
//           />
//         ) : (
//           <span className="text-gray-800">{profileData[name]}</span>
//         )}
//         <button
//           type="button"
//           onClick={() => setEditingField(editingField === name ? null : name)}
//           className="text-blue-500 hover:text-blue-700"
//         >
//           <FaEdit />
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="max-w-xl mx-auto mt-6 bg-white p-6 rounded-3xl shadow-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
//         My Profile
//       </h2>

//       <form onSubmit={handleUpdate} className="flex flex-col gap-2 text-gray-500">
//         {renderField("First Name", "firstName", FaUser)}
//         {renderField("Last Name", "lastName", FaUser)}
//         {renderField("Email", "email", FaEnvelope)}
//         {renderField("Phone", "phone", FaPhone)}
//         {renderField("Password", "password", FaLock)}

//         <button
//           type="submit"
//           className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-bold transition duration-300"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }

//----------------------------- Second Design -----------------------------
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEdit } from "react-icons/fa";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "1234567890",
    password: "password123",
  });

  const [editingField, setEditingField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated (frontend only)");
    console.log("Updated profile:", profileData);
    setEditingField(null);
  };

  const renderField = (label, name, Icon) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center gap-3 text-gray-600 font-medium">
        {Icon && <Icon className="text-green-500 text-lg" />}
        <span>{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {editingField === name ? (
          <input
            type={name === "password" ? "password" : "text"}
            name={name}
            value={profileData[name]}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-1 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          />
        ) : (
          <span className="text-gray-800">{profileData[name]}</span>
        )}
        <button
          type="button"
          onClick={() => setEditingField(editingField === name ? null : name)}
          className="text-blue-500 hover:text-blue-700 transition"
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white bg-opacity-90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-green-700">
        My Profile
      </h2>

      <form onSubmit={handleUpdate} className="space-y-4 text-gray-600">
        {renderField("First Name", "firstName", FaUser)}
        {renderField("Last Name", "lastName", FaUser)}
        {renderField("Email", "email", FaEnvelope)}
        {renderField("Phone", "phone", FaPhone)}
        {renderField("Password", "password", FaLock)}

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full font-semibold transition duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
