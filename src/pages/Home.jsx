import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import picture from '../assests/picture.jpg'


const Home = () => {
  const menus = [
    { name: "Stake", link: "/Stake", icon: MdOutlineDashboard },
    { name: "Discover", link: "/Discover", icon: AiOutlineUser },
    { name: "Play", link: "/Play", icon: TbReportAnalytics  },
    { name: "Chat", link: "/Chat", icon: FiMessageSquare},
    { name: "Me", link: "/Me", icon: FiFolder },
   
  ];
  const [open, setOpen] = useState(false);
  return (
    <div>
    <div className="flex justify-between">
    <div className="w-20 h-full">
    
      <div
        className={`bg-[#2a2727] bg-opacity-70 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-white px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            // onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-yellow-900 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      </div>
      {/* header */}
      <div className="w-full mt-5 mr-3">
      <div className="flex flex-row-reverse gap-1 sm:gap-5">
      <Link to="/SignIn">
        <button className="text-xs px-1 py-1 hover:bg-yellow-900 text-orange-500  bg-transparent text-orange-500-500 font-semibold sm:py-2 sm:px-4 border border-orange-500 rounded ">Sign In</button></Link>
        <Link to="/SignUp">
        <button className="text-xs px-1 py-1 hover:bg-yellow-900 text-orange-500  bg-transparent text-orange-500-500 font-semibold sm:py-2 sm:px-4 border border-orange-500 rounded">Sign Up</button></Link>
      </div>
        {/* //body */}
      <div className=" flex mt-2 flex-col">
      <div className="text-white">
      Up Next
      </div>
       <div className="bg-[#292828] rounded-2xl divide-gray-500 divide-y-2 ">
       <div className="rounded-tl-2xl border-l-8 border-l-pink-700 ">
       <div className="flex px-4 py-4 sm:px-10">
        <img className="w-8 h-8" src={picture}/>
        <div className="flex flex-col px-3 text-white">
          <p className="text-gray-600 font-bold text-xs flex items-center">MADDEN NFL 24</p>
          <p className="text-white font-extrabold sm:text-sm">1V1 REGULAR TEAM</p>
          <p className="text-gray-600 font-bold text-xs flex items-center">BEST OF 1. MOST POINTS IN QTRS</p>
        </div>
       </div>
       </div>
       <div className="flex flex-col px-6 py-4">
        <p>09:00 PM - OCTOBAR 30</p>
        <div>
          hllo
        </div>
       </div>
            
       </div>
      </div>
     
      </div>
      
     
      </div>
    </div>
  );
};

export default Home;
