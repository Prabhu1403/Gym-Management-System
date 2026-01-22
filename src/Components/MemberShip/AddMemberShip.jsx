import React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AddMembership = ({setMemberShip}) => {
    function click(params) {
           setMemberShip(preVal=>!preVal )
    }

     const [handleInput, setHandleInput] = useState({
         name:"",
         price:""
      })

     let handleChange=(e)=>{
     let {value,name}=e.target
      setHandleInput((prev)=>({
        ...prev,
        [name]:value
      }))
  }
  return (
    <>
     
        <section className="  bg-white  lg:w-2/3 w-full  absolute top-[90px] left-0 z-30 p-5 mx-auto ">
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-[25px] md:text-[35px] lg:text-[22px] font-semibold">Add MemberShip</h1>
            </div>
            <div
              className="flex font-[20px] items-center"
              onClick={() => click()}
            >
              <RxCross2 className="lg:h-[25px] lg:w-[25px] md:h-[35px] md:w-[35px] h-[25px] w-[25px] " />
            </div>
          </header>

          <main className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-center font-semibold" >
             <div className="bg-black text-white text-[18px] md:text-[25px] lg:text-[15px] p-3 rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600">
                <h2>1 Month MemberShip</h2>
                <h3>Rs 1000</h3>
             </div>

              <div className="bg-black text-white text-[18px] md:text-[25px] lg:text-[15px]  p-3  rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600">
                <h2>2 Month MemberShip</h2>
                <h3>Rs 1800</h3>
             </div>

              <div className="bg-black text-white text-[18px] md:text-[25px] lg:text-[15px]  p-3   rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600">
                <h2>3 Month MemberShip</h2>
                <h3>Rs 2600</h3>
             </div>

             <div className="bg-black text-white  text-[18px] md:text-[25px] lg:text-[15px] p-3 rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600">
                <h2>4 Month MemberShip</h2>
                <h3>Rs 4000</h3>
             </div>

             <div className="bg-black text-white text-[18px] md:text-[25px] lg:text-[15px] p-3 rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600">
                <h2>6 Month MemberShip</h2>
                 <h3>Rs 6000</h3>
             </div>
          </main>
         
          
          <footer className="mt-[30px] w-full gap-[30px] p-9 lg:mt-[50px] lg:pt-[50px] lg:mb-[50px] flex flex-col justify-center lg:gap-[40px] items-center border-t-4 ">
          <div className="flex md:flex-row md:justify-around flex-col  items-center gap-6 w-full">
              <input type="text" placeholder="Add Name" value={handleInput.name} name="name" onChange={handleChange} className=" lg:h-10 text-[18px] md:h-17 md:text-[25px] lg:text-[16px] border-2 border-gray-300  p-2 rounded-lg" />
            <input type="number" placeholder="Price" value={handleInput.price} name="price" onChange={handleChange} className=" lg:h-10 text-[18px] md:h-17 md:text-[25px] lg:text-[16px] border-2 border-gray-300  p-2 rounded-lg" />
          </div> 
            <div >
             <button className=" border-2 border-gray-300 outline-none p-1 rounded-lg text-[20px] w-[100px] md:text-[30px] md:w-[150px] lg:w-[100px] lg:text-[20px] font-mono hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 hover:text-white">Add</button>
            </div>
            
          </footer>
         </section>
     
    </>
  );
};

export default AddMembership;



