import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { flight_children } from '../assets/images';
import { ToolTip } from '../components';

export default function Profile() {
  const location = useLocation();
  const pathname = location.pathname === "/" ? "Dashboard" : location.pathname.replace("/dashboard/", "");
  const page = pathname[0].toUpperCase() + pathname.slice(1);
  return (
    <main className="flex flex-col py-5 w-full flex-1">
      <div className="flex justify-between items-center p-5 rounded-lg bg-teal-500 dark:bg-slate-500 relative z-10 shadow-lg mx-4">
        <h3 className="text-white font-semibold text-base">{page} Table</h3>
        <button className="py-2 px-3 text-white text-xs bg-slate-700 rounded-lg">Create Hotel</button>
      </div>
      <section className="flex flex-1 w-full -mt-10 pt-20 bg-white h-auto dark:bg-slate-300 rounded-lg shadow-xl">
        <div className="p-0 overflow-x-auto w-full">
          <table className="table border-collapse w-full">
            <thead className='align-bottom'>
              <tr>
                {
                  ['User Details', 'Username/Email', 'Status', 'Date Created', ''].map((th, i) => <th key={i} className='dark-text uppercase font-medium whitespace-nowrap text-[.65rem] text-justify py-2'>{th}</th>)
                }
              </tr>
            </thead>
            <tbody className='mx-3'>
              <tr className='align-center'>
                <td className="pr-1 py-2 text-slate-700">
                  <Link to={`/dashboard/user/${123859}`} className="pr-1 flex gap-1 items-center relative group">
                    <ToolTip text={"Click to see all user's activities"} direction={'top'} />
                    <div className="h-9 w-9 rounded-md overflow-hidden relative bg-cyan-400 dark:bg-slate-600/50">
                      <img src={flight_children} alt={`Umar Peruzzi`} className="absolute left-0 top-0 object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3 className="text-sm font-medium leading-tight">Umar Peruzzi</h3>
                      <p className="text-xs opacity-50 font-light"></p>
                    </div>
                  </Link>
                </td>
                <td className="py-2 text-slate-700">
                  <p className="text-[.7rem] opacity-50 font-medium">Perrozumar@gmail.com</p>
                  <h3 className="text-[.85rem] font-light leading-tight">@perrozumar</h3>
                </td>
                <td className="py-2">
                  <p className="text-xs pending font-semibold rounded-md grid place-items-center py-1 px-4 w-max">Pending</p>
                </td>
                <td className="py-2 text-slate-700">
                  <p className="text-[.7rem] opacity-50 font-medium text-justify">2022-10-15</p>
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
