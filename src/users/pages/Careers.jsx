import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'



const Careers = () => {
  return (
    <>
      <Header />
      <div>
        <div className=" text-center items-center p-10">
          <h1 className='text-3xl my-3'>Careers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex,ratione  aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis aut atque!
          </p>
        </div>
        <div className='my-10 items-center'>
          <h1 className='text-2xl  font-bold'>Current Openings</h1>
          <div className="flex my-10 justify-center items-center">
            <input
              type="text"
              placeholder="Job Title"
              className="p-2 border border-gray-300 text-black w-100 "
            />
            <button className="px-4 py-2 text-white bg-blue-600 rounded-b sm:rounded-r sm:rounded-b-none mt-2 sm:mt-0">
              Search
            </button>
          </div>
          {/* duplicate job openings */}
          <div className="border border-gray-200 p-5 shadow my-5">
            <div className="flex mb-5">
              <div className='w-full'>
                <h1 className="text-xl">Hr Assistant</h1>
                <hr />
              </div>
              <button className='bg-blue-900 text-white p-2 ms-5 items-center'>Apply<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-1' /></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Careers