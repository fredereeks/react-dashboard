import React from 'react'
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { flight_beach, flight_groupdeparture, flight_lighthouse } from '../assets/images';
import { ToolTip } from '../components';

export default function UserDetails() {
  return (
    <main className="flex flex-col gap-2">
      <section className="flex flex-col bg-white dark:bg-slate-200 shadow-xl p-4 rounded-md  my-5 sm:my-10 py-5 sm:py-10">
        <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="h-9 w-9 rounded-md overflow-hidden relative bg-cyan-400 dark:bg-slate-600/50">
              <img src={flight_beach} alt={`Ademola Julius`} className="absolute left-0 top-0 object-cover w-full h-full" />
            </div>
            <div className="flex flex-col flex-1 text-slate-700">
              <h3 className="text-sm font-medium leading-tight flex items-center gap-2"><span>Ademola Julius</span> <span className="text-[.5rem] bg-slate-200 dark:bg-slate-100 text-slate-400 dark:text-slate-700 font-semibold uppercase rounded-md text-center py-[.15rem] px-2 w-max">Admin</span></h3>
              <p className="text-xs opacity-90 font-light">This is the overview of Ademola Julius' Account</p>
            </div>
          </div>
          <button className="text-xs disabled font-semibold rounded-md grid place-items-center py-1 px-4 w-max">Disable Account</button>
        </div>
        <div className="flex gap-2 items-center pt-5 border-b-[2.5px] border--bslate-200 dark:border-b-slate-400">
          <div className="flex gap-2 items-center pt-5 mb translate-y-[2.5px]">
            <button className="py-2 border-b sm:border-b-[3px] border-b-cyan-400 darker-text text-xs sm:text-sm cursor-pointer px-1 hover:border-b-cyan-400">Posts</button>
            <button className="py-2 border-b sm:border-b-[3px] border-b-transparent darker-text opacity-70 hover:opacity-100 text-xs sm:text-sm cursor-pointer px-1 hover:border-b-cyan-400">Comments</button>
            <button className="py-2 border-b sm:border-b-[3px] border-b-transparent darker-text opacity-70 hover:opacity-100 text-xs sm:text-sm cursor-pointer px-1 hover:border-b-cyan-400">Homes</button>
            <button className="py-2 border-b sm:border-b-[3px] border-b-transparent darker-text opacity-70 hover:opacity-100 text-xs sm:text-sm cursor-pointer px-1 hover:border-b-cyan-400">Orders</button>
          </div>
        </div>
        <div className="flex flex-1 w-full -mt-10 pt-20 rounded-lg">
          <div className="p-0 overflow-x-auto w-full">
            <table className="table border-collapse w-full">
              <thead className='align-bottom'>
                <tr>
                  {
                    ['Blog Details', 'Status', 'Date Created', ''].map((th, i) => <th key={i} className='dark-text uppercase font-medium whitespace-nowrap text-[.65rem] text-justify py-2'>{th}</th>)
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
                          <p className="text-[.85rem] font-light leading-tight">Ademola Julius</p> |
                          <p className="text-xs opacity-50 font-normal flex items-center"><IoChatboxEllipsesOutline className='text-inherit mr-[.05rem] text-[.56rem] mt-[.15rem]' /> &nbsp;30 Comments</p>
                        </div>
                      </div>
                    </div>
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
                          <p className="text-[.85rem] font-light leading-tight">Ademola Julius</p> |
                          <p className="text-xs opacity-50 font-normal flex items-center"><IoChatboxEllipsesOutline className='text-inherit mr-[.05rem] text-[.56rem] mt-[.15rem]' /> &nbsp;47 Comments</p>
                        </div>
                      </div>
                    </div>
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
        </div>
      </section>
    </main>
  )
}
