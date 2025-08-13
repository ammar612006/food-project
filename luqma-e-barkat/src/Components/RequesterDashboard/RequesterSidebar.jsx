// src/components/RequesterSidebar.jsx
import { NavLink } from "react-router-dom";
import {
  FaUtensils,
  FaMapMarkedAlt,
  FaHistory,
  FaUserEdit,
  FaStar,
  FaSignOutAlt,
} from "react-icons/fa";

export default function RequesterSidebar() {
  const linkBaseStyle =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-semibold text-base";

  const navItemClass = ({ isActive }) =>
    `${linkBaseStyle} ${
      isActive
        ? "bg-green-700 text-white shadow-md"
        : "hover:bg-green-600 text-green-100"
    }`;

  return (
    <div className="fixed left-0 top-0 h-screen w-64 pt-8 px-4 bg-green-900 bg-opacity-90 backdrop-blur-lg shadow-xl flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Title */}
        <h1 className="mb-10 text-3xl font-bold text-center text-white">
          Requester Panel
        </h1>

        {/* Menu Items */}
        <ul className="flex flex-col gap-3">
          <NavLink
            to="/dashboard-requester/request-food"
            className={navItemClass}
          >
            <FaUtensils size={18} />
            Request Food
          </NavLink>
          <NavLink
            to="/dashboard-requester/track-status"
            className={navItemClass}
          >
            <FaMapMarkedAlt size={18} />
            Track Request Status
          </NavLink>
          <NavLink
            to="/dashboard-requester/history"
            className={navItemClass}
          >
            <FaHistory size={18} />
            Request History
          </NavLink>
          <NavLink
            to="/dashboard-requester/edit-profile"
            className={navItemClass}
          >
            <FaUserEdit size={18} />
            Edit Profile
          </NavLink>
          <NavLink
            to="/dashboard-requester/feedback"
            className={navItemClass}
          >
            <FaStar size={18} />
            Feedback / Rating
          </NavLink>
        </ul>
      </div>

      {/* Logout Button */}
      <div className="mb-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-3 text-base text-red-200 hover:text-white hover:bg-red-600 rounded-xl transition-all duration-300 font-semibold"
        >
          <FaSignOutAlt size={18} />
          Logout
        </NavLink>
      </div>
    </div>
  );
}
