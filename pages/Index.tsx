import Navbar from "../components/home/Navbar";
import Link from "next/link";
import Blob1 from "../components/blobs/Blob1";
import Blob2 from "../components/blobs/Blob2";
import ShapesPattern from "../components/patterns/ShapesPattern";
import Footer from "../components/index/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-100">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="absolute left-0 w-64 h-64 -m-32 opacity-25">
          <Blob1 />
        </div>
        <div className="absolute right-0 w-64 h-64 -m-32 opacity-25 bottom-64">
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
        <div className="mt-5 text-lg">Collect and view responses with ease</div>

        <span className="inline-flex mt-16 shadow-sm">
          <button
            type="button"
            className="inline-flex items-center px-12 py-5 text-xl font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent bg-primary hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
          >
            <Link href="/register">
              <a>Get started</a>
            </Link>
          </button>
        </span>
      </div>

      <div className="py-16 overflow-hidden lg:py-24">
        <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="relative justify-between mt-12 lg:mt-24 lg:flex lg:space-x-8 lg:items-center">
            <div className="relative lg:w-3/5">
              <h4 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                Start building forms today
              </h4>

              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary">
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
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        Competitive exchange rates
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary">
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
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        No hidden fees
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 text-white rounded-md bg-primary">
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium leading-6 text-gray-900">
                        Transfers are instant
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative mt-10 -mx-4 lg:mt-0">
              <img
                className="relative mx-auto transform skew-y-3 rounded-lg bounce"
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
