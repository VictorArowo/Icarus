import Navbar from "../components/home/Navbar";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-100">
      <Navbar />
      <div className="flex flex-col items-center">
        <div
          className="text-5xl font-extrabold tracking-wide text-gray-800"
          style={{
            textShadow: "4px 2px 3px rgba(150, 150, 150, 1)",
          }}
        >
          Build forms the easy way
        </div>
        <div className="mt-5 text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          voluptate modi ipsam sequi.
        </div>

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
    </div>
  );
};

export default Index;
