import React from 'react'
import IconDark from "../icons/darkmode.svg";
import IconLight from "../icons/lightmode.svg";
const DarkMode = () => {
  const toggleDarkMode = () => { 
      document.querySelector("html").classList.toggle("dark");
   }

  return (
    <div onClick={toggleDarkMode} className='cursor-pointer  absolute aspect-square w-9 my-3  left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 md:top-0 md:p-1 md:w-auto '>
        <img src={IconDark} className="hidden md:block md:dark:hidden" alt="" />
        <img src={IconLight} className="block md:hidden md:dark:block " alt="" />
    </div>
  )
}

export default DarkMode