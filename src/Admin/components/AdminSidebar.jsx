import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookOpen,
  faBriefcase,
  faCog,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AdminSidebar = () => {
  return (
    <aside className="w-full md:w-1/4 bg-gray-100 p-6 border-r border-gray-200 min-h-screen">
      {/* Profile */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-4xl text-gray-600" />
        </div>
        <h2 className="mt-4 text-lg font-semibold">Username</h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 text-gray-700">
        <button className="flex items-center gap-2 hover:text-blue-600 transition">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600 transition">
          <FontAwesomeIcon icon={faBookOpen} />
          <span>All Books</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600 transition">
          <FontAwesomeIcon icon={faBriefcase} />
          <span>Careers</span>
        </button>
        <button className="flex items-center gap-2 text-blue-600 font-semibold">
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
