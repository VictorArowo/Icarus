const Footer = () => {
  return (
    <div className="fixed bottom-0 flex items-center justify-between w-full h-16 bg-sec-background">
      <div className="flex items-center">
        <img className="w-auto h-16" src="/logo.png" alt="" />
        <span className="text-2xl font-bold tracking-widest text-primary font-header">
          icarus
        </span>
      </div>
      <div className="flex items-center">
        <p className="hidden mr-3 text-primary-text sm:block">
          Get started with icarus
        </p>
        <span className="inline-flex mr-3 rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium font-bold leading-5 whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md md:text-lg text-md text-gray-50 bg-primary hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
          >
            Create a form
          </button>
        </span>
      </div>
    </div>
  );
};

export default Footer;
