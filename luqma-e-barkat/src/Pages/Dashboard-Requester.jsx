// src/Pages/Dashboard-Requester.jsx
import { Routes, Route } from "react-router-dom";
import RequesterSidebar from "../Components/RequesterDashboard/RequesterSidebar";

// Import placeholder or actual components
// import DashboardHome from "../Components/RequesterDashboard/DashboardHome";
// import RequestFood from "../Components/RequesterDashboard/RequestFood";
// import AvailableDonations from "../Components/RequesterDashboard/AvailableDonations";
// import TrackStatus from "../Components/RequesterDashboard/TrackStatus";
// import RequestHistory from "../Components/RequesterDashboard/RequestHistory";
// import EditProfile from "../Components/RequesterDashboard/EditProfile";
// import VolunteerInfo from "../Components/RequesterDashboard/VolunteerInfo";
// import Feedback from "../Components/RequesterDashboard/Feedback";

export default function DashboardRequester() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Static Sidebar */}
      <div className="w-64 bg-green-500 fixed top-0 left-0 h-full z-10">
        <RequesterSidebar />
      </div>

      {/* Scrollable Main Content */}
      {/* <div className="ml-64 flex-1 overflow-y-auto p-4 bg-slate-100">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="request-food" element={<RequestFood />} />
          <Route path="available-donations" element={<AvailableDonations />} />
          <Route path="track-status" element={<TrackStatus />} />
          <Route path="history" element={<RequestHistory />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="volunteer-info" element={<VolunteerInfo />} />
          <Route path="feedback" element={<Feedback />} />
        </Routes>
      </div> */}
    </div>
  );
}
