import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Careers = () => {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 lg:px-16">
        {/* Top Section */}
        <div className="text-center items-center py-10">
          <h1 className="text-3xl font-bold my-3">Careers</h1>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex, ratione aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis aut atque!
          </p>
        </div>

        {/* Current Openings */}
        <div className="my-10 items-center">
          <h1 className="text-2xl font-bold text-center">Current Openings</h1>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 my-10 justify-center items-center">
            <input
              type="text"
              placeholder="Job Title"
              className="p-2 border border-gray-300 text-black w-full sm:w-64 rounded sm:rounded-l"
            />
            <button className="px-6 py-2 text-white bg-green-700 rounded sm:rounded-r w-full sm:w-auto">
              Search
            </button>
          </div>

          {/* Job Card 1 */}
          <div className="border border-gray-200 p-5 shadow my-5 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="w-full">
                <h1 className="text-xl font-semibold">Hr Assistant</h1>
                <hr className="my-2" />
                <p>📍 Kochi</p>
                <p>Job Type: Full-time</p>
                <p>Salary: 20000 - 30000 /month</p>
                <p>Qualification: </p>
                <p>Experience: 1-2 yr</p>
                <p>Description: </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded self-start sm:self-center">
                Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="border border-gray-200 p-5 shadow my-5 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="w-full">
                <h1 className="text-xl font-semibold">Frontend Developer</h1>
                <hr className="my-2" />
                <p>📍 Trivandrum</p>
                <p>Job Type: Full-time</p>
                <p>Salary: </p>
                <p>Qualification: </p>
                <p>Experience: </p>
                <p>Description: </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded self-start sm:self-center">
                Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Careers
