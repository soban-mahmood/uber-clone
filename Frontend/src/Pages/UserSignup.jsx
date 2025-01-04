import React, { useState } from "react";
import logo from "../assets/uber-driver.svg";
import { Link } from "react-router-dom";
const UserSignup = () => {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [firstname,setFirstname] = useState('')
const [lastname,setLastname] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitHandler")
    console.log(email,password,firstname,lastname)
  }
  
  return (
    <div className="p-7 flex justify-between flex-col h-screen">
      <div>
        <img src={logo} alt="Uber" className="w-20 mb-2  " />
        <form action="" onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-4">What's your's Name</h3>
          <div className="flex gap-4">
          <input
            type="text"
            placeholder="First name"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            autoComplete="off"
            className="w-full mb-5 p-2  bg-[#eeeeee] border-gray-300 rounded-lg text-lg placeholder:text-sm"
          />  <input
          type="text"
          placeholder="Last name"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
          autoComplete="off"
          className="w-full mb-5 p-2  bg-[#eeeeee] border-gray-300 rounded-lg text-lg placeholder:text-sm"
        />
          </div>
          <h3 className="text-base font-medium mb-2">What's your's email?</h3>
          <input
            type="text"
            placeholder="email@example.com"
            name="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
            className="w-full mb-5 p-2  bg-[#eeeeee] border-gray-300 rounded-lg text-lg placeholder:text-sm"
          />
          <h3 className="text-base font-medium mb-2
          ">Enter Password</h3>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3  mb-5 bg-[#eeeeee] border-gray-300 rounded-lg text-lg placeholder:text-sm"
          />
          <button className=" w-full bg-black text-white py-3 rounded-lg mt-3 flex justify-center items-center">
            Login
          </button>
          <p className=" text-center mt-4">
        Already have an account?
            <Link to="/login" className=" text-blue-600">
             Login here
            </Link>
          </p>
        </form>
      </div>
      <div className="text-center">
      <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
