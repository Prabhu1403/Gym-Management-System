import { React, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import emptyLogo from "../../images/empty.png";
import axios from "axios";

const AddMembers = ({ setAddMembers }) => {
  const [handleInput, setHandleInput] = useState({
    name: "",
    number: "",
    address: "",
    userName: "",
    "join date": "",
    profilePic: `${emptyLogo}`,
  });
  function click() {
    setAddMembers((preVal) => !preVal);
  }

  let handleChange = (e) => {
    let { value, name } = e.target;
    setHandleInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
//cloud naryimage handle
const handleImage = async (e) => {
    const files = e.target.files[0];
    console.log(files);
    const data = new FormData();
    console.log(data);
    data.append("file", files);
    data.append("upload_preset", "gym-management");
    try {
      let responce = await axios.post(
        "https://api.cloudinary.com/v1_1/dt7sye93e/image/upload",
        data
      );
      let imgUrl = responce.data.url;
      setHandleInput({ ...handleInput, ["profilePic"]: imgUrl });
    } catch (err) {
      console.error(err);
    }
  };

  
  return (
    <>
      <section className="lg:w-2/3 w-full absolute top-[90px] left-0 bg-white p-5 text-black ">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-[30px] md:text-[35px] lg:text-[22px] font-semibold">Add New Members</h1>
          </div>
          <div
            className="flex font-[20px] items-center"
            onClick={() => click()}
          >
            <RxCross2 className=" lg:h-[25px] lg:w-[25px] h-[35px] w-[35px] " />
          </div>
        </header>

        <main className="w-full ">
          <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
            <input
              onChange={handleChange}
              value={handleInput.name}
              name="name"
              type="text"
              placeholder="Name of The Joinee"
              className=" lg:h-12  h-17 text-[25px] lg:text-[18px] border-2  border-gray-300  p-2 rounded-lg"
            />
            <input
              onChange={handleChange}
              value={handleInput.number}
              name="number"
              type="number"
              placeholder="Mobile Number"
              className="lg:h-12  h-17 text-[25px] lg:text-[18px] border-2 border-gray-300  p-2 rounded-lg"
            />
            <input
              onChange={handleChange}
              value={handleInput.address}
              name="address"
              type="text"
              placeholder="Enter Address"
              className=" lg:h-12  h-17 text-[25px] lg:text-[18px]  border-2 bo rder-gray-300  p-2 rounded-lg"
            />
            <input
              onChange={handleChange}
              value={handleInput["join date"]}
              type="date"
              className=" lg:h-12  h-17 text-[25px] lg:text-[18px] border-2 border-gray-300  p-2 rounded-lg"
            />
            <select
              name=""
              id=""
              className="lg:h-12  h-17 text-[25px] lg:text-[18px] border-2 border-gray-300  p-2 rounded-lg "
            >
              <option value=""> 1 Month MemberShip</option>
              <option value=""> 2 Month MemberShip</option>
              <option value=""> 3 Month MemberShip</option>
              <option value=""> 4 Month MemberShip</option>
              <option value=""> 6 Month MemberShip</option>
            </select>
            <input
              type="file"
              onChange={(e) => {
                handleImage(e);
              }}
              className="  lg:h-12  h-17 text-[25px] lg:text-[18px]  p-2 rounded-lg"
            />
          </div>

          <div className="lg:w-1/4 md:w-1/4 md:mx-0 w-2/4 mx-auto lg:mx-0 h-[200px] mt-[20px]  ">
            <img
              src={handleInput.profilePic}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>

          <div className="lg:w-[150px] w-[200px]  text-center mx-auto">
            <button className="w-full p-2 bg-black text-white rounded-lg lg:text-[20px] text-[30px]  font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 hover:text-white">
              Register
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default AddMembers;
