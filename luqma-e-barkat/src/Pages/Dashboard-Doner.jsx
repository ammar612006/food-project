// import LeftSidebar from "../Components/DonorDashboard/LeftSidebar";
// import DeliveryCards from "../Components/DonorDashboard/DeliveryCards";

// export default function DashboardDoner() {
//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Fixed Sidebar */}
//       <div className="w-64 bg-green-500 fixed top-0 left-0 h-full z-10">
//         <LeftSidebar />
//       </div>

//       {/* Scrollable Main Content */}
//       <div className="ml-64 flex-1 overflow-y-auto p-4 bg-slate-400">
//         <DeliveryCards />
//       </div>
//     </div>
//   );
// }

// DashboardDonor.jsx


import { Routes, Route } from "react-router-dom";
import LeftSidebar from "../Components/DonorDashboard/LeftSidebar";
import DeliveryCards from "../Components/DonorDashboard/DeliveryCards"; // My Donations
import DonateFood from "../Components/DonorDashboard/DonateFood";
import Profile from "../Components/DonorDashboard/Profile";
import Settings from "../Components/DonorDashboard/Settings";

export default function DashboardDoner() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Static Sidebar */}
      <div className="w-64 bg-green-500 fixed top-0 left-0 h-full z-10">
        <LeftSidebar />
      </div>

      {/* Scrollable Main Content */}
      <div className="ml-64 flex-1 overflow-y-auto">
        <Routes>
          <Route path="my-donations" element={<DeliveryCards />} />
          <Route path="donate-food" element={<DonateFood />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}


