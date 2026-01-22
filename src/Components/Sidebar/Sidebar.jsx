import React, { useEffect } from 'react'
import { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { Link,useLocation,useNavigate } from 'react-router-dom';
const Sidebar = () => {
const [greeting, setGreeting] = useState("")

let  Location = useLocation()
let navigate=useNavigate()

function greeetingMessage(params) {
   const currentHour=new Date().getHours();
   if (currentHour<12) {
     setGreeting("Good Morning  ")
   }
   else if(currentHour<16){
      setGreeting("Good AfterNoon")
   }
   else if(currentHour<19){
      setGreeting("Good Evening")
   }
   else{
     setGreeting("Good Night")
   }
  
}

useEffect(()=>{
  greeetingMessage()
},[])

let handleLogOut=()=>{
   sessionStorage.clear();
   navigate('/')
}
  return (
    <>
      <aside className=' w-full hidden lg:block  border-2 p-5 lg:w-1/4 lg:h-[100vh] bg-slate-900 text-white'>
          <section className='w-full h-fit text-center '>
             <p className='text-3xl capitalize font-extralight'><span className='text-orange-700 font-serif'> muscle</span> factory</p>
          </section>

          <section className='w-full flex gap-8 my-6  items-center  h-fit mb-10'>
             <div className='w-[100px] h-[100px] border-[3px] rounded-full  '>
             <img
              src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-contain object-center  rounded-full"
            />
          </div>

          <div className='  h-[100px]' >
             <div>
               <h2 className='text-[22px] font-extralight'>{greeting}</h2>
             </div>
             <div>
               <h1 className='text-[20px] font-semibold'>Admin</h1>
             </div>
          </div>
          </section>
          
          <section className='py-7 border-gray-700 border-t-[4px] transition-all duration-300'>
           <Link to={'/dashboard'} className={`flex items-center gap-5 bg-slate-500 p-2 rounded text-xl font-semibold mb-7 cursor-pointer  ${Location.pathname === '/dashboard'?'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-[3px]':null}`}>
             <i><AiFillHome /></i>
             <h3>Dashboard</h3>
           </Link>

            <Link to={'members'} className={`flex items-center gap-5 bg-slate-500 p-2 rounded text-xl font-semibold mb-7 cursor-pointer  ${Location.pathname === '/members'?'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-[3px]':null}`}>
             <i><FaUserGroup /></i>
             <h3>Members</h3>
           </Link>

            <div onClick={()=>{handleLogOut()}} className='flex items-center gap-5 bg-slate-500 p-2 rounded text-xl font-semibold cursor-pointer hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:border-[3px]'>
             <i><FiLogOut /></i>
             <h3>LogOut</h3>
           </div>
          </section>

      </aside>
    </>
  )
}

export default Sidebar