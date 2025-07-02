import axios from "axios";
import React, { useState } from "react";


const OtpVerificationModal = ({ email, onClose, onOtpVerified }) => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    //backend server url
    const BASE_URL = 'http://localhost:3000/api';

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!otp.trim || otp.length !== 6 || !/^\d+$/.test(otp)) {
            setError("Please enter a valid 6-digit OTP");
            return;
            //check
        }

        setLoading(true);

        try {
            const response = await axios.post(`${BASE_URL}/users/verify-otp`, {
                email,
                otp,
            });

            setMessage(response.data.message || "Otp verified Successfully!");

            setTimeout(()=>{
                onOtpVerified();
            },500)
        } catch (err) {
            console.error("OTP verification error:",err);
            if (err.response && err.response.data && err.response.data.message){
                setError(err.response.data.message);
            } else{
                setError("An error occurred during OTP verification.");
            }
        }finally{
          setLoading(false);
        }
        
    };

    return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-700 p-6 rounded-lg shadow-xl w-full max-w-sm border border-gray-600">
        <h2 className="text-xl font-bold text-white mb-4 text-center">Verify Your Email</h2>
        <p className="text-gray-300 text-sm mb-4 text-center">
          An OTP has been sent to <span className="font-semibold text-yellow-300">{email}</span>. Please enter it below to verify your account.
        </p>

        <form onSubmit={handleOtpSubmit} className="space-y-4">
          <div>
            <label htmlFor="otp" className="sr-only">OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="Enter 6-digit OTP"
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
            />
            {error && <p className="text-red-800 text-xs mt-1">{error}</p>}
            {message && <p className="text-green-400 text-xs mt-1">{message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full text-gray-400 hover:text-white transition-colors text-sm"
          disabled={loading}
        >
          Close
        </button>
      </div>
    </div>
  );

};

export default OtpVerificationModal;