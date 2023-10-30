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
  
  return (
    <div>
    <div className="flex justify-center sm:justify-start">
    {/* navbar */}
    <div className="flex flex-col-reverse items-center h-full fixed sm:flex-row ">
    
      <div
        className="bg-[#2a2727] bg-opacity-70 min-w-screen h-16 sm:h-16 sm:min-h-screen
        duration-500 text-white px-4 mb-0"
      >
        
       
        <div className="mt-4 flex flex-row gap-6  relative sm:flex-col">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-yellow-900 rounded-md"
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              
              <h2
                className=" absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:py-2 group-hover:px-1 group-hover:right-14 sm:group-hover:left-14 group-hover:duration-300 group-hover:w-fit "
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      </div>
      {/* navbar */}
      {/* header */}
      <div className="w-full mt-5 mr-3">
      <div className="flex flex-row-reverse gap-1 sm:gap-5">
      <Link to="/SignIn">
        <button className="text-xs px-1 py-1 hover:bg-yellow-900 text-orange-500  bg-transparent text-orange-500-500 font-semibold sm:py-2 sm:px-4 border border-orange-500 rounded ">Sign In</button></Link>
        <Link to="/SignUp">
        <button className="text-xs px-1 py-1 hover:bg-yellow-900 text-orange-500  bg-transparent text-orange-500-500 font-semibold sm:py-2 sm:px-4 border border-orange-500 rounded">Sign Up</button></Link>
      </div>
        {/* //body */}
      <div className=" flex mt-2 flex-col ml-3 sm:ml-20">
      <div className="text-white py-2">
      Up Next
      </div>
       <div className="bg-[#292828] rounded-2xl divide-gray-500 divide-y-2 ">
       <div className="rounded-tl-2xl border-l-8 border-l-pink-700 hover:bg-gray-600 hover:bg-opacity-20 ">
       <div className="flex px-4 py-4 sm:px-10">
        <img className="w-8 h-8" src={picture}/>
        <div className="flex flex-col px-3 text-white">
          <p className="text-gray-500 font-bold text-xs flex items-center">MADDEN NFL 24</p>
          <p className="text-white font-extrabold sm:text-sm">1V1 REGULAR TEAM</p>
          <p className="text-gray-500 font-bold text-xs flex items-center">BEST OF 1. MOST POINTS IN QTRS</p>
        </div>
       </div>
       </div>
       <div className="flex flex-col px-6 py-4">
        <p className="text-gray-500 font-bold text-xs flex items-center">09:00 PM - OCTOBAR 30</p>

        <div className="flex justify-between flex-wrap p-4 gap-2 hover:bg-gray-600 hover:bg-opacity-20 ">
         <div className="flex">
          <img className="w-10 h-10 p-1 items-center" src={picture}/>
          <div className="flex flex-col p-1">
          <p className="text-white font-extrabold p-1 sm:text-sm">MILK2wavvy11223</p>
          <p className="bg-red-800 text-white rounded-xl px-0 py-1 text-xs w-14 flex items-center justify-center">CHIEFS</p>
          </div>
         </div>
         <div className="flex flex-col justify-center items-center">
         <p className="text-white font-bold text-sm  ">LAST 5</p>
         <p className="text-yellow-400 font-bold">W W  W W <span className="text-red-600">L</span></p></div>
         

         <div className="text-white font-bold text-sm flex flex-col justify-center items-center">
         <p>WIN %</p>
         <p>56%</p></div>
         <div className="flex flex-col justify-center items-center">
         <p className="text-gray-500 font-bold text-sm">STAKE & WIN</p>
         <h1 className="text-green-500 font-extrabold text-xl">1.5X</h1></div>

        </div>
         {/* mnmnm */}
      <div className="flex justify-between flex-wrap p-4 hover:bg-gray-600 hover:bg-opacity-20">
        
        <div className="flex">
         <img className="w-10 h-10 p-1 items-center" src={picture}/>
         <div className="flex flex-col p-1">
         <p className="text-white font-extrabold p-1 sm:text-sm">MECLAMPSEASON</p>
         <p className="bg-green-800 text-white rounded-xl px-0 py-1 text-xs w-10 flex items-center justify-center">JETS</p>
         </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <p className="text-white font-bold text-sm ">LAST 5</p>
        <p className="text-yellow-400 font-bold">W W <span className="text-red-600">L</span> W W</p></div>
        

        <div className="text-white font-bold text-sm flex flex-col justify-center items-center">
        <p>WIN %</p>
        <p>63%</p></div>
        <div className="flex flex-col justify-center items-center">
        <p className="text-gray-500 font-bold text-sm">STAKE & WIN</p>
        <h1 className="text-green-500 font-extrabold text-xl">1.94X</h1></div>

       </div>
      </div>
      
           
      </div>
   
       </div>
       {/* more */}
      
       <div className=" flex mt-2 flex-col ml-3 sm:ml-20">
      <div className="text-white py-2">
      Later Today
      </div>
       <div className="bg-[#292828] rounded-2xl divide-gray-500 divide-y-2 ">
       <div className="rounded-tl-2xl border-l-8 border-l-orange-700 hover:bg-gray-600 hover:bg-opacity-20 ">
       <div className="flex px-4 py-4 sm:px-10">
        <img className="w-8 h-8" src={picture}/>
        <div className="flex flex-col px-3 text-white">
          <p className="text-gray-500 font-bold text-xs flex items-center">MADDEN NFL 24</p>
          <p className="text-white font-extrabold sm:text-sm">1V1 REGULAR TEAM</p>
          <p className="text-gray-500 font-bold text-xs flex items-center">BEST OF 1. MOST POINTS IN QTRS</p>
        </div>
       </div>
       </div>
       <div className="flex flex-col px-6 py-4">
        <p className="text-red-500 font-bold text-xs flex items-center">10:00 PM - SEPTEMBER 30</p>

        <div className="flex justify-between flex-wrap p-4 gap-2 hover:bg-gray-600 hover:bg-opacity-20">
         <div className="flex">
          <img className="w-10 h-10 p-1 items-center" src={picture}/>
          <div className="flex flex-col p-1">
          <p className="text-white font-extrabold p-1 sm:text-sm">YOUNGSOLT1923</p>
          <p className="bg-blue-800 text-white rounded-xl px-0 py-1 text-xs w-14 flex items-center justify-center">EAGLES</p>
          </div>
         </div>
         <div className="flex flex-col justify-center items-center">
         <p className="text-white font-bold text-sm ">LAST 5</p>
         <p className="text-yellow-400 font-bold">W <span className="text-red-600">L</span> W W W</p></div>
         

         <div className="text-white font-bold text-sm flex flex-col justify-center items-center">
         <p>WIN %</p>
         <p>89%</p></div>
         <div className="flex flex-col justify-center items-center">
         <p className="text-gray-500 font-bold text-sm">STAKE & WIN</p>
         <h1 className="text-green-500 font-extrabold text-xl">2.5X</h1></div>

        </div>
         {/* mnmnm */}
      <div className="flex justify-between flex-wrap p-4 hover:bg-gray-600 hover:bg-opacity-20">
        
        <div className="flex">
         <img className="w-10 h-10 p-1 items-center" src={picture}/>
         <div className="flex flex-col p-1">
         <p className="text-white font-extrabold p-1 sm:text-sm">Ready1298982hy</p>
         <p className="bg-amber-700 text-white rounded-xl px-0 py-1 text-xs w-10 flex items-center justify-center">AIR</p>
         </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <p className="text-white font-bold text-sm ">LAST 5</p>
        <p className="text-yellow-400 font-bold">W W <span className="text-red-600">L</span> W W</p></div>
        

        <div className="text-white font-bold text-sm flex flex-col justify-center items-center">
        <p>WIN %</p>
        <p>20%</p></div>
        <div className="flex flex-col justify-center items-center">
        <p className="text-gray-500 font-bold text-sm">STAKE & WIN</p>
        <h1 className="text-red-500 font-extrabold text-xl">1.04X</h1></div>

       </div>
      </div>
      
           
      </div>
   
       </div>
      {/* more */}
      <div className=" flex mt-2 flex-col ml-3 sm:ml-20">
      <div className="text-white py-2">
      Tommorow
      </div>
       <div className="bg-[#292828] rounded-2xl divide-gray-500 divide-y-2 ">
       <div className="rounded-tl-2xl border-l-8 border-l-yellow-400 hover:bg-gray-600 hover:bg-opacity-20">
       <div className="flex px-4 py-4 sm:px-10">
        <img className="w-8 h-8" src={picture}/>
        <div className="flex flex-col px-3 text-white">
          <p className="text-gray-500 font-bold text-xs flex items-center">MADDEN NFL 24</p>
          <p className="text-white font-extrabold sm:text-sm">1V1 REGULAR TEAM</p>
          <p className="text-gray-500 font-bold text-xs flex items-center">BEST OF 1. MOST POINTS IN QTRS</p>
        </div>
       </div>
       </div>
       <div className="flex flex-col px-6 py-4">
        <p className="text-gray-500 font-bold text-xs flex items-center">09:00 PM - OCTOBAR 30</p>

        <div className="flex justify-between flex-wrap p-4 gap-2 hover:bg-gray-600 hover:bg-opacity-20">
         <div className="flex">
          <img className="w-10 h-10 p-1 items-center" src={picture}/>
          <div className="flex flex-col p-1">
          <p className="text-white font-extrabold p-1 sm:text-sm">MECLAMPSEASON</p>
          <p className="bg-teal-400 text-white rounded-xl px-0 py-1 text-xs w-10 flex items-center justify-center">JETS</p>
          </div>
         </div>
         <div className="flex flex-col justify-center items-center">
         <p className="text-white font-bold text-sm ">LAST 5</p>
         <p className="text-red-600 font-bold">L L <span className="text-yellow-400">W</span> L L</p></div>
         

         <div className="text-white font-bold text-sm flex flex-col justify-center items-center">
         <p>WIN %</p>
         <p>63%</p></div>
         <div className="flex flex-col justify-center items-center">
         <p className="text-gray-500 font-bold text-sm">STAKE & WIN</p>
         <h1 className="text-green-500 font-extrabold text-xl">1.94X</h1></div>

        </div>
         {/* mnmnm */}
      <div className="flex justify-between flex-wrap p-4 hover:bg-gray-600 hover:bg-opacity-20">
        
        <div className="flex">
         <img className="w-10 h-10 p-1 items-center" src={picture}/>
         <div className="flex flex-col p-1">
         <p className="text-white font-extrabold p-1 sm:text-sm">MECLAMPSEASON</p>
         <p className="bg-indigo-800 text-white rounded-xl px-0 py-1 text-xs w-10 flex items-center justify-center">JETS</p>
         </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <p className="text-white font-bold text-sm ">LAST 5</p>
        <p className="text-yellow-400 font-bold">W W <span className="text-red-600">L</span> W W</p></div>
        

        <div className="text-white font-bold text-sm flex flex-col justify-center items-center">
        <p>WIN %</p>
        <p>63%</p></div>
        <div className="flex flex-col justify-center items-center">
        <p className="text-gray-500 font-bold text-sm">STAKE & WIN</p>
        <h1 className="text-red-500 font-extrabold text-xl">1.94X</h1></div>

       </div>
      </div>
      
           
      </div>
   
       </div>
       {/* more */}
       <div className=" flex mt-2 flex-col ml-3 sm:ml-20">
      
      
       <div className="bg-[#292828] rounded-2xl divide-gray-500 divide-y-2 mt-5 ">
       <div className="rounded-tl-2xl border-l-8 border-l-teal-700 hover:bg-gray-600 hover:bg-opacity-20 ">
       <div className="flex px-4 py-4 sm:px-10">
        <img className="w-8 h-8" src={picture}/>
        <div className="flex flex-col px-3 text-white">
          <p className="text-gray-500 font-bold text-xs flex items-center">MADDEN NFL 24</p>
          <p className="text-white font-extrabold sm:text-sm">1V1 REGULAR TEAM</p>
          <p className="text-gray-500 font-bold text-xs flex items-center">BEST OF 1. MOST POINTS IN QTRS</p>
        </div>
       </div>
       </div>
       <div className="flex flex-col px-6 py-4">
        <p className="text-green-500 font-bold text-xs flex items-center">09:00 PM - OCTOBAR 30</p>

        <div className="flex justify-between flex-wrap p-4 gap-2 hover:bg-gray-600 hover:bg-opacity-20">
         <div className="flex">
          <img className="w-10 h-10 p-1 items-center" src={picture}/>
          <div className="flex flex-col p-1">
          <p className="text-white font-extrabold p-1 sm:text-sm">MECLAMPSEASON</p>
          <p className="bg-yellow-800 text-white rounded-xl px-0 py-1 text-xs w-10 flex items-center justify-center">JETS</p>
          </div>
         </div>
         <div className="flex flex-col justify-center items-center">
         <p className="text-white font-bold text-sm ">LAST 5</p>
         <p className="text-yellow-400 font-bold">W W <span className="text-red-600">L</span> W W</p></div>
         

         <div className="text-white font-bold text-sm flex flex-col justify-center items-center">
         <p>WIN %</p>
         <p>63%</p></div>
         <div className="flex flex-col justify-center items-center">
         <p className="text-gray-500 font-bold text-sm">STAKE & WIN</p>
         <h1 className="text-green-500 font-extrabold text-xl">1.94X</h1></div>

        </div>
         {/* mnmnm */}
      <div className="flex justify-between flex-wrap p-4 hover:bg-gray-600 hover:bg-opacity-20">
        
        <div className="flex">
         <img className="w-10 h-10 p-1 items-center" src={picture}/>
         <div className="flex flex-col p-1">
         <p className="text-white font-extrabold p-1 sm:text-sm">MECLAMPSEASON</p>
         <p className="bg-green-800 text-white rounded-xl px-0 py-1 text-xs w-10 flex items-center justify-center">JETS</p>
         </div>
        </div>
         <div className="flex flex-col justify-center items-center">
        
        <p className="text-white font-bold text-sm ">LAST 5</p>
        <p className="text-yellow-400 font-bold">W W <span className="text-red-600">L</span> W W</p></div>
        

        <div className="text-white font-bold text-sm flex flex-col justify-center items-center">
        <p>WIN %</p>
        <p>63%</p></div>
        <div className="flex flex-col justify-center items-center">
        <p className="text-gray-500 font-bold text-sm">STAKE & WIN</p>
        <h1 className="text-green-500 font-extrabold text-xl">1.94X</h1></div>

       </div>
      </div>
      
           
      </div>
   
       </div>
       {/* more */}
       
            
       </div>
      </div>
      
      
     
      </div>
     
      
  );
};

export default Home;
