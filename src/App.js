import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header, SideBar, Footer } from "./components";

import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Message from "./pages/Message";
import Profile from "./pages/Profile";
import User from "./pages/User";

const Layout = () => {
  const [navShow, setNavShow] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(localStorage.getItem("travlox__darkmode") || false)

  React.useEffect(() => {
    localStorage.setItem("travlox__darkmode", darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <main className={`${darkMode ? 'dark' : 'light'}`}>
      <section className={`bg-slate-50 dark:bg-slate-900 min-h-screen flex py-2 gap-3 w-full`}>
        <SideBar navShow={navShow} />
        <div className="flex flex-col flex-1 py-4 sm:px-4 w-[50vw]">
          <Header handleClick={() => setNavShow(prev => !prev)} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="min-h-[calc(100vh-120px)]">
            <Outlet />
          </div>
          <Footer />
        </div>
      </section>
    </main>
  )
}


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/dashboard/admins",
          element: <Admin />
        },
        {
          path: "/dashboard/blogs",
          element: <Blog />
        },
        {
          path: "/dashboard/hotels",
          element: <Hotel />
        },
        {
          path: "/dashboard/messages",
          element: <Message />
        },
        {
          path: "/dashboard/profile",
          element: <Profile />
        },
        {
          path: "/dashboard/users",
          element: <User />
        },
      ]
    }
  ])
  return (
    <div className="dashboard">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
