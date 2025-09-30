import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Adminheader = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png" 
          alt="Book Store Logo"
          className="w-10 h-10"
        />
        <h1 className="text-xl font-semibold text-gray-800">BOOK STORE</h1>
      </div>

      {/* Right: Logout Button */}
      <button className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition">
        <FontAwesomeIcon icon={faPowerOff} className="text-gray-700" />
        <span className="text-gray-700 font-medium">Logout</span>
      </button>
    </header>
  );
};

export default Adminheader;
