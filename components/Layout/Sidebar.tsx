import React from "react";
import cookies from "js-cookie";
import Transition from "../Transition";
import DarkModeToggle from "./DarkModeToggle";
import HomeIcon from "../../icons/HomeIcon";
import TeamIcon from "../../icons/TeamIcon";
import BookIcon from "../../icons/BookIcon";
import ReportsIcon from "../../icons/ReportsIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import classNames from "../../utils/classNames";
import SidebarItem from "./SidebarItem";
import UserIcon from "../../icons/UserIcon";
import PlusIcon from "../../icons/PlusIcon";
import { useRouter } from "next/router";
import SignoutIcon from "../../icons/SignoutIcon";

interface Props {
  isSidebarOpen: boolean;
  hideSidebarMenu: boolean;
  closeSidebar: () => void;
  hideSidebar: () => void;
}

const Sidebar: React.FC<Props> = ({
  isSidebarOpen,
  hideSidebarMenu,
  closeSidebar,
  hideSidebar,
}) => {
  const router = useRouter();
  const navItems = [
    {
      name: "Dashboard",
      icon: <HomeIcon />,
    },
    {
      name: "Forms",
      icon: <BookIcon />,
    },
    {
      name: "Reports",
      icon: <ReportsIcon />,
    },
  ];

  const handleSignout = () => {
    cookies.remove("token");
    router.push("/");
  };
  return (
    <div>
      {/* Off-canvas menu for mobile */}
      <div className={`${hideSidebarMenu ? "hidden " : ""}md:hidden`}>
        <div className="fixed inset-0 z-40 flex">
          <Transition
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={isSidebarOpen}
            onExited={hideSidebar}
          >
            <div className="fixed inset-0" onClick={closeSidebar}>
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
          </Transition>

          <Transition
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            show={isSidebarOpen}
          >
            <div className="relative flex flex-col flex-1 w-full max-w-xs bg-sec-background">
              <div className="absolute top-0 right-0 p-1 -mr-14">
                {isSidebarOpen && (
                  <button
                    className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
                    aria-label="Close sidebar"
                    onClick={closeSidebar}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img className="w-auto h-16" src="/Logo.png" alt="Logo" />
                  <span className="text-2xl font-bold tracking-widest text-primary font-header">
                    icarus
                  </span>
                </div>
                <nav className="px-2 mt-5">
                  <>
                    {navItems.map((item, index) => (
                      <SidebarItem
                        icon={item.icon}
                        name={item.name}
                        index={index}
                        key={index}
                      />
                    ))}
                  </>
                </nav>
              </div>
              <div>
                <DarkModeToggle />
              </div>
              <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
                <a
                  href="#"
                  className="flex-shrink-0 block group focus:outline-none"
                >
                  <div className="flex items-center">
                    <div className="inline-block w-10 h-10 rounded-full text-primary-text">
                      <UserIcon />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium leading-6 text-primary-text group-hover:text-gray-900">
                        Victor Arowo
                      </p>
                      <p className="text-sm font-medium leading-5 transition duration-150 ease-in-out text-secondary-text group-hover:text-gray-700 group-focus:underline">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition>

          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden h-screen md:flex md:flex-shrink-0 ">
        <div className="flex flex-col w-64 border-r border-sec-background bg-sec-background">
          <div className="flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img className="w-auto h-16" src="/Logo.png" alt="Logo" />
              <span className="text-2xl font-bold tracking-widest text-primary font-header">
                icarus
              </span>
            </div>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <nav className="flex-1 px-2 mt-5 bg-sec-background">
              {navItems.map((item, index) => (
                <SidebarItem
                  icon={item.icon}
                  name={item.name}
                  index={index}
                  key={index}
                />
              ))}
            </nav>
          </div>
          <div>
            <button
              className="flex mb-5 ml-3 text-white hover:text-gray-400"
              onClick={handleSignout}
            >
              <div className="w-6 h-6 mr-2 text-red-600">
                <SignoutIcon />
              </div>
              <p>Sign out</p>
            </button>
          </div>
          <div className="flex flex-shrink-0 p-4 border-t border-sec-background bg-primary-background">
            <a href="#" className="flex-shrink-0 block w-full group">
              <div className="flex items-center">
                <div className="inline-block w-10 h-10 rounded-full text-primary-text">
                  <UserIcon />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium leading-6 text-primary-text group-hover:text-gray-900">
                    Victor Arowo
                  </p>
                  <p className="text-sm font-medium leading-5 transition duration-150 ease-in-out text-secondary-text group-hover:text-gray-700 group-focus:underline">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
