import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Layout: React.FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hideSidebarMenu, setHideSidebarMenu] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    setHideSidebarMenu(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const hideSidebar = () => {
    setHideSidebarMenu(true);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-primary-background">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        hideSidebarMenu={hideSidebarMenu}
        closeSidebar={closeSidebar}
        hideSidebar={hideSidebar}
      />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            aria-label="Open sidebar"
            onClick={openSidebar}
          >
            <svg
              className="w-6 h-6 text-gray-200 hover:text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <main
          className="relative z-0 flex-1 pt-2 pb-6 overflow-y-auto focus:outline-none md:py-6"
          tabIndex={0}
        >
          {/* <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div> */}
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">{children}</div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
