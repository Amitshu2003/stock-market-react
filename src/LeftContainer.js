import React from 'react'

function LeftContainer() {
  return (
    <div className='sm:w-[12%] sm:flex-col sm:justify-start flex flex-row flex-shrink flex-wrap items-center justify-between shadow-md'>
        <div className='m-2 sm:w-24 mt-0 hover:cursor-pointer group text-[#BFBAD0] hover:bg-white p-2 sm:p-4 hover:shadow-lg'>
        <i class="fa-solid fa-gauge-simple-high group-hover:text-[#3B77FF] ml-2  md:text-3xl md:ml-4"></i>
        <h2 className='text-[8px] sm:text-sm'>Dashboard</h2>
        </div>

        <div className=' m-2 sm:w-24 mt-0 group hover:cursor-pointer text-[#BFBAD0] hover:bg-white p-2 sm:p-4 hover:shadow-lg'>
        <i class="fa-solid fa-chart-column group-hover:text-[#3B77FF] ml-2  md:text-3xl md:ml-4"></i>
        <h2 className='text-[8px] sm:text-sm'>Analytics</h2>
        </div>

        <div className=' m-2 sm:w-24 mt-0 group hover:cursor-pointer text-[#BFBAD0] hover:bg-white p-2 sm:p-4 hover:shadow-lg'>
        <i class="fa-solid fa-arrow-rotate-left group-hover:text-[#3B77FF]  ml-2  md:text-3xl md:ml-4"></i>
        <h2 className='text-[8px] sm:text-sm'>Trading</h2>
        </div>

        <div className=' m-2 sm:w-24 mt-0 group hover:cursor-pointer text-[#BFBAD0] hover:bg-white p-2 sm:p-4 hover:shadow-lg'>
        <i class="fa-solid fa-bell group-hover:text-[#3B77FF] ml-2  md:text-3xl md:ml-4"></i>
        <h2 className='text-[8px] sm:text-sm'>Notifications</h2>
        </div>

        <div className='hover:cursor-pointer group m-2 sm:w-24 sm:mt-auto mt-0 text-[#BFBAD0] hover:bg-white p-4 hover:shadow-lg'>
        <i class="fa-solid fa-arrow-right-from-bracket group-hover:text-[#3B77FF]  ml-2  md:text-3xl md:ml-4"></i>
        <h2 className='text-[8px] sm:text-sm'>Logout</h2>
        </div>
    </div>
  )
}

export default LeftContainer