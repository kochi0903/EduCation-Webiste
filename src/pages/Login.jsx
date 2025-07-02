import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    // State to control the fade-in animation
    const [showForm, setShowForm] = useState(false);

    // Define the inline styles for the background image as a JavaScript object
    const backgroundStyle = {
        backgroundImage: 'url("https://cdn.wallpapersafari.com/48/65/oynO57.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    // Trigger the fade-in animation after the component mounts
    useEffect(() => {
        // A small delay makes the animation more noticeable after page load
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 100); // 100ms delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            {/* Custom CSS for fade-in animation */}
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                `}
            </style>

            <div className="flex items-center justify-center min-h-screen w-full" style={backgroundStyle}>
                {/* Login Form Container - Added animate-fadeIn class controlled by showForm state */}
                <div className={`bg-white bg-opacity-30 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl w-11/12 max-w-md border border-white border-opacity-40 transition-opacity transform ${showForm ? 'animate-fadeIn' : 'opacity-0'}`}>
                    {/* Changed title to match reference image and increased font size/weight */}
                    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-8 text-center drop-shadow-lg">Login To Continue</h2>

                    <form>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-900 text-sm font-medium mb-2 drop-shadow-sm">Email</label>
                            <input type="email" id="email" name="email" placeholder="user@example.com"
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder-gray-600 transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.005]"
                                required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-900 text-sm font-medium mb-2 drop-shadow-sm">Password</label>
                            <input type="password" id="password" name="password" placeholder="********"
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder-gray-600 transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.005]"
                                required />
                        </div>

                        {/* Styled button to match the yellow/gold theme of the reference image */}
                        <button type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-gray-900 font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg mt-4">
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-gray-900 hover:underline text-sm font-medium transition duration-300 ease-in-out drop-shadow-sm hover:text-yellow-600">Forgot Password?</a>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-gray-900 text-sm drop-shadow-sm">Already have an account?
                            <a href="#" className="text-yellow-400 hover:underline font-medium transition duration-300 ease-in-out hover:text-yellow-500" onClick={() => handleNavigate('/register')}> Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm