import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../data'
import { flight_lions } from '../assets/images'

export default function SideBar({navShow}) {
    const location = useLocation();
    const pathname = location.pathname === "/" ? "Dashboard" : location.pathname.replace("/dashboard/", "");
    const page = pathname[0].toUpperCase() + pathname.slice(1);
    return (
        <nav className={`${navShow ? 'left-3 fixed md:relative' : '-left-full md:left-3 fixed md:relative'} z-[100] rounded-xl p-5 flex flex-col h-[calc(100vh-35px)] mt-[10px] mb-[20px] bg-transparent max-w-xs md:min-w-[12rem] transition-all duration-300`}>
            <section className={`${navShow ? 'left-3 fixed' : '-left-full md:left-3 fixed'} z-[100] rounded-xl p-5 flex flex-col h-[calc(100vh-35px)] top-[20px] mb-[20px] bg-slate-800 dark:bg-slate-700 shadow-md max-w-xs md:min-w-[12rem] transition-all duration-300`}>
                <div className="flex items-center gap-2 py-5 px-2 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-transparent after:via-slate-600">
                    <div className="h-9 w-9 rounded-md overflow-hidden relative bg-cyan-400 dark:bg-slate-600/50">
                        <img src={flight_lions} alt={`Frederick Jones`} className="absolute left-0 top-0 object-cover w-full h-full" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <h3 className="text-white text-sm font-semibold whitespace-nowrap">Frederick Jones</h3>
                        <p className="text-white text-xs opacity-50 font-medium">@jonesdoe</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 py-5 px-2 overflow-y-auto">
                    {
                        navLinks.map((navLink) => {
                            const active = (navLink.title === page) ? 'border-l-cyan-500' : 'border-l-transparent hover:border-l-cyan-500'
                            return (<Link to={`${navLink.link}`} key={navLink.id} className={`flex items-center gap-2 py-1 pl-3 pr-2 transition-all duration-300 border-l-2 ${active}`}>
                                <span className="text-white text-xs dark:opacity-80">{navLink.icon}</span>
                                <p className="text-slate-100 text-xs sm:text-sm opacity-60 dark:opacity-90 font-thin">{navLink.title}</p>
                            </Link>)
                        })
                    }
                </div>
            </section>
        </nav>
    )
}
