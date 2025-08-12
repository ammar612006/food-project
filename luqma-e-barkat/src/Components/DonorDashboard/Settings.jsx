//------------------- First Design -------------------

// // src/components/DonorSettings.jsx
// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

// const DonorSettings = () => {
//   const { t, i18n } = useTranslation();
//   const language = i18n.language || "en";
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);

//   const handleLanguageChange = (e) => {
//     const selectedLang = e.target.value;
//     i18n.changeLanguage(selectedLang);
//     alert(t("Language Changed"));
//   };

//   const toggleNotifications = () => {
//     setNotificationsEnabled((prev) => !prev);
//   };

//   return (
//     <div className="p-6 mt-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
//       <h2 className="text-xl font-bold">{t("Settings")}</h2>

//       <div>
//         <label className="block text-gray-500  font-bold mb-2">
//           {t("Select Language")}:
//         </label>
//         <select
//           value={language}
//           onChange={handleLanguageChange}
//           className="border p-2 rounded w-full"
//         >
//           <option value="en">English</option>
//           <option value="ur">اردو</option>
//         </select>
//       </div>

//       <div className="flex items-center justify-between text-gray-500 font-bold">
//         <span>{t("Notifications")}</span>
//         <button
//           onClick={toggleNotifications}
//           className={`w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300 ${
//             notificationsEnabled ? "bg-green-500" : "bg-gray-300"
//           }`}
//         >
//           <div
//             className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
//               notificationsEnabled ? "translate-x-6" : "translate-x-0"
//             }`}
//           ></div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DonorSettings;

//----------------------------- Second Design -----------------------------

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBell, FaBellSlash, FaLanguage } from "react-icons/fa";

const DonorSettings = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language || "en";
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    alert(t("Language Changed"));
  };

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-start justify-center pt-10 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 space-y-8">
        <h2 className="text-3xl font-extrabold text-green-700 text-center">
          {t("Settings")}
        </h2>

        {/* Language Section */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <FaLanguage className="mr-2 text-green-600" />
            {t("Select Language")}:
          </label>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            <option value="en">English</option>
            <option value="ur">اردو</option>
          </select>
        </div>

        {/* Notifications Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700 font-semibold">
            {notificationsEnabled ? (
              <FaBell className="text-green-600" />
            ) : (
              <FaBellSlash className="text-gray-400" />
            )}
            {t("Notifications")}
          </div>
          <button
            onClick={toggleNotifications}
            className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-300 shadow-inner ${
              notificationsEnabled ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                notificationsEnabled ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonorSettings;
