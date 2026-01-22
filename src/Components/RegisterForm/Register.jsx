import React from "react";
import { useState } from "react";
import "./Register.css";
import ForgotPassword from "../ForgotPass/ForgotPassword";

const Register = ({setHandleForms}) => {
  const [handleForgotPage, sethandleForgotPage] = useState(false);
  const [handleInput, setHandleInput] = useState({
    email: "",
    userName: "",
    password: "",
    gymName: "",
    profilePic:
      "https:images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });

  function handleclick(params) {
    sethandleForgotPage((preVal) => !preVal);
  }

  let handleChange = (e) => {
    let { value, name } = e.target;
    setHandleInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const uplodeImage = async (e) => {
    const files = e.target.files[0];
    console.log(files);

    const data = new FormData();
    console.log(data);
    data.append("file", files);
    data.append("upload_preset", "gym-management");
    try {
      const responce = await fetch(
        "https://api.cloudinary.com/v1_1/dt7sye93e/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const resData = await responce.json();
      const imgUrl = resData.url;
      setHandleInput({ ...handleInput, ["profilePic"]: imgUrl });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
     
        <div className=" RegisterForm lg:w-[400px] md:w-[400px] md:mx-auto  w-full p-8 h-[450px] lg:mt-[0px] rounded  shadow  bg-opacity-50  bg-gray-50 overflow-y-auto ">
          <div className="font-sans font-medium text-3xl text-white text-center   ">
            Register Your Gym
          </div>

          <input
            type="email"
            className="w-full p-[7px] outline-none rounded text-lg my-10"
            placeholder="Enter Email"
            value={handleInput.email}
            name="email"
            onChange={handleChange}
          />

          <input
            type="text"
            className="w-full p-[7px] outline-none rounded text-lg mb-10"
            placeholder="Enter Gym Name"
            value={handleInput.gymName}
            name="gymName"
            onChange={handleChange}
          />

          <input
            type="text"
            className="w-full p-[7px] outline-none rounded text-lg mb-10"
            placeholder="Enter userName"
            value={handleInput.userName}
            name="userName"
            onChange={handleChange}
          />

          <input
            type="password"
            className="w-full p-[7px] outline-none rounded text-lg mb-10"
            placeholder="Enter Password"
            value={handleInput.password}
            name="password"
            onChange={handleChange}
          />

          <input
            type="file"
            className=" w-full  outline-none rounded text-lg mb-2"
            onChange={(e) => {
              uplodeImage(e);
            }}
          />

          <img
            src={handleInput.profilePic}
            className="w-[250px] h-[200px] object-contain mb-10  rounded"
          />

          <div className=" mb-10 bg-slate-900 text-white text-center p-[7px] rounded text-[20px] font-semibold hover:bg-white hover:text-slate-800 cursor-pointer">
            Register
          </div>

          <div
            className="bg-slate-900 text-white text-center p-[7px] rounded text-[20px] font-semibold hover:bg-white hover:text-slate-800 cursor-pointer"
            onClick={() => {
              return handleclick();
            }}
          >
            Forgot Password
          </div>

          <div className="text-center mt-7 text-slate-900 capitalize text-[18px] font-semibold">
            <p>
              you have an account ?
              <span
                onClick={()=>{setHandleForms((prev)=>!prev)}}
                className="hover:underline cursor-pointer text-blue-800 "
              >
                Login
              </span>
            </p>
          </div>
        </div>
     

      {handleForgotPage && <ForgotPassword click={handleclick} />}
    </>
  );
};

export default Register;
