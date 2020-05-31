import React from "react";
import PlusIcon from "../icons/PlusIcon";

const FloatingActionButton = () => {
  return (
    <button className="absolute flex items-center justify-center w-16 h-16 text-white transition duration-150 rounded-full shadow-xl bottom-10 right-10 bg-primary focus:outline-none hover:bg-yellow-600 focus:border-yellow-700 focus:shadow-outline-blue active:bg-yellow-800">
      <div className="w-7 h-7">
        <PlusIcon />
      </div>
    </button>
  );
};

export default FloatingActionButton;
