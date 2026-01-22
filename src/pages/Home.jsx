import { React, useState } from "react";
import logo1 from "../images/Gym1.jpg";
import lodo2 from "../images/Gym2.jpg";
import Login from "../Components/Login";
import Register from "../Components/RegisterForm/Register";
import ForgotPassword from "../Components/ForgotPass/ForgotPassword";
const Home = () => {
  const [handleForms, setHandleForms] = useState(false);

  return (
    <>
      <div className="h-[100vh] w-full ">
        <section className="bg-slate-700 p-7 sm:p-6 flex items-center w-full sticky top-0 left-0 ">
          <div className="text-white font-sans font-semibold text-xl sm:text-xl md:text-2xl">
            Welcome To Gym Management System
          </div>
        </section>

        <section
          className="min-h-screen bg-center flex items-center justify-center w-full bg-slate-900 p-4 bg-cover  "
          style={{ backgroundImage: `url(${logo1})` }}
        >
          <div className="lg:flex-row flex flex-col lg:gap-24 w-full   gap-[30px] px-4 justify-around   ">
            {handleForms === false ? (
              <Login setHandleForms={setHandleForms} />
            ) : (
              <Register setHandleForms={setHandleForms} />
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
