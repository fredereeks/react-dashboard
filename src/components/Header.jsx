import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoNotificationsOutline, IoLogOutOutline, IoMenuOutline, IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";


export default function Header({ handleClick, darkMode, toggleDarkMode }) {
  const location = useLocation();
  const pathname = location.pathname === "/" ? "Dashboard" : location.pathname.replace("/dashboard/", "");
  const page = pathname[0].toUpperCase() + pathname.slice(1);
  return (
    <header className="flex justify-between gap-2 p-2 items-center w-full flex-1">
      <div className="flex flex-col gap-1">
        <div className="text-slate-500 text-sm flex gap-1 items-center">
          <Link className="text-xs text-slate-400">Dashboard</Link> /
          <p className="dark-text text-sm font-semibold">{page}</p>
        </div>
        <p className="darker-text text-base sm:text-lg font-semibold">{page}</p>
      </div>
      <div className="flex items-center gap-1 w-max">
        <Link to="/dashboard/messages" className="text-sm md:text-base text-slate-400 p-1 relative flex">
          <IoNotificationsOutline size={16} className='text-inherit' />
        </Link>
        <Link to="/logout" className="text-sm md:text-base text-slate-400 p-1 relative flex">
          <IoLogOutOutline size={16} className='text-inherit' />
        </Link>
        <button onClick={handleClick} className="cursor-pointer md:hidden text-base md:text-base text-slate-400 p-1"><IoMenuOutline size={22} className='text-inherit' /></button>
        <button onClick={toggleDarkMode} className="cursor-pointer -scale-x-[1] text-sm text-slate-400 p-1">
          {darkMode ?
            <IoSunnyOutline className='text-inherit' /> :
            <IoMoonOutline className='text-inherit' />
          }
        </button>
      </div>
    </header>
  )
}
