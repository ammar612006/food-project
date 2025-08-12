// import React from "react";
// import { Link } from "react-router-dom"; // Uncomment if using React Router
// export default function SignUpForm() {
//     return (
//         <div className="relative h-screen">
//             <div>
//                 <img className="h-screen w-full" src="./Images/SignUpPage.jpg" alt="No Image" />
//                 {/* overlay */}
//                 <div className="bg-black z-2 absolute inset-0 opacity-90"></div>
//                 {/* blue bg */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="flex-col space-y-5 bg-blue-500 h-[90%] w-[30%] shadow-lg rounded-3xl opacity-70">
//                         {/* heading */}
//                         <div className="flex flex-col justify-center items-center space-y-2">
//                             <h1 className="font-bold text-3xl mt-2">Sign Up</h1>
//                             <p>Already Have An Account?
//                                 <Link to="/login" className="ml-2">
//                                  <span className="text-orange-400 hover:underline cursor-pointer">Log In Now</span>
//                                 </Link>

//                                 </p>

//                         </div>


//                         {/* form */}
//                         <div className="flex flex-col text-lg  items-center justify-center space-y-1 ">
//                             <label className="text-lg" htmlFor="First Name">First Name</label>
//                             <input type="text" className="w-[60%] rounded-xl shadow-sm h-10" required />

//                             <label className="text-lg" htmlFor="Last Name">Last Name</label>
//                             <input type="text" className="w-[60%] rounded-xl shadow-sm h-10" />

//                             <label className="text-lg" htmlFor="Email">Email</label>
//                             <input type="email" className="w-[60%] rounded-xl shadow-sm h-10" />


//                             <label className="texl-lg" htmlFor="Password">Password</label>
//                             <input type="password" className="w-[60%] rounded-xl shadow-sm h-10" required />

//                             <label className="" htmlFor="Confirm Password">Confirm Password</label>
//                             <input type="password" className="w-[60%] rounded-xl shadow-sm h-10" required />

//                             <div className="flex justify-center mt-5 w-[80%]">
//                                 <button type="submit" className="bg-blue-700 mt-5 font-bold text-xl text-white px-6 py-3 rounded-xl w-full hover:bg-blue-800 hover:scale-105 tranform transition duration-300">
//                                     Sign Up
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // If valid, proceed
        console.log("Form submitted:", formData);
        // Add backend call here
    };

    return (
        <div className="relative min-h-screen w-full">
            {/* Background Image */}
            <img
                className="absolute h-full w-full object-cover"
                src="./Images/SignUpPage.jpg"
                alt="Background"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

            {/* Form Container */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
                <div className="bg-green-500 bg-opacity-70 rounded-3xl shadow-lg w-full sm:w-[90%] md:w-[65%] lg:w-[35%] p-6 z-10">
                    {/* Heading */}
                    <div className="text-center text-white mb-4">
                        <h1 className="font-bold text-3xl">Sign Up</h1>
                        <p className="text-base mt-2">
                            Already Have An Account?
                            <Link to="/login" className="ml-2">
                                <span className="text-orange-300 hover:underline">Log In Now</span>
                            </Link>
                        </p>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col space-y-3 text-white text-sm" onSubmit={handleSubmit}>
                        {/* First Name */}
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="font-medium">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                required
                                value={formData.firstName}
                                onChange={handleChange}
                                className="h-9 rounded-xl px-3 text-black shadow-sm focus:outline-none"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="font-medium">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="h-9 rounded-xl px-3 text-black shadow-sm focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="h-9 rounded-xl px-3 text-black shadow-sm focus:outline-none"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="font-medium">Phone Number</label>
                            <input
                                id="phone"
                                type="text"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="h-9 rounded-xl px-3 text-black shadow-sm focus:outline-none"
                            />
                        </div>
                        {/* OTP */}
                        {/* <div className="flex flex-col">
                            <label htmlFor="phone" className="font-medium">OTP</label>
                            <input
                                id="otp"
                                type="text"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="h-9 rounded-xl px-3 text-black shadow-sm focus:outline-none"
                            />
                        </div> */}

                        {/* Password */}
                        <div className="flex flex-col">
                            <label htmlFor="password" className="font-medium">Password</label>
                            <input
                                id="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="h-9 rounded-xl px-3 text-black shadow-sm focus:outline-none"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="flex flex-col">
                            <label htmlFor="confirmPassword" className="font-medium">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="h-9 rounded-xl px-3 text-black shadow-sm focus:outline-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-700 font-semibold text-white text-base py-2 rounded-xl mt-4 hover:bg-blue-800 hover:scale-105 transition transform duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
