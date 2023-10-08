import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Message() {
  const location = useLocation();
  const pathname = location.pathname === "/" ? "Dashboard" : location.pathname.replace("/dashboard/", "");
  const page = pathname[0].toUpperCase() + pathname.slice(1);
  return (
    <main className="flex flex-col py-5 w-full flex-1">
      <div className="flex justify-between items-center p-5 rounded-lg bg-blue-500 dark:bg-slate-500 relative z-10 shadow-lg mx-4">
        <h3 className="text-white font-semibold text-base">{page} Table</h3>
      </div>
      <section className="flex flex-1 w-full -mt-10 pt-20 bg-white h-auto dark:bg-slate-300 rounded-lg shadow-xl">
        <div className="p-0 overflow-x-auto w-full">
          <table className="table border-collapse w-full">
            <thead className='align-bottom'>
              <tr>
                {
                  ['Message Details', 'Status', 'Date Created', ''].map((th, i) => <th key={i} className='dark-text uppercase font-medium whitespace-nowrap text-[.65rem] text-justify py-2'>{th}</th>)
                }
              </tr>
            </thead>
            <tbody className='mx-3'>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
