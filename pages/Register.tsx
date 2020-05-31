import Link from "next/link";

const Register = () => {
  return (
    <div className="flex min-h-screen">
      <img
        src="https://images.unsplash.com/photo-1517817748493-49ec54a32465?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        className="object-cover w-6/12 bg-gray-800 "
      />
      <div className="flex-shrink-0 w-6/12 px-20 mt-64 min-w-96">
        <div className="flex items-center -ml-3">
          <img className="w-auto h-16" src="/logo.png" alt="" />
          <span className="text-2xl font-bold tracking-widest text-primary font-header">
            icarus
          </span>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-800">
          Welcome to icarus
        </h1>
        <p>
          Or{" "}
          <span className="mt-2 font-bold cursor-pointer text-primary">
            <Link href="/login">
              <a>log in to your account</a>
            </Link>
          </span>
        </p>

        <form className="mt-8">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Name
            </label>
            <div className="mt-1 shadow-sm">
              <input
                id="name"
                type="text"
                required
                className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 appearance-none focus:outline-none focus:shadow-outline-orange focus:border-primary sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1 shadow-sm">
              <input
                id="email"
                type="email"
                required
                className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 appearance-none focus:outline-none focus:shadow-outline-orange focus:border-primary sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="flex justify-between w-full mt-6 space-x-6">
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 shadow-sm">
                <input
                  id="password"
                  type="password"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 appearance-none focus:outline-none focus:shadow-outline-yellow focus:border-primary sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 shadow-sm">
                <input
                  id="password"
                  type="password"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 appearance-none focus:outline-none focus:shadow-outline-yellow focus:border-primary sm:text-sm sm:leading-5"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <span className="block w-full shadow-sm">
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-lg font-medium text-white transition duration-150 ease-in-out border border-transparent bg-primary hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
              >
                Join now
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
