import React from "react";
import { Link } from "react-router-dom";

const Pnf = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen px-4">
      {/* Illustration */}
      <img
        src="https://clipart-library.com/image_gallery/n1577670.gif"
        alt="Page Not Found"
        className="w-72 sm:w-96 mb-6"
      />

      {/* Text */}
      <h2 className="text-lg text-gray-600 mb-2">Oh No!</h2>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Look Like You're Lost
      </h1>
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
      >
        Back Home
      </Link>
    </div>
  );
};

export default Pnf;
