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

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number is invalid";
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registered");
      // setIsRegistered(true);
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setPassword('');
    }
  };

  console.log("Errors:", errors)

  return (
    <>

      <div className="registerContainer  flex justify-evenly items-center pt-10 space-x-3 relative bg-[url('src/assets/background.png')] bg-cover bg-no-repeat bg-[center_40%]">
        <div className="left h-[35rem] w-1/2 flex justify-center items-center">
          <div className="pic w-full h-full flex items-center justify-center">
            {/* <img
              className='w-full h-full object-contain object-center rounded-[3rem]'
              src="src/assets/Register.png"
              alt="Group Meeting"
            /> */}
          </div>
        </div>
        <div className="right w-[33rem] h-[25rem] rounded-2xl flex flex-col justify-center items-center p-3  bg-gray-300 bg-opacity-50 border-2 border-gray-600">
          <div className="account text-3xl font-bold  mb-2">Join With Us</div>
          <form onSubmit={handleSubmit}>
            <div className="top flex space-x-10 mt-2">
              {/* Name Field */}
              <div className={`name flex flex-col mt-3`}>Full Name
                <input type="text"
                  placeholder='Ishita Dey'
                  name="fullname"
                  className={`p-1 mt-3 rounded-sm border  hover:shadow-lg transition-shadow duration-200 ${errors.fullName ? 'border-red-500' : 'border-transparent'
                    }  text-base pl-3
                hover:border-gray-600`}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && (
                  <p className='text-red-400 text-xs mt-1 mb-0'>{errors.fullName}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="email flex flex-col mt-3">Email
                <input type="email"
                  placeholder='user@example.com'
                  className={`p-1 mt-3 rounded-sm pl-3 border
                     hover:shadow-xl shadow-gray-600 transition-shadow duration-200 ${errors.email ? 'border-red-500' : 'border-transparent'
                    }
                hover:border-gray-600`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className='text-red-400 text-xs mt-1 mb-0'>{errors.email}</p>
                )}

              </div>


            </div>
            <div className="bottom flex space-x-10 mt-3">
              {/* Phone Number */}
              <div className="phone flex flex-col mt-3">Phone Number
                <input type="tel"
                  placeholder='91*******90'
                  className={`p-1 mt-3 rounded-sm pl-3 border
                    hover:shadow-lg transition-shadow duration-200
                  ${errors.phoneNumber ? 'border-red-500' : 'border-transparent'
                    }
                  hover:border-gray-600`}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && (
                  <p className='text-red-400 text-xs mt-1 mb-0'>{errors.phoneNumber}</p>
                )}

              </div>

              {/* Password */}
              <div className="password flex flex-col mt-3">Password
                <input type="password"
                  placeholder='******'
                  className={`p-1 mt-3 rounded-sm pl-3 border
                     hover:shadow-lg transition-shadow duration-200
                  ${errors.password ? 'border-red-500' : 'border-transparent'
                    }
                  hover:border-gray-600`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className='text-red-400 text-xs mt-1 mb-0'>{errors.password}</p>
                )}
              </div>
            </div>

            <div className="submit flex justify-center items-center">
              <input type="submit"
              className=' mt-12 w-60 h-10 bg-yellow-400 flex justify-center align-center rounded-full 
              hover:bg-yellow-500
              active:bg-yellow-300
              active:border border-yellow-600' />
            </div>
          </form>
        </div>

      </div>

    </>
  )
}

export default Register
