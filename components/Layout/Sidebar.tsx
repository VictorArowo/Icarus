import React from "react";
import Link from "next/link";
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
    {
      name: "Teams",
      icon: <TeamIcon />,
    },
    {
      name: "Settings",
      icon: <SettingsIcon />,
    },
  ];
  return (
    <div>
      {/* Off-canvas menu for mobile */}
      <div className={`${hideSidebarMenu ? "hidden " : ""}md:hidden`}>
        <div className="fixed inset-0 flex z-40">
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full  bg-sec-background">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                {isSidebarOpen && (
                  <button
                    className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                    aria-label="Close sidebar"
                    onClick={closeSidebar}
                  >
                    <svg
                      className="h-6 w-6 text-white"
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
                  <img className="h-16 w-auto" src="/Logo.png" alt="Logo" />
                  <span className="font-bold text-primary tracking-widest text-2xl font-header">
                    icarus
                  </span>
                </div>
                <nav className="mt-5 px-2">
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
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a
                  href="#"
                  className="flex-shrink-0 group block focus:outline-none"
                >
                  <div className="flex items-center">
                    <div className="inline-block h-10 w-10 rounded-full text-primary-text">
                      <UserIcon />
                    </div>
                    <div className="ml-3">
                      <p className="text-base leading-6 font-medium text-primary-text group-hover:text-gray-900">
                        Victor Arowo
                      </p>
                      <p className="text-sm leading-5 font-medium text-secondary-text group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
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
      <div className="hidden md:flex md:flex-shrink-0 h-screen ">
        <div className="flex flex-col w-64 border-r border-sec-background bg-sec-background">
          <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img className="h-16 w-auto" src="/Logo.png" alt="Logo" />
              <span className="font-bold text-primary tracking-widest text-2xl font-header">
                icarus
              </span>
            </div>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <nav className="mt-5 flex-1 px-2 bg-sec-background">
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
            <DarkModeToggle />
          </div>
          <div className="flex-shrink-0 flex border-t border-sec-background p-4 bg-primary-background">
            <a href="#" className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div className="inline-block h-10 w-10 rounded-full text-primary-text">
                  <UserIcon />
                </div>
                <div className="ml-3">
                  <p className="text-base leading-6 font-medium text-primary-text group-hover:text-gray-900">
                    Victor Arowo
                  </p>
                  <p className="text-sm leading-5 font-medium text-secondary-text group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
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
