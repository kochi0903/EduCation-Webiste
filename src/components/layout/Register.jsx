import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  // const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};


    if (!fullName.trim()) {
      newErrors.fullName = 'Name is required'
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
    }

    if(!phoneNumber.trim()){
      newErrors.phoneNumber= "Phone number is required.";
    }else if(phoneNumber.length!==10){
      newErrors.phoneNumber="Phone number is invalid";
    }

     if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length===0){
      console.log("Registered");
      // setIsRegistered(true);
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setPassword('');
    }
  };

  console.log("Errors:",errors)

  return (
    <>
      
        <div className="registerContainer bg-gradient-to-b from-slate-300 to-slate-100 flex justify-evenly items-center pt-10 space-x-3 relative">
          <div className="left h-[35rem] w-1/2 flex justify-center items-center">
            <div className="pic w-full h-full flex items-center justify-center">
              <img
                className='w-full h-full object-contain object-center rounded-[3rem]'
                src="src/assets/Register.png"
                alt="Group Meeting"
              />
            </div>
          </div>
          <div className="right w-[45rem] flex flex-col justify-center items-center p-3">
            <div className="account text-3xl font-bold  mb-2">Join With Us</div>
            <form onSubmit={handleSubmit}>

              {/* Name Field */}
              <div className={`name flex flex-col mt-3`}>Full Name
                <input type="text"
                  placeholder='Ishita Dey'
                  name="fullname"
                  className={`p-1 mt-3 rounded-xl border  hover:shadow-lg transition-shadow duration-200 ${
                  errors.fullName ? 'border-red-500' : 'border-transparent'
                }  text-base pl-3
                hover:border-gray-400`}
                  value={fullName}
                  onChange={(e)=> setFullName(e.target.value)}
                   />
                   {errors.fullName &&(
                    <p className='text-red-400 text-xs mt-1 mb-0'>{errors.fullName}</p>
                   )}
              </div>

              {/* Email Field */}
              <div className="email flex flex-col mt-3">Email
                <input type="email"
                  placeholder='user@example.com'
                  className={`p-1 mt-3 rounded-xl pl-3 border
                     hover:shadow-lg transition-shadow duration-200 ${
                  errors.email ? 'border-red-500' : 'border-transparent'
                }
                hover:border-gray-400`} 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                {errors.email &&(
                    <p className='text-red-400 text-xs mt-1 mb-0'>{errors.email}</p>
                 )}

              </div>

              {/* Phone Number */}
              <div className="phone flex flex-col mt-3">Phone Number
                <input type="tel"
                  placeholder='91*******90'
                  className={`p-1 mt-3 rounded-xl pl-3 border
                    hover:shadow-lg transition-shadow duration-200
                  ${
                    errors.phoneNumber ? 'border-red-500' : 'border-transparent'
                  }
                  hover:border-gray-400`}
                  value={phoneNumber}
                  onChange={(e)=> setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber &&(
                    <p className='text-red-400 text-xs mt-1 mb-0'>{errors.phoneNumber}</p>
                 )}

              </div>

              {/* Password */}
              <div className="password flex flex-col mt-3">Password
                <input type="password"
                  placeholder='******'
                  className={`p-1 mt-3 rounded-xl pl-3 border
                     hover:shadow-lg transition-shadow duration-200
                  ${
                    errors.password ? 'border-red-500' : 'border-transparent'
                  }
                  hover:border-gray-400`}
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                {errors.password &&(
                    <p className='text-red-400 text-xs mt-1 mb-0'>{errors.password}</p>
                 )}
              </div>


              <div className="submit mt-12 p-3 bg-yellow-400 flex justify-center align-center rounded-full">
                <input type="submit" />
              </div>
            </form>
          </div>
         
        </div>
      
    </>
  )
}

export default Register
