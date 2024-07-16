import React from 'react'
import Toggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 sm:mx-2 px-2 py-2.5 rounded dark:bg-gray-800'>
      <div className='container lg:h-[20px] flex justify-between items-center mx-auto pt-3'>
        <div className='flex h-[10px] items-center mx-auto'>
          <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
            Welcome To The DashBoard
          </span>
        </div>

        <div className='flex justify-end pr-4'>
          <Toggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
