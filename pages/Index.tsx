import Navbar from "../components/home/Navbar";
import Link from "next/link";
import Blob1 from "../components/blobs/Blob1";
import Blob2 from "../components/blobs/Blob2";
import ShapesPattern from "../components/patterns/ShapesPattern";
import Footer from "../components/index/Footer";
import Seperator from "../components/blobs/Seperator";

const Index = () => {
  return (
    <div className="bg-gray-50">
      <div className="bg-blue-100">
        <Navbar />
        <div className="flex flex-col items-center">
          <div className="absolute left-0 w-64 h-64 -m-32 opacity-25">
            <Blob1 />
          </div>
          <div className="absolute right-0 w-64 h-64 -m-32 opacity-25">
            <Blob2 />
          </div>
          <div className="absolute left-0 w-32 h-32 text-gray-300 bottom-64">
            <ShapesPattern />
          </div>
          <div
            className="text-5xl font-extrabold tracking-wide text-gray-800"
            style={{
              textShadow: "4px 2px 3px rgba(150, 150, 150, 1)",
            }}
          >
            Build forms the easy way
          </div>
          <div className="mt-5 text-lg">
            Collect and view responses with ease
          </div>

          <span className="inline-flex mt-16 shadow-sm">
            <Link href="/register">
              <button
                type="button"
                className="inline-flex items-center px-12 py-5 text-xl font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent bg-primary hover:bg-yellow-600 focus:outline-none focus:border-yellow-700 focus:shadow-outline-blue active:bg-yellow-800"
              >
                <a>Get started</a>
              </button>
            </Link>
          </span>
        </div>
      </div>
      <div className="absolute z-10 w-full bg-blue-100">
        <Seperator />
      </div>
      <div className="relative pt-48 pb-16 overflow-hidden lg:pt-64 xl:pt-96 bg-gray-50 lg:pb-24">
        <div className="relative z-20 max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="relative justify-between lg:flex lg:space-x-8 lg:items-center">
            <div className="relative lg:w-3/5">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                Start building forms today
              </h4>

              <ul className="mt-10">
                <li>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary">
                        <svg
                          fill="currentColor"
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                        >
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        Simple to use drag and drop form builder
                      </h5>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary">
                        <svg
                          fill="currentColor"
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        Easily view form responses
                      </h5>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary">
                        <svg
                          fill="currentColor"
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        Easy to understand form analytics
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative px-5 mt-10 -mx-4 lg:mt-0 lg:px-0">
              <img
                className="relative z-20 mx-auto transform skew-y-3 rounded-lg bounce "
                width="750"
                src="app.png"
                alt=""
              />
            </div>
          </div>

          <svg
            className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
