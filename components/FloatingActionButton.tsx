import React from "react";
import PlusIcon from "../icons/PlusIcon";

const FloatingActionButton = () => {
  return (
    <button className="absolute flex items-center justify-center w-12 h-12 text-white transition duration-150 rounded-full shadow-xl sm:w-16 sm:h-16 bottom-5 sm:bottom-10 right-5 sm:right-10 bg-primary focus:outline-none hover:bg-yellow-600 focus:border-yellow-700 focus:shadow-outline-blue active:bg-yellow-800">
      <div className="w-7 h-7">
        <PlusIcon />
      </div>
    </button>
  );
};

export default FloatingActionButton;
