import React, { useState } from "react";
import Transition from "../Transition";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <div className="flex items-center">
                  <img className="w-auto h-16" src="/logo.png" alt="" />
                  <span className="text-2xl font-bold tracking-widest text-primary font-header">
                    icarus
                  </span>
                </div>
                <div className="flex items-center -mr-2 md:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  >
                    <svg
                      className="w-6 h-6"
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
              </div>
            </div>

            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex mr-3 rounded-md shadow">
                <Link href="/register">
                  <a className="inline-flex items-center px-8 py-2 font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent bg-primary text-md hover:bg-yellow-600 focus:outline-none focus:border-yellow-700 focus:shadow-outline-blue active:bg-yellow-800">
                    Join
                  </a>
                </Link>
              </span>
              <span className="inline-flex">
                <Link href="/login">
                  <a className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out border border-transparent hover:text-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-gray-700">
                    Log in
                  </a>
                </Link>
              </span>
            </div>
          </nav>
        </div>

        <Transition
          show={mobileOpen}
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
            <div className="rounded-lg shadow-md">
              <div className="overflow-hidden bg-white rounded-lg shadow-xs">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                      onClick={() => setMobileOpen(!mobileOpen)}
                    >
                      <svg
                        className="w-6 h-6"
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
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <a
                    href="/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                  >
                    Product
                  </a>
                  <a
                    href="/"
                    className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="/"
                    className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="/"
                    className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    className="block w-full px-5 py-3 font-medium text-center text-gray-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default Navbar;
