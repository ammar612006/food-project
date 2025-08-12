import React, { useRef, useState } from "react";
export default function OTPVerification() {
   const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if filled
      if (value && index < 3) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const joinedOtp = otp.join("");
    console.log("Submitted OTP:", joinedOtp);
    // send joinedOtp to backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 px-4">
      <div className="bg-green-500 p-8 rounded-xl shadow-xl w-full max-w-md text-white">
        <h2 className="text-2xl font-bold text-center mb-4">OTP Verification</h2>
        <p className="text-center mb-6">Enter the 4-digit code sent to your Phone Number</p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
          <div className="flex space-x-4">
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputs.current[i] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-12 h-12 text-2xl text-center rounded border border-white bg-white text-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            ))}
          </div>

          <p className="text-sm text-center text-gray-200 mb-2">
                Didn't receive the OTP?{" "}
                <button
                    type="button"
                    className="text-white font-semibold hover:underline"
                    onClick={() => alert("OTP resent!")}
                >
                    Resend OTP
                </button>
            </p>

          <button
            type="submit"
            className="bg-white text-green-600 font-bold py-2 px-6 rounded hover:bg-green-200 transition duration-300"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}