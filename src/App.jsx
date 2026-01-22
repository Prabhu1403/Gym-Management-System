import React, { useEffect,useState } from "react";
import Home from "./pages/Home";
import { Routes, Route,useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import Members from "./pages/Members";
import GeneralUsers from "./pages/GeneralUsers";
import UserDetails from "./pages/UserDetails";
import Navbar from "./pages/Navbar";
import Register from "./Components/RegisterForm/Register";
import Login from "./Components/Login";

const App = () => {

  const [isLogin, setIsLogin] = useState(false)
  let navigate =useNavigate()
 
  useEffect(()=>{
    let logedIn=sessionStorage.getItem("isLogin")
    if (logedIn) {
        setIsLogin(true)
        //navigate("/dashboard")
    }
    else{
      setIsLogin(false)
      navigate('/')
    }
   
  },[sessionStorage.getItem("isLogin")])
  return (
    <>
    
      <div className="flex w-full  lg:flex-row flex-col rounded">
        <Navbar/>
        {
        isLogin && <Sidebar/>
        }
           
          <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members/>}/>
          <Route path="/Specify/:section" element={<GeneralUsers/>}/>
          <Route path="/userdetails/:id" element={<UserDetails/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    
        
      </div>
    </>
  );
};

export default App;
