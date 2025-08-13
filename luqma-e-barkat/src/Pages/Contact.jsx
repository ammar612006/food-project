import React from "react";
import ContactForm from "../Components/ContactForm";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 ">
        <Navbar/>
      <h1 className="text-4xl font-bold text-center mt-4 mb-8">Contact Us</h1>

      <div className="max-w-4xl mx-auto bg-gradient-to-b text-white from-green-800 via-emerald-700 to-teal-700 p-8 rounded-xl shadow-md mb-5">
        <ContactForm />
      </div>
        <Footer/>
    </div>
  );
}
