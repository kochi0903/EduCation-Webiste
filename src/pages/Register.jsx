import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OtpVerificationModal from '../components/modals/OtpVerificationModal';
import toast from 'react-hot-toast'; 

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOtpModal, setShowOtpModal]= useState(false);
    const [otpEmail, setOtpEmail] = useState('');
    const [loading,setLoading] = useState(false)

    const navigate= useNavigate();

    const BASE_URL = 'http://localhost:3000/api';

    const handleSubmit =async (e) => {
        e.preventDefault();
        const newErrors = {};
        setLoading(true);

        if (!firstName.trim()) {
            newErrors.firstName = 'First name is required'
        }

        if (!lastName.trim()) {
            newErrors.lastName = 'Last name is required'
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is not correct.';
        }

        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required.";
        } else if (phoneNumber.length !== 10) {
            newErrors.phoneNumber = "Phone number is invalid";
        } else if (!/^\d+$/.test(phoneNumber)) {
            newErrors.phoneNumber = "Phone number must contain only digits.";
        }

        if (!password) {
            newErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm the Password again'
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = 'The passwords are not the same'
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response= await axios.post(`${BASE_URL}/users/register`,{
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    password,
                    confirmPassword
                });

                // Show success toast ONLY after successful API response
                toast.success(response.data.message || "Successfully Registered! Check your email for OTP.");

                console.log("Registration Succesful:", response.data);

                setOtpEmail(email);
                setShowOtpModal(true);

                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setPassword('');
                setConfirmPassword('');
                setErrors({}); 

            } catch (error) {
                console.error("Registration Error:", error);
                let errorMessage = "An unexpected error occurred during registration.";
                if(error.response && error.response.data && error.response.data.message){
                    errorMessage = `Error: ${error.response.data.message}`;
                }
                toast.error(errorMessage);
            } finally{
                setLoading(false);
            }

        }else{
            // If frontend validation fails, also stop loading and do not show success toast
            setLoading(false);
            toast.error("Please correct the form errors."); 
        }
    };

    const handleOtpVerified= ()=>{
        setShowOtpModal(false);
        toast.success("Email verified successfully! You are now logged in."); 
        navigate('/'); //the main page route to be placed when ready
    }

    const handleCloseOtpModal= ()=>{
        setShowOtpModal(false);
    };


    return (
        <>
            <div className="registerContainer min-h-screen flex justify-center items-center p-4 bg-[url('src/assets/register.jpg')] bg-cover bg-no-repeat bg-center">
                {/* Left side - hidden on mobile */}
                <div className="hidden lg:flex lg:w-1/2 lg:h-[35rem] justify-center items-center">
                    {/* You can add content here if needed */}
                </div>

                {/* Right side - Registration form */}
                {/* Added backdrop-blur-md for blurred background effect */}
                <div className="w-full max-w-2xl lg:w-[33rem] bg-gray-500 bg-opacity-50 backdrop-blur-md border-2 border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6">Join With Us</h1>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-2'>

                        {/* Name Fields Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
                            {/* First Name Field */}
                            <div className="flex flex-col">
                                <label className="text-white font-bold mb-2">First Name</label>
                                <input
                                    type="text"
                                    placeholder='John'
                                    name="firstName"
                                    className={`w-full mt-3 rounded-sm font-thin bg-transparent text-white placeholder-gray-300 text-base pl-3 focus:outline-none transition-shadow duration-200
                    ${errors.firstName
                                        ? 'border-b-2 border-b-red-500 border-transparent'
                                        : 'border-2 border-transparent border-b-white hover:shadow-lg hover:border-b-white focus:border-b-yellow-300'
                                    }`}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {errors.firstName && (
                                    <p className='text-red-400 text-xs mt-1'>{errors.firstName}</p>
                                )}
                            </div>

                            {/* Last Name Field */}
                            <div className="flex flex-col">
                                <label className="text-white font-bold mb-2">Last Name</label>
                                <input
                                    type="text"
                                    placeholder='Doe'
                                    name="lastName"
                                    className={`w-full mt-3 rounded-sm font-thin bg-transparent text-white placeholder-gray-300 text-base pl-3 focus:outline-none transition-shadow duration-200
                    ${errors.lastName
                                        ? 'border-b-2 border-b-red-500 border-transparent'
                                        : 'border-2 border-transparent border-b-gray-300 hover:shadow-lg hover:border-b-white focus:border-b-yellow-300'
                                    }`}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {errors.lastName && (
                                    <p className='text-red-400 text-xs mt-1'>{errors.lastName}</p>
                                )}
                            </div>
                        </div>

                        {/* Email and Phone Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mt-2">
                            {/* Email Field */}
                            <div className="flex flex-col">
                                <label className="text-white font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder='user@example.com'
                                    className={`w-full mt-3 rounded-sm pl-3 font-thin bg-transparent text-white placeholder-gray-300 focus:outline-none transition-shadow duration-200
                    ${errors.email
                                        ? 'border-b-2 border-b-red-500 border-transparent'
                                        : 'border-2 border-transparent border-b-gray-300 hover:shadow-xl shadow-gray-600 hover:border-b-white focus:border-b-yellow-300'
                                    }`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && (
                                    <p className='text-red-400 text-xs mt-1'>{errors.email}</p>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col">
                                <label className="text-white font-bold mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder='91*******90'
                                    className={`w-full mt-3 rounded-sm pl-3 font-thin bg-transparent text-white placeholder-gray-300 focus:outline-none transition-shadow duration-200
                    ${errors.phoneNumber
                                        ? 'border-b-2 border-b-red-500 border-transparent'
                                        : 'border-2 border-transparent border-b-gray-300 hover:shadow-lg hover:border-b-white focus:border-b-yellow-300'
                                    }`}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                {errors.phoneNumber && (
                                    <p className='text-red-400 text-xs mt-1'>{errors.phoneNumber}</p>
                                )}
                            </div>
                        </div>

                        {/* Password Fields Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mt-3">
                            {/* Password */}
                            <div className="flex flex-col">
                                <label className="text-white font-bold mb-2">Password</label>
                                <input
                                    type="password"
                                    placeholder='******'
                                    className={`w-full mt-3 rounded-sm font-thin bg-transparent text-white placeholder-gray-300 focus:outline-none transition-shadow duration-200
                    ${errors.password
                                        ? 'border-b-2 border-b-red-500 border-transparent'
                                        : 'border-2 border-transparent border-b-gray-300 hover:shadow-lg hover:border-b-white focus:border-b-yellow-300'
                                    }`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && (
                                    <p className='text-red-400 text-xs mt-1'>{errors.password}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col">
                                <label className="text-white font-bold mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder='******'
                                    className={`w-full mt-3 rounded-sm pl-3 font-thin bg-transparent text-white placeholder-gray-300 focus:outline-none transition-shadow duration-200
                    ${errors.confirmPassword
                                        ? 'border-b-2 border-b-red-500 border-transparent'
                                        : 'border-2 border-transparent border-b-gray-300 hover:shadow-lg hover:border-b-white focus:border-b-yellow-300'
                                    }`}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {errors.confirmPassword && (
                                    <p className='text-red-400 text-xs mt-1'>{errors.confirmPassword}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-2">
                            <input
                                type="submit"
                                value={loading ? 'Signing Up...' : 'Sign Up'}
                                className='w-full sm:w-60 h-10 bg-yellow-400 flex justify-center items-center rounded-full font-semibold
                                hover:bg-yellow-500 active:bg-yellow-300 active:border border-yellow-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' disabled= {loading}/>
                        </div>

                        {/* Links */}
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-2 text-xs">
                            <a href="#" className='text-yellow-400 hover:text-yellow-600 focus:text-white transition-colors duration-200'>
                                Privacy Policy
                            </a>
                            <a href="#" className='text-yellow-400 hover:text-yellow-600 focus:text-white transition-colors duration-200'>
                                Terms & Conditions
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            {/* OTP Verification Modal */}
            {showOtpModal && (
                <OtpVerificationModal
                    email= {otpEmail}
                    onClose={handleCloseOtpModal}
                    onOtpVerified={handleOtpVerified}
                />
            )}
        </>
    )
}

export default Register;
