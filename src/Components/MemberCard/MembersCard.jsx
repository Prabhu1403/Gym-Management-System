import React from 'react'
import gym3 from '../../images/gym3.jpeg'
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from 'react-router-dom';
const MembeCard = () => {
  return (
    <>
   
        <Link to={'/userdetails/123'}  className="bg-white transform  hover:scale-45 h-fit  border-2 hover:text-white border-gray-300 rounded-md p-3 hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            <div className="w-[100px] relative h-[100px] border-4 flex justify-center items-center p-1 mx-auto border-gray-300 rounded-full ">
              <img
                src={gym3}
                alt=""
                className=" w-full h-full rounded-full object-cover "
              />
              <CircleIcon className="text-green-800 absolute top-0 left-0" />
            </div>
            <div className="mx-auto text-center  font-bold text-xl md:text-[30px] lg:text-xl capitalize mt-3 font-mono">
              {"shubam kumar"}
            </div>
            <div className="mx-auto text-center   text-[18px] md:text-[30px] lg:text-[18px]  capitalize mt-2 font-mono ">
              {"+91 " + " 9087654356"}
            </div>
            <div className="mx-auto text-center  text-[18px] md:text-[30px] lg:text-[18px] capitalize mt-2 font-mono ">
              expire date : {"30-12-2025"}
            </div>
          </Link>
     
    
    </>
  )
}

export default MembeCard