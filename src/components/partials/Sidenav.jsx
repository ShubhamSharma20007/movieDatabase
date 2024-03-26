import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {

 

  return (
    <>
      <div className="w-[20%]  h-full border-r-2 border-zinc-400 p-4">
      <div className="title lex w-full  flex text-white justify-start gap-3 mt-5 mb-10 ">
      <i className="ri-tv-line text-xl text-[#6556CD] ">
      </i> <span className='inline-block m-0 font-bold '>Movie | Store</span>
      </div>
      <div className="feed">
        <h1 className='text-white text-lg  font-semibold my-8'>New feeds</h1>
        <NavLink to={"index"}>
        <h1 className='text-white text-md font-regular mb-5 py-2 cursor-pointer hover:bg-[#6556CD]  hover:rounded-md '>
        <i class="ri-arrow-drop-right-line mx-2"></i>
        Trending
        </h1>
        </NavLink>
        <NavLink to={"index"}>
        <h1 className='text-white text-md font-regular mb-5 py-2 cursor-pointer hover:bg-[#6556CD]  hover:rounded-md '>
        <i class="ri-arrow-drop-right-line mx-2"></i>
        Popular
        </h1>
        </NavLink>
        <NavLink to={"index"}>
  <h1 className='text-white text-md font-regular mb-5 py-2 cursor-pointer hover:bg-[#6556CD]  hover:rounded-md '>
        <i class="ri-arrow-drop-right-line mx-2"></i>
        Movies
        </h1>
        </NavLink>
      <hr  className='border-none h-[1px] bg-zinc-500' />
      </div>
      <div className="feed">
        <h1 className='text-white text-lg  font-semibold my-8 '>Website Information</h1>
  <h1 className='text-white text-md font-regular mb-5 py-2 cursor-pointer hover:bg-[#6556CD]  hover:rounded-md '>
        <i class="ri-arrow-drop-right-line mx-2"></i>
        Contact
        </h1>
  <h1 className='text-white text-md font-regular mb-5 py-2 cursor-pointer hover:bg-[#6556CD]  hover:rounded-md '>
        <i class="ri-arrow-drop-right-line mx-2"></i>
        About
        </h1>
      
  
      </div>
      </div>
    </>
  )
}

export default Sidenav
