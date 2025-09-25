import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AllBooks() {
  const [listStatus, setListStatus] = useState(false)

  return (
    <>
      <Header />

      {/* Title + Search */}
      <div className="flex flex-col justify-center items-center my-6 px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center">Collections</h1>
        <div className="flex flex-col sm:flex-row my-5 w-full sm:w-2/3 lg:w-1/2">
          <input
            type="text"
            placeholder="Search by Title"
            className="p-2 rounded-t sm:rounded-l sm:rounded-t-none border border-gray-300 text-black flex-1"
          />
          <button className="px-4 py-2 text-white bg-blue-600 rounded-b sm:rounded-r sm:rounded-b-none mt-2 sm:mt-0">
            Search
          </button>
        </div>
      </div>

      {/* Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:px-20 p-5 gap-6">

        {/* Filters */}
        <div className="col-span-1 bg-gray-50 p-4 rounded shadow-md">
          <div className="flex justify-between">
            <h1 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              Filters
            </h1>
            <button onClick={() => setListStatus(!listStatus)} className="md:hidden text-2xl" ><FontAwesomeIcon icon={faBars} /></button>

          </div>

         <div className={listStatus?'block':'md:block hidden'} >
            <div className="mt-3 flex items-center">
              <input type="radio" id="literary" name="filter" />
              <label className="ml-2" htmlFor="literary">Literary </label>
            </div>
  
            <div className="mt-3 flex items-center">
              <input type="radio" id="philosophy" name="filter" />
              <label className="ml-2" htmlFor="philosophy">Philosophy</label>
            </div>
  
            <div className="mt-3 flex items-center">
              <input type="radio" id="romance" name="filter" />
              <label className="ml-2" htmlFor="romance">Romance</label>
            </div>
  
            <div className="mt-3 flex items-center">
              <input type="radio" id="mystery" name="filter" />
              <label className="ml-2" htmlFor="mystery">Mystery/Thriller</label>
            </div>
  
            <div className="mt-3 flex items-center">
              <input type="radio" id="horror" name="filter" />
              <label className="ml-2" htmlFor="horror">Horror</label>
            </div>
  
            <div className="mt-3 flex items-center">
              <input type="radio" id="biography" name="filter" />
              <label className="ml-2" htmlFor="biography">Auto/Biography</label>
            </div>
  
            <div className="mt-3 flex items-center">
              <input type="radio" id="selfhelp" name="filter" />
              <label className="ml-2" htmlFor="selfhelp">Self-Help</label>
            </div>
  
            <div className="mt-3 flex items-center">
              <input type="radio" id="politics" name="filter" />
              <label className="ml-2" htmlFor="politics">Politics</label>
            </div>
  
            <div className="mt-3 flex items-center">
              <input type="radio" id="nofilter" name="filter" />
              <label className="ml-2" htmlFor="nofilter">No-Filter</label>
            </div>
         </div>
        </div>

        {/* Books */}
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* Book 1 */}
            <div className="shadow-lg rounded-lg p-3 hover:scale-105 transition duration-300">
              <img
                src="photo.png"
                alt="book"
                className="w-full rounded"
              />
              <div className="flex flex-col justify-center items-center mt-3">
                <p className="text-blue-700 font-bold text-sm md:text-base">Dan Brown</p>
                <p className="font-medium text-sm md:text-base text-center">The Da Vinci Code</p>
                <Link to="/books/:id/view" className="bg-blue-800 px-3 py-1 text-white mt-2 rounded text-sm md:text-base">
                  View Book
                </Link>
              </div>
            </div>

            {/* Book 2 */}
            <div className="shadow-lg rounded-lg p-3 hover:scale-105 transition duration-300">
              <img
                src="photo.png"
                alt="book"
                className="w-full rounded"
              />
              <div className="flex flex-col justify-center items-center mt-3">
                <p className="text-blue-700 font-bold text-sm md:text-base">Paulo Coelho</p>
                <p className="font-medium text-sm md:text-base text-center">The Alchemist</p>
                <Link to="/books/:id/view" className="bg-blue-800 px-3 py-1 text-white mt-2 rounded text-sm md:text-base">
                  View Book
                </Link>
              </div>
            </div>

            {/* Book 3 */}
            <div className="shadow-lg rounded-lg p-3 hover:scale-105 transition duration-300">
              <img
                src="photo.png"
                alt="book"
                className="w-full rounded"
              />
              <div className="flex flex-col justify-center items-center mt-3">
                <p className="text-blue-700 font-bold text-sm md:text-base">Harper Lee</p>
                <p className="font-medium text-sm md:text-base text-center">To Kill a Mockingbird</p>
                <Link to="/books/:id/view" className="bg-blue-800 px-3 py-1 text-white mt-2 rounded text-sm md:text-base">
                  View Book
                </Link>
              </div>
            </div>

            {/* Book 4 */}
            <div className="shadow-lg rounded-lg p-3 hover:scale-105 transition duration-300">
              <img
                src="photo.png"
                alt="book"
                className="w-full rounded"
              />
              <div className="flex flex-col justify-center items-center mt-3">
                <p className="text-blue-700 font-bold text-sm md:text-base">George Orwell</p>
                <p className="font-medium text-sm md:text-base text-center">1984</p>
                <Link to="/books/:id/view" className="bg-blue-800 px-3 py-1 text-white mt-2 rounded text-sm md:text-base">
                  View Book
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AllBooks;
