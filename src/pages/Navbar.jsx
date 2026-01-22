import {useState}from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { Link,useLocation,useNavigate } from 'react-router-dom';
import gymlogo from '../images/gymlogo.jpg'

const Navbar = () => {
    let navigate=useNavigate()
    let Location=useLocation()
    let handleLogOut=()=>{
   sessionStorage.clear();
   navigate('/')
}

const [click, setClick] = useState(false)
  return (
    <>
      <div className={`w-full  lg:hidden  lg:h-screen relative ${Location.pathname=='/'?'hidden':'block'}`}>
        <div className="w-full flex items-center  justify-between h-fit p-3 bg-slate-900 rounded">
          <div className="text-white text-[30px] md:text-[40px] cursor-pointer" onClick={()=>{setClick((preVal)=>!preVal)}}>
            <GiHamburgerMenu />
          </div>
          <div className="w-full h-fit text-center  text-white">
            <p className="text-[30px] md:text-[40px] capitalize font-extralight">
             <span className="text-orange-700 font-serif">muscle</span>  factory
            </p>
          </div>

          <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
            <img src={`${gymlogo}`}  alt="" className="object-contain w-full h-full select-none rounded-xl" style={{imageRendering:"auto"}}/>
          </div>
        </div>
        {click ? (<section className="py-7 px-4 bg-slate-950 w-full mt-[10px] border-gray-700 border-t-[4px] transition-all duration-300">
          <Link
            to={"/dashboard"}
            className={`flex items-center gap-5 bg-slate-500 p-2 rounded text-xl md:text-[30px] lg:text-xl font-semibold mb-7 cursor-pointer  ${
              Location.pathname === "/dashboard"
                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-[3px]"
                : null
            }`}
          >
            <i>
              <AiFillHome />
            </i>
            <h3>Dashboard</h3>
          </Link>

          <Link
            to={"members"}
            className={`flex items-center gap-5 bg-slate-500 p-2 rounded text-xl text-xl md:text-[30px] lg:text-xl font-semibold mb-7 cursor-pointer  ${
              Location.pathname === "/members"
                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-[3px]"
                : null
            }`}
          >
            <i>
              <FaUserGroup />
            </i>
            <h3>Members</h3>
          </Link>

          <div
            onClick={() => {
              handleLogOut();
            }}
            className="flex items-center gap-5 bg-slate-500 p-2 rounded text-xl text-xl md:text-[30px] lg:text-xl font-semibold cursor-pointer hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:border-[3px]"
          >
            <i>
              <FiLogOut />
            </i>
            <h3>LogOut</h3>
          </div>
        </section>):null}
        
      </div>
    </>
  );
};

export default Navbar;
