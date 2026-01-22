import {React,useEffect,useState} from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import MembersCard from "../Components/MemberCard/MembersCard";
const GeneralUsers = () => {
    const [headings, setHeadings] = useState("")

useEffect(()=>{
  let getItem=sessionStorage.getItem("func")
  getData(getItem)
},[])

function getData(value) {
    switch (value) {
        case "Monthly Joined":
            setHeadings("Monthly Joined Members")
            break;

            case "Expire With In 3 Days":
            setHeadings(" Members for with in 3 days expired")
            break;
      
             case "Expire With In 4-7 Days":
            setHeadings("Members for with in 4-7 days expired")
            break;  

             case "Expired":
            setHeadings("Expired Members")
            break;

             case "Inactive Members":
            setHeadings("Inactive Members")
            break;

    
        default:
            setHeadings("")
            break;
    }
}
  return (
    <>
      <div className="lg:w-3/4 h-[100vh] w-full  p-4 relative">
        <section className="w-full h-fit p-3 bg-slate-900 rounded-lg text-white flex justify-between items-center  cursor-pointer">
          <Link
            to={"/dashboard"}
            className="mx-auto md:mx-0 lg:mx-0 border-[3px] flex items-center gap-3 border-white-950 py-1 px-3 capitalize rounded-2xl cursor-pointer hover:text-black hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 "
          >
            <i className="text-[18px]">
              <KeyboardBackspaceIcon />
            </i>
            <p className="lg:text-[18px] md:text-[25px] text-[20px] font-semibold"> Back To Dashboard</p>
          </Link>
        </section>

        <section className="mt-6 mb-6 lg:text-[20px]  md:text-[30px] text-[25px] text-center font-sans ">
           {headings}
        </section>
                <section className="shadow w-full p-5 bg-gray-100 h-[80%] mt-2 rounded-md grid lg:grid-cols-3  gap-3 overflow-y-scroll ">
                 <MembersCard/>
                 <MembersCard/>
                 <MembersCard/>
                 <MembersCard/>
                 <MembersCard/>
                 <MembersCard/>
                 <MembersCard/> 
                 <MembersCard/>
                 <MembersCard/>
                 <MembersCard/>
                </section>
      </div>
    </>
  );
};

export default GeneralUsers;
