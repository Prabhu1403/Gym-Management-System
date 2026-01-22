import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setHandleForms}) => {

 let navigate = useNavigate() 

 function handleLogin(params) {
    sessionStorage.setItem("isLogin",true)
    navigate("/dashboard")
 }


 const [handleInput, setHandleInput] = useState({userName:"",password:""})

 let handleChange=(e)=> {
   let {value,name}=e.target

   setHandleInput((prev)=>({
     ...prev,
     [name]:value
   }))
   
   
 }


 
  return (
    <>
   
      <div className="w-full md:w-[400px] md:mx-auto lg:w-[400px] p-8 lg:mt-[0px] h-fit  rounded  shadow  bg-opacity-50  bg-gray-50 ">
            <div className="font-sans font-medium text-3xl text-white text-center  ">
              Login Form
            </div>

            <input
              type="text"
              className="w-full p-[7px] outline-none rounded text-lg my-10"
              placeholder="Enter userName"
              onChange={ handleChange}
              value={handleInput.userName}
              name='userName'
            />

            <input
              type="password"
              className="w-full p-[7px] outline-none rounded text-lg mb-10 "
              placeholder="Password"
               onChange={ handleChange}
              value={handleInput.password}
              name='password'
            />

            <div className="bg-slate-900 mb-7 text-white text-center p-[7px] rounded text-[20px] font-semibold hover:bg-white hover:text-slate-800 cursor-pointer " onClick={()=>{handleLogin()}}>
              Login
            </div>

            <div className='text-center text-slate-900 capitalize text-[18px] font-semibold'>
               <p>Dont have an account ? 
                <span onClick={()=>{setHandleForms((prev)=>!prev)}} className='hover:underline cursor-pointer text-blue-800 '>register</span></p>
            </div>
          </div>
    </> 
  )
}

export default Login

