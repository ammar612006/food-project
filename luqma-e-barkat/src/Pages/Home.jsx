import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import HowItWorks from "../Components/HowItWorks";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";


export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
}