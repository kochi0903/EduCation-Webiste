import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors]= useState('');
    const [message, setMessage]=useState('');
    const [loading,setLoading] = useState(false);

    const navigate = useNavigate();

     const BASE_URL = 'http://localhost:3000/api';

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

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newErrors= {};
        setMessage('');
        setLoading(true);

        if(!email.trim()){
            newErrors.email='Email is required';
        }else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email= 'Email address is invalid';
        }

        if(!password) {
            newErrors.password='Password is required';
        }else if(password.length < 6){
            newErrors.password = 'Password must be at least 6 characters.';
        }

        setErrors(newErrors);

        if(Object.keys(newErrors).length===0){
            try {
                const response = await axios.post(`${BASE_URL}/users/login`,{
                    email,
                    password
                },{
                    withCredentials: true
                });

                console.log("Login Succesful: ",response.data);
                setMessage(response.data.message|| "Login Successful!");

                setEmail('');
                setPassword('');
                setErrors({});

                setTimeout(()=>{
                    navigate('/'); //mainpage route when ready
                },2000);

            } catch (error) {
                console.error("Login Error: ",error);
                if(error.response && error.response.data && error.response.data.message){
                    setMessage(`Error : ${error.response.data.message}`);
                }else{
                    setMessage("An unexpected error occured during login.");
                }
            } finally{
                setLoading(false);
            }
        }else{
            setLoading(false);
        }
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

                    {/* {General Message} */}
                    {message && (
                        <p className={`text-center font-semibold ${message.startsWith('Error')? 'text-red-700' : 'text-green-600'} text-sm mb-4`}>
                        {message}
                        </p>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-900 text-sm font-medium mb-2 drop-shadow-sm">Email</label>
                            <input type="email"
                             id="email"
                             name="email"
                             placeholder="user@example.com"
                             className="w-full px-4 py-3 rounded-lg bg-gray-100 bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder-gray-600 transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.005]"
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}  
                             required />
                             {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-900 text-sm font-medium mb-2 drop-shadow-sm">Password</label>
                            <input type="password" id="password" name="password" placeholder="********"
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder-gray-600 transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.005]"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                required />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* Styled button to match the yellow/gold theme of the reference image */}
                        <button type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-gray-900 font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}>
                                {loading ? 'Logging in...' : 'Login'}
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