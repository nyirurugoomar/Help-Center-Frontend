import React,{ useState } from "react";
import {NavLink} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import google from "./assets/google.svg";
import facebook from "./assets/facebook.svg";
import Dashboard from "./Dashboard";

// import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);
  const navlink = NavLink
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleLoginDialog = () => {
    setLoginDialog(!loginDialog);
  };

  const handleLogin=()=>{
       if(email === "user@gmail.com" && password ==="password"){
         navlink.push(<Dashboard/>);
       }else{
        // Handle login failure (e.g., show an error message)
       }
  }

  return (
    <div className="flex justify-between items-center h-20  px-10 bg-[#1B1464] ">
      {/* <h1 className='w-40'><img src={logo} alt=''/></h1> */}
      <h1 className="text-white font-bold text-[20px]">Logo|Help Center</h1>
      <ul className="hidden md:flex">
        {/* <NavLink to="/home"> */}
        <li className="p-4 text-20 text-white hover:text-blue cursor-pointer">
          Partner
        </li>
        {/* </NavLink> */}
        {/* <NavLink to="/about" > */}
        <li className="p-4 text-20 text-white hover:text-blue cursor-pointer">
          Contact
        </li>
        {/* </NavLink> */}
        {/* <NavLink to="services"> */}
        <li className="p-4 text-20 text-white hover:text-blue cursor-pointer flex">
          English <IoIosArrowDown size={17} className="mt-1" />
        </li>

        {/* </NavLink> */}

        {/* <NavLink to="/contact"> */}
        <li className="p-2 text-20 text-[#1B1464] hover:text-black cursor-pointer mt-auto">
          <button
            className="rounded-2xl bg-white w-24 h-9"
            onClick={toggleLoginDialog}
          >
            Login
          </button>
        </li>
        {/* pop up box */}

        {loginDialog && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg w-[655px] h-[569px]">
              <RxCross1
                className="block ml-auto cursor-pointer"
                size={30}
                onClick={toggleLoginDialog}
              />
              <div className="text-center mt-6">
                <h1 className="text-[30px] font-bold">Welcome Back</h1>
                <p className="text-[#94a3b8] text-[23px]">
                  Please enter your details to sign in
                </p>
              </div>

              <div className="  mx-32 ">
                <div className="flex gap-10 mt-6 ">
                  <button className="flex border-[1px] border-black  rounded-[9px]  w-[10rem] p-2  ">
                    <img
                      src={google}
                      className="w-[40px] h-[40px]"
                      alt="google_icon"
                    />
                    <p className="font-bold text-center mt-[3px] text-[20px]">
                      Google
                    </p>
                  </button>
                  <button className="flex border-[1px] border-black  rounded-[9px]  w-[10rem] p-2  ">
                    <img
                      src={facebook}
                      className="w-[56px] h-[40px]"
                      alt="facebook_icon"
                    />
                    <p className="font-bold text-center mt-[3px] text-[20px]">
                      Facebook
                    </p>
                  </button>
                </div>
              </div>
              <div className="mx-20 mt-8 space-y-4">
                <div className="">
                  <h1 className="font-bold text-[20px]">Email</h1>
                  <input
                    type="email"
                    name=""
                    id=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-[1px] w-[470px] h-[45px] border-black rounded-[9px] p-2"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="">
                  <h1 className="font-bold text-[20px]">Password</h1>
                  <input
                    type="password"
                    name=""
                    id=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-[1px] w-[470px] h-[45px] border-black rounded-[9px] p-2"
                    placeholder="Enter your password"
                  />
                  <div className="text-right">
                    <h1 className="text-[#1B1464] font-bold ">
                      Forget Password
                    </h1>
                  </div>
                </div>
              </div>

              <div className="text-center p-4">
                <button className="bg-[#1B1464] p-4 w-[419px] rounded-[9px] text-white font-bold" onClick={handleLogin}>
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden mx-28">
        {nav ? (
          <AiOutlineClose size={30} color={"white"} />
        ) : (
          <AiOutlineMenu size={30} color={"white"} />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#1B1464] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%] "
        }
      >
        {/* <h1 className='w-24 '><img src={logo} alt=''/></h1> */}
        <h1 className="text-white mb-20 mt-10 ml-4">logo|help center</h1>
        {/* <NavLink to="/home"> */}
        <li className="p-4 border-b border-white text-white">Partner</li>
        {/* </NavLink> */}
        {/* <NavLink to="/work"> */}
        <li className="p-4 border-b border-white text-white">Contact</li>
        {/* </NavLink> */}
        {/* <NavLink to="/work"> */}
        <li className="p-4 border-b border-white text-white">English</li>
        {/* </NavLink> */}
        <li className="p-4 border-b border-white text-white"></li>
        <li className="p-2 text-20 text-[#1B1464] hover:text-black cursor-pointer">
          <button className="rounded-2xl bg-white w-24 h-9">Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
