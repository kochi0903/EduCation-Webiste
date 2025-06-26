import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};


    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last is required'
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
      console.log("Registered");
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  console.log("Errors:", errors)

  return (
    <>

      <div className="registerContainer  flex justify-evenly items-center pt-10 space-x-3 relative bg-[url('src/assets/bg.jpg')] bg-cover bg-no-repeat bg-[center_40%]">
        <div className="left h-[35rem] w-1/2 flex justify-center items-center">

        </div>
        <div className="right w-[33rem] h-[30rem] rounded-2xl flex flex-col justify-center items-center p-3  bg-gray-500 bg-opacity-50 border-2 border-gray-200 mt-3">
          <div className="account text-3xl font-extrabold text-white mb-2">Join With Us</div>
          <form onSubmit={handleSubmit}>
            <div className="top flex space-x-10 mt-2">
              {/*First Name Field */}
              <div className={`name flex flex-col text-white font-bold mt-3`}>First Name
                <input type="text"
                  placeholder='Ishita'
                  name="firstName"
                  className={` mt-3 rounded-sm border  hover:shadow-lg transition-shadow duration-200 font-thin bg-transparent border-b-white text-white
                    placeholder-gray-300
                    ${errors.firstName ? 'border-b-red-500' : 'border-transparent'
                    }  text-base pl-3
                hover:border-b-white
                  focus:border-b-yellow-300 border-2
                  focus:outline-none`}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && (
                  <p className='text-red-400 text-xs mt-1 mb-0'>{errors.firstName}</p>
                )}
              </div>

              {/*Last Name Field */}
              <div className={`name flex flex-col text-white font-bold mt-3`}>Last Name
                <input type="text"
                  placeholder='Dey'
                  name="lastName"
                  className={`mt-3 rounded-sm border  hover:shadow-lg transition-shadow duration-200 font-thin bg-transparent border-b-gray-300 text-white
                    placeholder-gray-300
                    ${errors.lastName ? 'border-b-red-500' : 'border-transparent'
                    }  text-base pl-3
                hover:border-b-white
                  focus:border-b-yellow-300 border-2
                  focus:outline-none`}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && (
                  <p className='text-red-400 text-xs mt-1 mb-0'>{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="mid flex space-x-10 mt-2">

              {/* Email Field */}
              <div className="email flex flex-col text-white font-bold mt-3">Email
                <input type="email"
                  placeholder='user@example.com'
                  className={` mt-3 rounded-sm pl-3 border
                     hover:shadow-xl shadow-gray-600 transition-shadow duration-200
                     font-thin bg-transparent border-b-gray-300 text-white 
                    placeholder-gray-300
                     ${errors.email ? 'border-b-red-500' : 'border-transparent'
                    }
                hover:border-b-white
                  focus:border-b-yellow-300 border-2
                  focus:outline-none`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className='text-red-400 text-xs mt-1 mb-0'>{errors.email}</p>
                )}

              </div>




              {/* Phone Number */}
              <div className="phone flex flex-col text-white font-bold mt-3">Phone Number
                <input type="tel"
                  placeholder='91*******90'
                  className={` mt-3 rounded-sm pl-3 border
                    hover:shadow-lg transition-shadow duration-200 font-thin bg-transparent border-b-gray-300 text-white
                    placeholder-gray-300
                  ${errors.phoneNumber ? 'border-b-red-500' : 'border-transparent'
                    }
                  hover:border-b-white
                  focus:border-b-yellow-300 border-2
                  focus:outline-none`}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && (
                  <p className='text-red-400 text-xs mt-1 mb-0'>{errors.phoneNumber}</p>
                )}

              </div>

            </div>

            <div className="bottom flex space-x-10 mt-3">

              {/* Password */}
              <div className="password flex flex-col text-white font-bold mt-3">Password
                <input type="password"
                  placeholder='******'
                  className={`mt-3 rounded-sm pl-3 border
                     hover:shadow-lg transition-shadow duration-200 font-thin bg-transparent border-b-gray-300 text-white
                    placeholder-gray-300
                  ${errors.password ? 'border-b-red-500' : 'border-transparent'
                    }
                  hover:border-b-white
                  focus:border-b-yellow-300 border-2
                  focus:outline-none`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className='text-red-400 text-xs mt-1 mb-0'>{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="password flex flex-col text-white font-bold mt-3">Confirm Password
                <input type="password"
                  placeholder='******'
                  className={`mt-3 rounded-sm pl-3 border
                     hover:shadow-lg transition-shadow duration-200 font-thin bg-transparent border-b-gray-300 text-white
                    placeholder-gray-300
                  ${errors.password ? 'border-b-red-500' : 'border-transparent'
                    }
                  hover:border-b-white
                  focus:border-b-yellow-300 border-2
                  focus:outline-none`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <p className='text-red-400 text-xs mt-1 mb-0'>{errors.confirmPassword}</p>
                )}
              </div>


            </div>

            <div className="submit flex justify-center items-center">
              <input type="submit"
                value="Sign Up"
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
