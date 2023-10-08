import React from 'react'
import { IoArrowForwardOutline, IoChatboxEllipsesOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { flight_groupdeparture, flight_lighthouse } from '../assets/images';
import { ToolTip } from '../components';

export default function Blog() {
  const location = useLocation();
  const pathname = location.pathname === "/" ? "Dashboard" : location.pathname.replace("/dashboard/", "");
  const page = pathname[0].toUpperCase() + pathname.slice(1);
  return (
    <main className="flex flex-col py-5 w-full flex-1">
      <div className="flex justify-between items-center p-5 rounded-lg bg-cyan-500 dark:bg-slate-500 relative z-10 shadow-lg mx-4">
        <h3 className="text-white font-semibold text-base">{page} Table</h3>
        <button className="py-2 px-3 text-white text-xs bg-slate-700 rounded-lg">Create Post</button>
      </div>
      <section className="flex flex-1 w-full -mt-10 pt-20 bg-white h-auto dark:bg-slate-300 rounded-lg shadow-xl">
        <div className="p-0 overflow-x-auto w-full">
          <table className="table border-collapse w-full">
            <thead className='align-bottom'>
              <tr>
                {
                  ['Blog Details', 'Author Details', 'Status', 'Date Created', ''].map((th, i) => <th key={i} className='dark-text uppercase font-medium whitespace-nowrap text-[.65rem] text-justify py-2'>{th}</th>)
                }
              </tr>
            </thead>
            <tbody className='mx-3'>
              <tr className='align-center'>
                <td className="pr-1 py-2 text-slate-700 tooltip group">
                  <ToolTip text={"Click to see Blog Details"} />
                  <div className="pr-1 flex gap-1 items-center">
                    <div className="h-9 w-9 rounded-md overflow-hidden relative bg-cyan-400 dark:bg-slate-600/50">
                      <img src={flight_lighthouse} alt={`Everything you need we have`} className="absolute left-0 top-0 object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3 className="text-sm font-medium leading-tight">Everything you need we have...</h3>
                      <div className="flex gap-2 items-center font-thin">
                        <p className="text-xs opacity-50 font-normal flex items-center"><IoChatboxEllipsesOutline className='text-inherit mr-[.05rem] text-[.56rem] mt-[.15rem]' /> 30 Comments</p> 
                        <IoArrowForwardOutline className="text-gray-500 text-xs font-thin opacity-50" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className=" text-slate-700">
                  <p className="text-[.7rem] opacity-50 font-medium">User</p>
                  <h3 className="text-[.85rem] font-light leading-tight">Andrew Abaga</h3>
                </td>
                <td className="py-2">
                  <p className="text-xs disabled font-semibold rounded-md grid place-items-center py-1 px-4 w-max">Disabled</p>
                </td>
                <td className="py-2 text-slate-700">
                  <p className="text-[.7rem] opacity-50 font-medium text-justify">2023-09-25</p>
                </td>
                <td className="py-2 flex items-center gap-1">
                  <div className="py-2 flex items-center gap-2">
                    <button className="cursor-pointer text-xs pending font-semibold rounded-md grid place-items-center py-1 px-4 w-max">Change Status</button>
                    <button className="cursor-pointer text-xs disabled font-semibold rounded-md grid place-items-center py-1 px-4 w-max">Delete</button>
                  </div>
                </td>
              </tr>
              <tr className='align-center'>
                <td className="pr-1 py-2 text-slate-700 tooltip group">
                  <ToolTip text={"Click to see Blog Details"} />
                  <div className="pr-1 flex gap-1 items-center">
                    <div className="h-9 w-9 rounded-md overflow-hidden relative bg-cyan-400 dark:bg-slate-600/50">
                      <img src={flight_groupdeparture} alt={`Have you been to the Carribean Sea lately? It is incredible`} className="absolute left-0 top-0 object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col flex-1 max-w-[10rem]">
                      <h3 className="text-sm font-medium leading-tight truncate line-clamp-1 whitespace-nowrap text-ellipsis">Have you been to the Carribean Sea lately? It is incredible</h3>
                      <div className="flex gap-2 items-center font-thin">
                        <p className="text-xs opacity-50 font-normal flex items-center"><IoChatboxEllipsesOutline className='text-inherit mr-[.05rem] text-[.56rem] mt-[.15rem]' /> Comments (17)</p> 
                        <IoArrowForwardOutline className="text-gray-500 text-xs font-thin opacity-50" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className=" text-slate-700">
                  <p className="text-[.7rem] opacity-50 font-medium">Admin</p>
                  <h3 className="text-[.85rem] font-light leading-tight">Melina James</h3>
                </td>
                <td className="py-2">
                  <p className="text-xs active font-semibold rounded-md grid place-items-center py-1 px-4 w-max">Active</p>
                </td>
                <td className="py-2 text-slate-700">
                  <p className="text-[.7rem] opacity-50 font-medium text-justify">2023-09-25</p>
                </td>
                <td className="py-2 flex items-center gap-1">
                  <div className="py-2 flex items-center gap-2">
                    <button className="cursor-pointer text-xs pending font-semibold rounded-md grid place-items-center py-1 px-4 w-max">Change Status</button>
                    <button className="cursor-pointer text-xs disabled font-semibold rounded-md grid place-items-center py-1 px-4 w-max">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
