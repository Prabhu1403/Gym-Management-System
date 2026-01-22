import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { FaSignal } from "react-icons/fa";
import { MdOutlineAccessAlarm } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import { MdReport } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [onclickMenu, setOnclickMenu] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutSide = (e) => {
      if (onclickMenu && ref.current && !ref.current.contains(e.target)) {
        setOnclickMenu(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutSide);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutSide);
    };
  }, [onclickMenu]);

  let handleClick=(value)=>{
    sessionStorage.setItem('func',value)
  }
  return (
    <>
      <div className="w-full md:block  lg:w-3/4 lg:h-screen p-4 relative">
        <section className="w-full h-fit p-3 bg-slate-900 rounded">
          <div className="text-white text-[20px] md:text-[35px] lg:text-[20px] cursor-pointer">
            <GiHamburgerMenu
              onClick={() => {
                setOnclickMenu((prev) => !prev);
              }}
            />
          </div>
        </section>

        {onclickMenu && (
          <div
            ref={ref}
            className="mt-4 capitalize bg-slate-950 p-2 w-1/3 md:w-2/4 lg:w-1/3 absolute top-[50px] rounded text-white md:text-[25px] lg:text-[20px]"
          >
            <p>hi welcome to our gym management system</p>
            <p>feel free to ask any querries</p>
          </div>
        )}

        <section className="mt-7 p-7 w-full h-[80%] grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4  overflow-y-scroll">
          <Link to={'/members'}>
            <div className="  h-fit  border-2 cursor-pointer bg-white rounded-lg  hover:bg-slate-950 hover:text-white ">
              <div className="w-full h-3 rounded-t-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>

              <div className=" w-full flex flex-col items-center">
                <FaUserGroup className="h-[35px] w-[35px] text-green-700 my-7" />

                <p className="text-[23px] md:text-[30px] lg:text-[23px] mb-7 font-semibold">Joined Members</p>
              </div>
            </div>
          </Link>

          <Link to={'/Specify/monthly'} onClick={()=>{handleClick("Monthly Joined")}} className="  h-fit  border-2 cursor-pointer bg-white rounded-lg  hover:bg-slate-950 hover:text-white ">
            <div className="w-full h-3 rounded-t-lg bg-gradient-to-r from-green-600 via-yellow-600 to-pink-600"></div>

            <div className=" w-full flex flex-col items-center">
              <FaSignal className="h-[35px] w-[35px] text-purple-700 my-7" />

              <p className="text-[23px] md:text-[30px] lg:text-[23px]   mb-7 font-semibold">Monthly Joined</p>
            </div>
          </Link>

          <Link to={'/Specify/expired-with-3-days'} onClick={()=>{handleClick("Expire With In 3 Days")}} className="  h-fit  border-2 cursor-pointer bg-white rounded-lg hover:bg-slate-950 hover:text-white   ">
            <div className="w-full h-3 rounded-t-lg bg-gradient-to-r from-red-600 via-blue-600 to-pink-600"></div>

            <div className=" w-full flex flex-col items-center">
              <MdOutlineAccessAlarm className="h-[35px] w-[35px] text-red-600 my-7" />

              <p className="text-[23px] md:text-[30px] lg:text-[23px]  mb-7 font-semibold">
                Expire With In 3 Days
              </p>
            </div>
          </Link>

          <Link to={'/Specify/expired-with-4-7-days'} onClick={()=>{handleClick("Expire With In 4-7 Days")}}
            className="  h-fit  border-2 cursor-pointer bg-white rounded-lg  hover:bg-slate-950 hover:text-white
             "
          >
            <div className="w-full h-3 rounded-t-lg bg-gradient-to-r from-pink-600 via-purple-600 to-red-600"></div>

            <div className=" w-full flex flex-col items-center">
              <MdOutlineAccessAlarm className="h-[35px] w-[35px] text-red-600 my-7" />

              <p className="text-[23px] md:text-[30px] lg:text-[23px]  mb-7 font-semibold">
                Expire With In 4-7 Days
              </p>
            </div>
          </Link>

          <Link to={'/Specify/expired'} onClick={()=>{handleClick("Expired")}} className="  h-fit  border-2 cursor-pointer bg-white rounded-lg  hover:bg-slate-950 hover:text-white ">
            <div className="w-full h-3 rounded-t-lg bg-gradient-to-r from-yellow-600 via-red-600 to-pink-600"></div>

            <div className=" w-full flex flex-col items-center">
              <MdReportGmailerrorred className="h-[35px] w-[35px] text-red-600 my-7" />

              <p className="text-[23px] md:text-[30px] lg:text-[23px]  mb-7 font-semibold">Expired</p>
            </div>
          </Link>

          <Link to={'/Specify/inactive'} onClick={()=>{handleClick("Inactive Members")}} className="  h-fit  border-2 cursor-pointer bg-white rounded-lg  hover:bg-slate-950 hover:text-white ">
            <div className="w-full h-3 rounded-t-lg bg-gradient-to-r from-orange-600 via-indigo-600 to-pink-600"></div>

            <div className=" w-full flex flex-col items-center">
              <MdReport className="h-[35px] w-[35px] text-red-800 my-7" />

              <p className="text-[23px] md:text-[30px] lg:text-[23px]  mb-7 font-semibold">Inactive Members</p>
            </div>
          </Link>
        </section>

        <section className="p-4 bg-slate-950 text-[16px] md:text-[30px]  lg:text-[16px] text-white rounded-md capitalize">
          <p>Contact developer for any technical issue at +918148571453</p>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
