import React, { useState, useRef, useEffect } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AddIcon from "@mui/icons-material/Add";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import MembersCard from "../Components/MemberCard/MembersCard";
import AddMembership from "../Components/MemberShip/AddMembership";
import AddMembers from "../Components/AddMembers/AddMembers";

const Members = () => {
  const [memberShip, setMemberShip] = useState(false);
  const [addMembers, setAddMembers] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(9);
  const [totalPage, seTotalPage] = useState(0);
  const [limit, setLimit] = useState(9);
  const [noOfPage, setNoOfPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);
  function fetchData(params) {
    let totalData = 52;
    seTotalPage(totalData);

    let extraPage = totalData % limit === 0 ? 0 : 1;
    let totalPage = parseInt(totalData / limit) + extraPage;
    setNoOfPage(totalPage);

    if (totalData === 0) {
      setStartPage(-1);
      setEndPage(0);
    } else if (totalData < 10) {
      setStartPage(0);
      setEndPage(totalData);
    }
  }
  function addMembership(params) {
    setMemberShip((preVal) => !preVal);
  }

  function addMember(params) {
    setAddMembers((preVal) => !preVal);
  }

  let previousVal = () => {
    if (currentPage !== 1) {
      let current = currentPage - 1;
      setCurrentPage(current);
      let startFrom = (current - 1) * 9;
      let endFrom = current * 9;
      setStartPage(startFrom);
      setEndPage(endFrom);
    }
  };

  let nextVal = () => {
    if (currentPage !== noOfPage) {
      let current = currentPage + 1;
      setCurrentPage(current);
      let startFrom = (current - 1) * 9;
      let endFrom = current * 9;
      if (endFrom > totalPage) {
        endFrom = totalPage;
      }
      setStartPage(startFrom);
      setEndPage(endFrom);
    }
  };

  return (
    <>
      <div className="lg:w-3/4 lg:h-[100vh] w-full p-4 relative">
        <section className="w-full h-fit p-3 bg-slate-900 gap-8 sm:rounded-lg text-white flex flex-col md:flex-row md:justify-between  lg:flex-row lg:justify-between items-center  cursor-pointer">
          <div
            onClick={() => {
              addMember();
            }}
            className="border-[3px] flex items-center gap-3 border-white-950 py-1 px-3 capitalize rounded-2xl cursor-pointer hover:text-black hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 "
          >
            <p className="text-[18px] md:text-[25px] lg:text-[18px] font-semibold"> Add members</p>
            <i className="text-[18px] md:text-[25px] lg:text-[18px]">
              <FitnessCenterIcon />
            </i>
          </div>

          <div
            className="border-[3px] flex items-center gap-3 border-white-950 py-1 px-3 capitalize rounded-2xl cursor-pointer hover:text-black hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600"
            onClick={() => {
              addMembership();
            }}
          >
            <p className="text-[18px] md:text-[25px] lg:text-[18px] font-semibold"> membership</p>
            <i className="text-[18px] md:text-[25px] lg:text-[18px]">
              <AddIcon />
            </i>
          </div>
        </section>

        <Link to={"/dashboard"} className="md:text-[25px] lg:text-[18px]">
          <KeyboardBackspaceIcon />
          Back To Dashboard
        </Link>

        <section className="flex lg:w-1/2 w-full justify-center gap-3 items-center mt-5 ">
          <input
            type="text"
            className="text-[15px] md:text-[25px] lg:text-[15px] p-3 lg:w-3/4 w-2/4 border-gray-400 border outline-none rounded-md  "
          />
          <div className=" border-2 p-3 text-[20px] md:text-[30px] md:p-4 lg:text-[20px] rounded-lg cursor-pointer bg-slate-900 text-white hover:text-black hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 ">
            <IoIosSearch />
          </div>
        </section>

        <section className="w-full text-xl flex flex-col md:flex-row md:text-[25px] lg:text-xl lg:flex-row justify-between items-center mt-[20px]">
          
          <h1 className="">TotalMembers</h1>
          <div className="flex gap-5 items-center  capitalize">
            <h1>
              {startPage + 1}-{endPage} of {totalPage} members
            </h1>
            <div
              className={`p-1 border-2 cursor-pointer hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded flex items-center justify-center hover:text-white ${
                currentPage === 1 ? "bg-slate-300 text-white" : null
              }`}
              onClick={() => {
                previousVal();
              }}
            >
              <MdKeyboardArrowLeft />
            </div>
            <div
              className={`p-1 border-2 cursor-pointer hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded flex items-center justify-center hover:text-white ${
                currentPage === noOfPage ? "bg-slate-300 text-white" : null
              }`}
              onClick={() => {
                nextVal();
              }}
            >
              {" "}
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </section>

        <section className="shadow w-full p-5 bg-gray-100  md:h-[69%] mt-2 rounded-md grid lg:grid-cols-3  gap-3 overflow-y-scroll ">
          <MembersCard />
          <MembersCard />
          <MembersCard/>
          <MembersCard />
          <MembersCard />
          <MembersCard />
          <MembersCard />
          <MembersCard />
          <MembersCard />
        </section>

        {memberShip && <AddMembership setMemberShip={setMemberShip} />}
        {addMembers && <AddMembers setAddMembers={setAddMembers} />}
      </div>
    </>
  );
};

export default Members;
