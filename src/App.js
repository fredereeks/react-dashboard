import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header, SideBar, Footer } from "./components";

import Home from "./pages/Home";

const Layout = () => {
  const [navShow, setNavShow] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <main className={`${darkMode ? 'dark' : 'light'}`}>
    <section className={`bg-slate-50 dark:bg-slate-900 min-h-screen flex py-2 gap-3 w-full`}>
      <SideBar navShow={navShow} />
      <div className="flex flex-col flex-1 py-4 sm:px-4 w-[50vw]">
        <Header handleClick={() => setNavShow(prev => !prev)} darkMode={darkMode} toggleDarkMode={() => setDarkMode(prev => !prev)} />
        <div className="min-h-[calc(100vh-100px)]">
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
          element: <Home />
        },
        {
          path: "/dashboard/blogs",
          element: <Home />
        },
        {
          path: "/dashboard/hotels",
          element: <Home />
        },
        {
          path: "/dashboard/profile",
          element: <Home />
        },
        {
          path: "/dashboard/users",
          element: <Home />
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
