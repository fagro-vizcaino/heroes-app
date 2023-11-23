import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <>
      <Navbar />
      <div className="w-full pt-8 px-4 sm:px-6 md:px-8">
        {/* <!-- Page Heading --> */}
        <header>
          {/* <p className="mb-2 text-sm font-semibold text-blue-600">
            Starter Pages & Examples
          </p>
          <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
            Application Layout: Sidebar using Tailwind CSS
          </h1>
          <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
            This is a simple application layout with sidebar and header examples
            using Tailwind CSS.
          </p>
          <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            
          </div> */}
        </header>
        {/* <!-- End Page Heading --> */}
        <main className="w-full pt-8 px-4 sm:px-6 md:px-8 lg:px-4">
          <Outlet />
        </main>
      </div>
    </>
  );
}
