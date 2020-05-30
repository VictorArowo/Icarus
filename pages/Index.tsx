import Navbar from "../components/home/Navbar";
import Link from "next/link";
import Blob1 from "../components/blobs/Blob1";
import Blob2 from "../components/blobs/Blob2";
import TopographyPattern from "../components/patterns/TopographyPattern";
import ShapesPattern from "../components/patterns/ShapesPattern";

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
        <div className="absolute left-0 w-32 h-32 text-gray-400 bottom-64">
          <ShapesPattern />
        </div>
        <div className="absolute w-24 h-24 text-gray-400 right-8">
          <TopographyPattern />
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
    </div>
  );
};

export default Index;
