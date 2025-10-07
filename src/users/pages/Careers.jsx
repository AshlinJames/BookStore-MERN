import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowsLeftRight, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'


const Careers = () => {
  const [careerModal, setCareerModal] = useState(false)

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
                Apply<FontAwesomeIcon size='2x' icon={faSquareArrowUpRight} onClick={() => setCareerModal(true)} />
              </button>
            </div>
          </div>


        </div>
      </div>
      {/* modal */}

      {careerModal && <div className='relative z-10 ' >
        <div className="bg-gray-500/75 fixed inset-0 transition-opacity">
          <div className="justify-center flex items-center md:min-h-screen">
            <div className='bg-white text-black md:h-100 md:w-200 w-100 rounded'>
              <div className='bg-black text-white flex justify-between items-center p-3'>
                <h3>Application Form</h3>
                <FontAwesomeIcon icon={faXmark} onClick={() => setCareerModal(false)} />
              </div>
              <div className=' m-6 md:w-180  items-center  text center '>
                <div className='md:grid md:grid-cols-2 my-5 '>
                  <input type="text" placeholder='Full Name' className='m-2 border ' />
                  <input type="text" placeholder='Qualification' className='m-2 border ' />
                  <input type="email" placeholder='Email' className='m-2 border ' />
                  <input type="Phone" placeholder='Full Name' className='m-2 border ' />
                </div>
                <textarea type="text" rows={3} placeholder='Cover Letter' className='md:w-180 px-2 border ' />

                <div className='flex justify-start md:w-180 my-4 border '>
                  <div className='px-10 py-1 bg-gray-300 text-black'>Chose file</div>
                  <input type="file" className="py-1 px-10 " placeholder='No file chosen' />
                </div>
                <div className='flex justify-end md:w-180 my-4'>
                  <button className=' rounded bg-red-500 text-white w-30 p-2 m-2'>Reset</button>
                  <button className=' rounded bg-green-500 text-white w-30 p-2 m-2' onClick={() => setCareerModal(false)}>Submit</button>
                </div>

              </div>


            </div>
          </div>
        </div>
      </div>
      }
      <Footer />
    </>
  )
}

export default Careers
