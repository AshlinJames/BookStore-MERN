import React from "react";
import Adminheader from "../components/Adminheader";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPen } from "@fortawesome/free-solid-svg-icons";

const SettingAdmin = () => {
  return (
    <>
      <Adminheader />

      {/* Top welcome bar */}
      <div className="bg-gray-800 text-white text-center text-sm py-2">
        Welcome, Admin! &nbsp; You’re all set to manage and monitor the system. Let’s get to work!
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6 text-center md:text-left">Settings</h1>

          {/* Dummy content */}
          <div className="space-y-4 mb-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia
              asperiores in cupiditate voluptatum quisquam nemo vitae odio, facilis aperiam. Ipsum
              incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed neque, facilis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id maxime quia
              asperiores in cupiditate voluptatum quisquam nemo vitae odio, facilis aperiam. Ipsum
              incidunt labore asperiores! Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed neque, facilis, consequatur quos eveniet inventore
              ipsam beatae iure!
            </p>
          </div>

          {/* Settings Card */}
          <div className="bg-blue-100 rounded-lg shadow-md p-6 max-w-md mx-auto">
            {/* Profile Icon */}
            <div className="flex justify-center mb-4 relative">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-4xl text-gray-600" />
              </div>
              <button className="absolute bottom-2 right-[38%] bg-yellow-400 rounded-full p-1 shadow">
                <FontAwesomeIcon icon={faPen} className="text-xs text-gray-700" />
              </button>
            </div>

            {/* Form */}
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <div className="flex justify-between mt-4">
                <button
                  type="reset"
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded w-[48%]"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-[48%]"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default SettingAdmin;
