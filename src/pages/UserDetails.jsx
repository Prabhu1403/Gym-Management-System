import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import logo from "../images/gym2.jpg";
import Switch from "react-switch";
const UserDetails = () => {
  let navigate = useNavigate();
  const [status, setStatus] = useState("Inactive");
  const [renew, setRenew] = useState(false);
  let handleStatus = () => {
    let state = status === "Active" ? "Inactive" : "Active";
    setStatus(state);
    setRenew(true);
  };
  return (
    <>
      <div className="lg:w-3/4 w-full overflow-hidden h-[100%] p-6">
        <section
          onClick={() => {
            navigate(-1);
          }}
          className="bg-slate-950 md:text-[25px] text-[20px] lg:text-[15px] flex items-center cursor-pointer  text-white  p-2 rounded-lg w-fit "
        >
          <KeyboardBackspaceIcon /> GoBack
        </section>

        <section className="mt-[40px] flex gap-5 flex-col md:flex-col lg:flex-row items-center md:justify-center  justify-start">
          <div className="lg:w-1/4 w-2/3 md:w-1/3  h-[360px] ">
            <img
              src={`${logo}`}
              alt=""
              className="lg:w-full md:w-full  h-full object-cover rounded-md"
            />
          </div>
          <div className="text-[20px]  capitalize font-semibold ">
            <div>
              <p className="mt-2 mb-2">Name : Prabhu</p>
              <p className="mt-2 mb-2">mobile : +91 8148571453</p>
              <p className="mt-2 mb-2">address : Uthukuli,Tiruppur</p>
              <p className="mb-2 mt-2">joined date : 01/01/2026</p>
              <p className="mb-2 mt-2">next bill date : 01/02/2026</p>
            </div>

            <div className="flex gap-3 ">
              <p>status : </p>
              <Switch
                onColor="#6366f1"
                checked={status === "Active"}
                onChange={() => {
                  handleStatus();
                }}
              />
            </div>

            <div
              className={`mt-4 w-full text-center text-[25px] md:text-[30px] lg:text-[20px] border-[3px] rounded-md border-black p-[5px] mx-auto hover:text-white hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600  cursor-pointer ${
                renew && status === "Active"
                  ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white"
                  : null
              }`}
            >
              renew
            </div>
          </div>
        </section>

        {
          renew && status === "Active" ? (
            <div className="lg:w-[50%] w-full h-fit rounded md:w-full mx-auto bg-slate-50 text-center p-5 mt-[30px] ">
          <div className="w-full  ">
            <div className="mb-5 text-[25px] mx-auto md:text-[25px] lg:text-[20px] ">Membership</div>
            <select
              name=""
              id=""
              className="w-full md:w-[50%] lg:w-full md:text-[20px] lg:text-[18px] text-[20px] p-2 rounded-md border-2 border-black capitalize"
            >
              <option value="1" className=""> 1 month plan </option>
              <option value="2">2 month plan </option>
              <option value="3">3 month plan </option>
              <option value="6">6 month plan </option>
            </select>
          </div>
          <div className="mt-4 w-[50%] text-center lg:text-[17px] md:text-[25px] text-[20px] capitalize font-semibold  border-[3px] rounded-md p-[5px] mx-auto text-white  bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600  cursor-pointer">
        save
        </div>
        </div>):null
        }

        
      </div>
    </>
  );
};

export default UserDetails;
