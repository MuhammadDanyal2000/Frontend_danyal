import React from 'react'
import Home from './Home'

import R from "../assests/images/R.jpg"
import OIP from "../assests/images/OIP.jpg"
import action6 from "../assests/images/action6.jpg" 
import action5 from "../assests/images/action5.jpg" 
import action11 from "../assests/images/action11.jpg" 
import action9 from "../assests/images/action9.jpg" 
import action1 from "../assests/images/action1.jpg" 
import witcher from "../assests/images/witcher.jpg"
import action3 from "../assests/images/action3.jpg" 
import action4 from "../assests/images/action4.jpg" 
const Stake = () => {
  return (
    <div>
    <div className="flex " >
    <img className="flex items-center absolute justify-center"src={witcher}></img>
    {/* <div className='relative flex items-center justify-center  top-5 sm:top-28 sm:mr-96 '>
    <div className=' text-white text-lg sm:text-3xl tracking-wider font-poppins font-extrabold py-2 px-2 sm:py-7 sm:px-7 '>
      THE ULTIMATE COMPETITIVE GAMING PLATFORM
    </div>
    </div> */}
     </div>
    
     {/* cards */}
   <div className='flex flex-wrap mt-40 px-7 relative sm:mt-96 sm:px-20 '>
   {/* card1 */}
   <div className=' w-1/2 sm:w-1/3 bg-[#0d0d0d] border-purple-800 border-2  '>
   <div className='flex flex-col px-1 py-1 '>
    <img className=""src={action1}></img>
    <div className='text-white'>
    <h1 className=''>GTA 5</h1>
    <p className='text-gray-500 text-xs'>lorem espum lorem espum lorem espum</p>
    </div>
    <div className='text-white flex flex-col justify-between text-xs sm:text-sm py-1 sm:flex-row'>
    <div className='flex flex-row gap-2'>
      <p className='bg-purple-900 rounded p-2'>ADD</p>
      <p className='bg-red-600 rounded p-2'>PLAY</p>
      </div>
      <p className="text-green-500 font-bold text-xs flex items-center">PUBLISHED ON SEPTEMBER 30</p>
    </div>
   </div>
   </div>
   {/* card1 */}
   {/* card2 */}
   <div className=' w-1/2 sm:w-1/3 bg-[#0d0d0d] border-purple-800 border-2    '>
   <div className='flex flex-col px-1 py-1 '>
    <img className=""src={action6}></img>
    <div className='text-white'>
    <h1 className=''>Death Squad</h1>
    <p className='text-gray-500 text-xs'>lorem espum lorem espum lorem espum</p>
    </div>
    <div className='text-white flex flex-col justify-between text-xs sm:text-sm py-1 sm:flex-row'>
    <div className='flex flex-row gap-2'>
      <p className='bg-purple-900 rounded p-2'>ADD</p>
      <p className='bg-red-600 rounded p-2'>PLAY</p>
      </div>
      <p className="text-green-500 font-bold text-xs flex items-center">PUBLISHED ON OCTOBAR 30</p>
    </div>
   </div>
   </div>
   {/* card2 */}

   {/* card3 */}
   <div className=' w-1/2 sm:w-1/3 bg-[#0d0d0d] border-purple-800 border-2   '>
   <div className='flex flex-col px-1 py-1 '>
    <img className=""src={R}></img>
    <div className='text-white'>
    <h1 className=''>Death Squad</h1>
    <p className='text-gray-500 text-xs'>lorem espum lorem espum lorem espum</p>
    </div>
    <div className='text-white flex flex-col justify-between text-xs sm:text-sm py-1 sm:flex-row'>
    <div className='flex gap-2'>
      <p className='bg-purple-900 rounded p-2'>ADD</p>
      <p className='bg-red-600 rounded p-2'>PLAY</p>
      </div>
      <p className="text-green-500 font-bold text-xs flex items-center">PUBLISHED ON OCTOBAR 30</p>
    </div>
   </div>
   </div>
   {/* card3 */}

   {/* card4 */}
   <div className=' w-1/2 sm:w-1/3 bg-[#0d0d0d]  border-purple-800 border-2   '>
   <div className='flex flex-col px-1 py-1 '>
    <img className=""src={action11}></img>
    <div className='text-white'>
    <h1 className=''>RED REDEMPTION</h1>
    <p className='text-gray-500 text-xs'>lorem espum lorem espum lorem espum</p>
    </div>
    <div className='text-white flex flex-col justify-between text-xs sm:text-sm py-1 sm:flex-row'>
    <div className='flex flex-row gap-2'>
      <p className='bg-purple-900 rounded p-2'>ADD</p>
      <p className='bg-red-600 rounded p-2'>PLAY</p>
      </div>
      <p className="text-green-500 font-bold text-xs flex items-center">PUBLISHED ON OCTOBAR 30</p>
    </div>
   </div>
   </div>
   {/* card4 */}

   {/* card5 */}
   <div className=' w-1/2 sm:w-1/3 bg-[#0d0d0d]  border-purple-800 border-2   '>
   <div className='flex flex-col px-1 py-1 '>
    <img className=""src={action9}></img>
    <div className='text-white'>
    <h1 className=''>RED REDEMPTION</h1>
    <p className='text-gray-500 text-xs'>lorem espum lorem espum lorem espum</p>
    </div>
    <div className='text-white flex flex-col justify-between text-xs sm:text-sm py-1 sm:flex-row'>
    <div className='flex flex-row gap-2'>
      <p className='bg-purple-900 rounded p-2'>ADD</p>
      <p className='bg-red-600 rounded p-2'>PLAY</p>
      </div>
      <p className="text-green-500 font-bold text-xs flex items-center">PUBLISHED ON OCTOBAR 30</p>
    </div>
   </div>
   </div>
   {/* card5 */}
   <div className=' w-1/2 sm:w-1/3 bg-[#0d0d0d]  border-purple-800 border-2   '>
   <div className='flex flex-col px-1 py-1 '>
    <img className=""src={action4}></img>
    <div className='text-white'>
    <h1 className=''>RED REDEMPTION</h1>
    <p className='text-gray-500 text-xs'>lorem espum lorem espum lorem espum</p>
    </div>
    <div className='text-white flex flex-col justify-between text-xs sm:text-sm py-1 sm:flex-row'>
    <div className='flex flex-row gap-2'>
      <p className='bg-purple-900 rounded p-2'>ADD</p>
      <p className='bg-red-600 rounded p-2'>PLAY</p>
      </div>
      <p className="text-green-500 font-bold text-xs flex items-center">PUBLISHED ON OCTOBAR 30</p>
    </div>
   </div>
   </div>
   {/* card5 */}
   <div className=' w-1/2 sm:w-1/3 bg-[#0d0d0d]  border-purple-800 border-2   '>
   <div className='flex flex-col px-1 py-1 '>
    <img className=""src={action5}></img>
    <div className='text-white'>
    <h1 className=''>RED REDEMPTION</h1>
    <p className='text-gray-500 text-xs'>lorem espum lorem espum lorem espum</p>
    </div>
    <div className='text-white flex flex-col justify-between text-xs sm:text-sm py-1 sm:flex-row'>
    <div className='flex flex-row gap-2'>
      <p className='bg-purple-900 rounded p-2'>ADD</p>
      <p className='bg-red-600 rounded p-2'>PLAY</p>
      </div>
      <p className="text-green-500 font-bold text-xs flex items-center">PUBLISHED ON OCTOBAR 30</p>
    </div>
   </div>
   </div>
   {/* card5 */}
   
   </div>
   </div>
   
    
  )
}

export default Stake