// import { Link } from 'react-router-dom';

// export default function LeftSidebar() {
//     return (
//         <div className='h-full p-4 pt-20 border-r-2 border-black'>
//             <h1 className='mb-10 font-bold text-3xl text-white mt-4'>Donor Dashboard</h1>
//             <ul className='text-white flex flex-col gap-2 text-xl cursor-pointer'>
//                 <li className='p-2 hover:bg-green-600 rounded-3xl transform hover:scale-110 transition duration-300'>My Donations</li>
//                     <li className='p-2 hover:bg-green-600 rounded-3xl transform hover:scale-110 transition duration-300'>Donate Food</li>
//                 <li className='p-2 hover:bg-green-600 transform rounded-3xl hover:scale-110 transition duration-300'>Profile</li>
//                 {/* <li className='p-2 hover:bg-green-600 rounded-3xl transform hover:scale-110 transition duration-300'></li> */}
//                 <li className='p-2 hover:bg-green-600 rounded-3xl transform hover:scale-110 transition duration-300'>Settings</li>
//                 <Link to="/">
//                     <li className='p-2 hover:bg-red-500 transform rounded-3xl hover:scale-110 transition duration-300'>Logout</li>
//                 </Link>
//             </ul>
//         </div>
//     );
// }


//----------------------------- Second Design -----------------------------
// import { NavLink } from "react-router-dom";

// export default function LeftSidebar() {
//   const linkStyle =
//     "p-2 hover:bg-green-600 rounded-3xl transform hover:scale-110 transition duration-300";

//   return (
//     <div className="h-full p-4 pt-20 border-r-2 border-black">
//       <h1 className="mb-10 font-bold text-3xl text-white mt-4">
//         Donor Dashboard
//       </h1>
//       <ul className="text-white flex flex-col gap-2 text-xl">
//         <NavLink to="/dashboard-doner/my-donations" className={linkStyle}>
//           My Donations
//         </NavLink>
//         <NavLink to="/dashboard-doner/donate-food" className={linkStyle}>
//           Donate Food
//         </NavLink>
//         <NavLink to="/dashboard-doner/profile" className={linkStyle}>
//           Profile
//         </NavLink>
//         <NavLink to="/dashboard-doner/settings" className={linkStyle}>
//           Settings
//         </NavLink>
//         <NavLink
//           to="/"
//           className="p-2 hover:bg-red-500 rounded-3xl transform hover:scale-110 transition duration-300"
//         >
//           Logout
//         </NavLink>
//       </ul>
//     </div>
//   );
// }


// ----------------------------- Third Design -----------------------------
import { NavLink } from "react-router-dom";
import {
  FaDonate,
  FaHandsHelping,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaGift,
} from "react-icons/fa";

export default function LeftSidebar() {
  const linkBaseStyle =
    "flex items-center gap-3 p-3 rounded-xl transition-all duration-300 font-semibold";

  const navItemClass = ({ isActive }) =>
    `${linkBaseStyle} ${
      isActive ? "bg-green-700 text-white" : "hover:bg-green-600 text-green-100"
    }`;

  return (
    <div className="h-full pt-8 px-4 bg-green-900 bg-opacity-80 backdrop-blur-lg shadow-xl">
      <h1 className="mb-12 text-3xl font-bold text-center text-white">
        Donor Panel
      </h1>
      <ul className="flex flex-col gap-4 text-lg">
        <NavLink to="/dashboard-doner/my-donations" className={navItemClass}>
          <FaGift />
          My Donations
        </NavLink>
        <NavLink to="/dashboard-doner/donate-food" className={navItemClass}>
          <FaDonate />
          Donate Food
        </NavLink>
        <NavLink to="/dashboard-doner/profile" className={navItemClass}>
          <FaUserCircle />
          Profile
        </NavLink>
        <NavLink to="/dashboard-doner/settings" className={navItemClass}>
          <FaCog />
          Settings
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-3 p-3 text-red-200 hover:text-white hover:bg-red-600 rounded-xl transition-all duration-300 font-semibold"
        >
          <FaSignOutAlt />
          Logout
        </NavLink>
      </ul>
    </div>
  );
}

