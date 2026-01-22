import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const ForgotPassword = ({ click }) => {
  const [otpField, setOtpField] = useState(false);
  const [newPassword, setNewPassword] = useState(false)
  const [changeContent, setChangeContent] = useState("Get OTP")
  function otpValidate(params) {
    if (!otpField) {
        setOtpField((currVal) => !currVal);
        setChangeContent("Submit OTP")
    }
    else if(otpField){
        setNewPassword(currVal=>!currVal)
        setChangeContent("Reset Password")
    }
   
  }
  return (
    <>
      <div className="w-full  h-fit flex justify-center fixed  top-[200px] left-0  lg:top-[200px]">
        <section className="  bg-slate-100 w-full p-5  lg:w-1/3  md:w-2/3 ">
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-[22px] font-semibold">Forgot Password</h1>
            </div>
            <div
              className="flex font-[20px] items-center"
              onClick={() => click()}
            >
              <RxCross2 className="h-[25px] w-[25px]" />
            </div>
          </header>

          <main>
            <input
              type="email"
              className="w-2/3 p-[7px] outline-none rounded text-lg mb-10"
              placeholder="Enter Email"
            />

          {otpField &&  <input
              type="number"
              className="w-2/3 p-[7px] outline-none rounded text-lg mb-10"
              placeholder="Enter OTP"
            />} 

           {newPassword &&  <input
              type="password"
              className="w-2/3 p-[7px] outline-none rounded text-lg mb-10"
              placeholder="Enter NewPassword"
            />} 

            <div
              className=" w-2/3 mx-auto mb-10 bg-slate-900 text-white text-center p-[7px] rounded text-[20px] font-semibold hover:bg-white hover:text-slate-800 cursor-pointer"
              onClick={otpValidate}
            >
              {changeContent}
            </div>
          </main>
        </section>
      </div>
    </>
  );
};

export default ForgotPassword;
