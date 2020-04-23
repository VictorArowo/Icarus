import React from "react";
import PlusIcon from "../icons/PlusIcon";

const FloatingActionButton = () => {
  return (
    <button className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white focus:outline-none hover:opacity-75 transition duration-150 focus:shadow-outline shadow-xl">
      <div className="w-7 h-7">
        <PlusIcon />
      </div>
    </button>
  );
};

export default FloatingActionButton;
