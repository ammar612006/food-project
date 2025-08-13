// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import HowItWorks from "./Pages/HowItWorks";
import Request from "./Pages/Request";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/Contact";
import OurProject from "./Pages/OurProject";
import OTPVerification from "./Pages/OTP-Verification";
import DashboardDoner from "./Pages/Dashboard-Doner";
import DashboardRequester from "./Pages/Dashboard-Requester";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/ourproject" element={<OurProject />} />
        {/* <Route path="/request" element={<Request/>} /> */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/OTP" element={<OTPVerification />} />
        <Route path="/dashboard-doner/*" element={<DashboardDoner />} />
        <Route path="/dashboard-requester/*" element={<DashboardRequester />} />
        {/* <Route path="/dashboard-volunteer/*" element={<DashboardDoner />} /> */}

        {/* You can add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
