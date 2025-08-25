import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function LogInForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex">
            <div className="min-h-screen bg-green-700 w-[30%] border-r-2 border-white">

                {/* Main headings */}
                <div className="flex flex-col items-start space-y-2 ml-10 text-gray-100">
                    <h1 className="font-bold mt-10 text-xl">Luqma-E-Barkat</h1>
                    <h1 className="font-bold mt-20 text-3xl">Log In</h1>
                </div>

                {/* Form Section */}
                <div className="flex justify-left items-center mt-5 ml-10">
                    <form className="w-full mr-10">

                        {/* Username field */}
                        <div className="flex flex-col mb-3">
                            <label className="font-bold text-lg text-gray-800" htmlFor="username">Username</label>
                            <input className="h-10 rounded-xl shadow-lg" type="text" id="username" name="username" required />
                        </div>

                        {/* Password field */}
                        <div className="flex flex-col mb-3 relative">
                            <label className="font-bold text-lg text-gray-800" htmlFor="password">Password:</label>
                            <input
                                className="h-10 rounded-xl shadow-lg pr-10"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(prev => !prev)}
                                className="absolute flex items-center h-[100%] right-3 top-12 transform -translate-y-1/2 text-gray-600"
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>


                        {/* Role Dropdown */}
                        <div className="flex flex-col mb-3">
                            <label className="font-bold text-lg text-gray-800" htmlFor="role">Select Role:</label>
                            <select className="h-10 rounded-xl shadow-lg text-gray-700" id="role" name="role" required>
                                <option value="">-- Choose Role --</option>
                                <option value="donor">Donor</option>
                                <option value="donee">Donee</option>
                                <option value="Volunteer">Volunteer</option>
                            </select>
                        </div>

                        {/* Forgot Password */}
                        <div className="mt-4 flex justify-center text-sm text-gray-800">
                            <Link> 
                                Forgot Password ?
                            </Link>
                        </div>

                        {/* Log In Button */}
                        <div className="flex justify-center mt-5">
                            <button type="submit" className="w-full bg-orange-400 h-12 rounded-2xl hover:bg-orange-700 font-bold text-2xl hover:scale-105 transform transition duration-300">
                                Log In
                            </button>
                        </div>
                    </form>
                </div>

                {/* Sign Up Option */}
                <div className="flex text-xl text-gray-100 flex-col items-start mr-10 mt-5">
                    <p className="ml-10 mt-5 text-sm">
                        New To Luqma-E-Barkat?
                        <Link to="/signup" className="ml-2">
                            <span className="text-orange-300 hover:text-orange-400">Sign Up</span>
                        </Link>
                    </p>
                </div>
            </div>

            {/* right side image */}
            <div className="w-[70%] min-h-screen">
                <img className="h-full w-full object-cover" src="./Images/LogInPage.jpg" alt="Food Sharing" />
            </div>
        </div>
    );
}

export default LogInForm;
