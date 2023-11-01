import React from 'react'
import Home from './Home'
import action9 from "../assests/images/action9.jpg"
import R from "../assests/images/R.jpg"
import OIP from "../assests/images/OIP.jpg"
import witcher from "../assests/images/witcher.jpg"
const Stake = () => {
  return (
    <div>
    <div className="flex " >
    <img className="flex items-center justify-center"src={witcher}></img>
    {/* <div className='relative flex items-center justify-center  top-5 sm:top-28 sm:mr-96 '>
    <div className=' text-white text-lg sm:text-3xl tracking-wider font-poppins font-extrabold py-2 px-2 sm:py-7 sm:px-7 '>
      THE ULTIMATE COMPETITIVE GAMING PLATFORM
    </div>
    </div> */}
    
   </div>
   <div className='text-black'>
   <div className='flex flex-col'>
    <img className="w-32 h-10"src={R}></img>
    <h1>hh</h1>
    <p>kskssam</p>
    <div>
      <p>l</p>
      <p>p</p>
    </div>
   </div>
   </div>
   
   </div>
   
    
  )
}

export default Stake