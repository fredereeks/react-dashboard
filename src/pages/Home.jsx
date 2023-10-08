import React from 'react'
import { IoLocationOutline, IoArrowForwardOutline, IoChevronForward } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { flight_children, flight_dogticket, flight_groupdeparture, flight_lighthouse, flight_lion } from '../assets/images'
import { ToolTip } from '../components'
import { hotels, reports } from '../data'

export default function Home() {
    return (
        <main className="flex flex-col py-5 w-full flex-1">
            <section className="w-full grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-3 sm:gap-4 auto-rows-auto mx-auto pt-10 pb-5 px-2">
                {
                    reports.map(report => (
                        // <aside key={report.id} className="relative bg-white dark:bg-gray-700/90 rounded-lg shadow-lg shadow-slate-200 dark:shadow-gray-900/90 p-4 sm:px-6 my-2">
                        <aside key={report.id} className="relative shadow-lg shadow-slate-200 dark:shadow-gray-900 rounded-lg bg-white dark:bg-slate-700/90 p-4 my-2">
                            <div className={`h-12 sm:h-14 lg:h-[3.7rem] w-12 sm:w-14 lg:w-16 grid place-items-center text-white dark:text-slate-200 text-lg sm:text-2xl md:text-3xl rounded-lg absolute left-4 top-1/3 -translate-y-full shadow-lg shadow-slate-400 dark:shadow-gray-900 ${report.background} dark:from-slate-600 dark:to-slate-700`}>
                                {report.icon}
                            </div>
                            <div className="flex flex-col justify-end pb-2 mb-5 text-right dark-text relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[120%] after:w-[120%] after:h-[.5px] after:bg-gradient-to-r after:from-transparent after:to-transparent after:via-slate-300 dark:after:via-slate-600">
                                <p className="opacity-90 font-medium tracking-tighter text-xs sm:text-sm">{report.tips}</p>
                                <h3 className="font-bold tracking-tight text-lg sm:text-3xl">{report.total}</h3>
                            </div>
                            <p className="darker-text opacity-50 font-medium tracking-tighter text-xs sm:text-sm">{report.tag}</p>
                        </aside>
                    ))
                }
            </section>
            {/* <section className="flex flex-1 w-full mx-auto max-w-[95%] z-50 pt-5 pb-10 bg-white dark:bg-[#fcfcfc] h-auto rounded-lg shadow-xl"> */}
            <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-auto px-2">
                <div className="md:col-span-2 w-full grid gap-4 shadow-lg shadow-slate-200 dark:shadow-gray-900 rounded-lg py-2 px-2 bg-white dark:bg-slate-300 ">
                    <div className="flex justify-between items-center gap-1 px-4 text-slate-700 border-b border-b-slate-400/50 dark:border-b-slate-500/40 flex-wrap">
                        <h2 className="py-2 font-semibold text-lg sm:text-xl">Posts</h2>
                        <Link to="/dashboard/blogs" className="dark-text flex items-center p-4">
                            <p className="text-xs opacity-80 dark:opacity-100">See All</p>
                            <IoChevronForward className='text-inherit scale-75 opacity-70' />
                        </Link>
                    </div>
                    <div className="p-0 overflow-x-auto w-full h-auto rounded-lg">
                        <table className="table border-collapse w-full">
                            <thead className='align-bottom'>
                                <tr>
                                    {
                                        ['Blog Details', 'Status', ''].map((th, i) => <th key={i} className='dark-text uppercase font-medium whitespace-nowrap text-[.65rem] text-justify py-2'>{th}</th>)
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
                                                    <h3 className="text-[.85rem] font-light leading-tight">Andrew Abaga</h3>
                                                    <IoArrowForwardOutline className="text-gray-500 text-xs font-thin opacity-50" />
                                                    <p className="text-[.7rem] opacity-50 font-medium text-justify">2023-09-25</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2">
                                        <p className="text-xs disabled font-semibold rounded-md grid place-items-center py-1 px-4 w-max">Disabled</p>
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
                                                    <h3 className="text-[.85rem] font-light leading-tight">Melina James</h3>
                                                    <IoArrowForwardOutline className="text-gray-500 text-xs font-thin opacity-50" />
                                                    <p className="text-[.7rem] opacity-50 font-medium text-justify">2023-09-25</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2">
                                        <p className="text-xs active font-semibold rounded-md grid place-items-center py-1 px-4 w-max">Active</p>
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
                <div className="w-full grid shadow-lg shadow-slate-200 dark:shadow-gray-900 rounded-lg py-2 px-2 bg-white dark:bg-slate-300">
                    <div className="flex justify-between items-center gap-1 px-4 text-slate-700 border-b border-b-slate-400/50 dark:border-b-slate-500/40 flex-wrap">
                        <h2 className="py-2 font-semibold text-lg sm:text-xl">Users</h2>
                        <Link to="/dashboard/users" className="dark-text flex items-center p-4">
                            <p className="text-xs opacity-80 dark:opacity-100">See All</p>
                            <IoChevronForward className='text-inherit scale-75 opacity-70' />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1 py-3 flex-1 overflow-x-hidden">
                        <aside className="p-2 bg-slate-200 rounded-md flex gap-1 items-center">
                            <div className="h-9 w-9 rounded-md overflow-hidden relative bg-cyan-400 dark:bg-slate-600/50">
                                <img src={flight_children} alt={`Everything you need we have`} className="absolute left-0 top-0 object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col flex-1 text-slate-700">
                                <h3 className="text-sm font-medium leading-tight">Umar Peruzzi</h3>
                                <div className="flex gap-2 items-center font-thin">
                                    <h3 className="text-[.85rem] font-light leading-tight">perrozumar@gmail.com</h3>
                                    <IoArrowForwardOutline className="text-gray-500 text-xs font-thin opacity-50" />
                                    <p className="text-[.7rem] opacity-50 font-medium text-justify whitespace-pre-wrap">2023-09-25</p>
                                </div>
                            </div>
                        </aside>
                        <aside className="p-2 bg-slate-200 rounded-md flex gap-1 items-center">
                            <div className="h-9 w-9 rounded-md overflow-hidden relative bg-cyan-400 dark:bg-slate-600/50">
                                <img src={flight_dogticket} alt={`Everything you need we have`} className="absolute left-0 top-0 object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col flex-1 text-slate-700">
                                <h3 className="text-sm font-medium leading-tight">Ferthoghen Antony</h3>
                                <div className="flex gap-2 items-center font-thin">
                                    <h3 className="text-[.85rem] font-light leading-tight">freshanton@gmail.com</h3>
                                    <IoArrowForwardOutline className="text-gray-500 text-xs font-thin opacity-50" />
                                    <p className="text-[.7rem] opacity-50 font-medium text-justify whitespace-pre-wrap">2023-08-12</p>
                                </div>
                            </div>
                        </aside>
                        <aside className="p-2 bg-slate-200 rounded-md flex gap-1 items-center">
                            <div className="h-9 w-9 rounded-md overflow-hidden relative bg-cyan-400 dark:bg-slate-600/50">
                                <img src={flight_lion} alt={`Everything you need we have`} className="absolute left-0 top-0 object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col flex-1 text-slate-700">
                                <h3 className="text-sm font-medium leading-tight">Benedict Ogunsomn</h3>
                                <div className="flex gap-2 items-center font-thin">
                                    <h3 className="text-[.85rem] font-light leading-tight">ogunsomben@gmail.com</h3>
                                    <IoArrowForwardOutline className="text-gray-500 text-xs font-thin opacity-50" />
                                    <p className="text-[.7rem] opacity-50 font-medium text-justify whitespace-pre-wrap">2023-08-01</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col gap-3 sm:gap-4 auto-rows-auto py-5 px-2">
                <div className="flex justify-between items-center gap-1 flex-wrap">
                    <div className="flex items-center gap-2 sm:gap-4 px-2 sm:px-4">
                        <button className="py-2 border-b sm:border-b-2 border-b-cyan-400 darker-text text-xs sm:text-sm cursor-pointer px-1 hover:border-b-cyan-400">Most Popular</button>
                        <button className="py-2 border-b sm:border-b-2 border-b-transparent darker-text text-xs sm:text-sm cursor-pointer px-1 hover:border-b-cyan-400">Best Price</button>
                        <button className="py-2 border-b sm:border-b-2 border-b-transparent darker-text text-xs sm:text-sm cursor-pointer px-1 hover:border-b-cyan-400">Near Me</button>
                    </div>
                    <Link to="/dashboard/hotels" className="dark-text flex items-center p-4">
                        <p className="text-xs opacity-80">See All</p>
                        <IoChevronForward className='text-inherit scale-75 opacity-70' />
                    </Link>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 sm:gap-4 auto-rows-auto py-5 px-2">
                {
                    hotels.map(({ id, name, image, lowest, location, country }, i) => (
                        <Link to={`/hotels/${id}`} key={id} className="flex flex-col sm:gap-2 max-w-sm w-full dark:shadow-gray-900">
                            <div className="h-[100px] sm:h-[250px] md:h-[300px] w-full relative overflow-hidden">
                                <img className="object-cover transition-all group-hover:scale-100 scale-150" alt={name} src={`${image}`} />
                            </div>
                            <div className="flex flex-col pt-2 pb-4 gap-2">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center sm:gap-2 text-pri">
                                    <p className="text-base text-gray-600 dark:text-gray-100 font-bold">{name}</p>
                                    <p className="text-xs text-inherit font-thin"><span className="text-[.65rem] sm:text-[.85rem] text-red-500 dark:text-slate-200 font-thin">&#8358;{lowest.toLocaleString()}</span></p>
                                </div>
                                <div className="flex flex-row items-center justify-between gap-2 text-gray-600 dark:text-gray-100 scale-90">
                                    <div className="flex gap-1 items-center">
                                        <IoLocationOutline className="text-gray-500  dark:text-gray-100 text-sm opacity-80" />
                                        <p className="text-sm text-gray-600  dark:text-gray-300 font-bold">{location}, <span className="text-xs text-inherit font-thin opacity-90">{country}</span></p>
                                    </div>
                                    <IoArrowForwardOutline className="text-gray-500 text-xs sm:text-sm opacity-80" />
                                </div>
                            </div>
                        </Link>
                    ))
                }
                </div>
            </section>
        </main>
    )
}
