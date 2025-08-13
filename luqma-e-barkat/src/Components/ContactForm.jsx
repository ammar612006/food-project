import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Integrate with EmailJS, Formspree, or your backend here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 ">
      
      {/* Name Field */}
      <div>
        <label className="block mb-1 font-bold">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="block mb-1 font-bold">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      {/* Message Field */}
      <div>
        <label className="block mb-1 font-bold">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg h-32"
          required
        ></textarea>
      </div>

      {/* Submit Button Aligned to the Right */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-300 text-gray-800 font-bold px-6 py-2 rounded hover:bg-slate-700 hover:text-gray-300"
        >
          Send Message
        </button>
      </div>
      
    </form>
  );
}
