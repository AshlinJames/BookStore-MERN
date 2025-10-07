import React, { useState } from 'react'
import Header  from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ViewBook = () => {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Header />

      <div className="min-h-screen px-4 md:px-10 py-10 flex flex-col items-center">
        {/* Book Card */}
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row">
          {/* Left - Book Image */}
          <div className="flex justify-center md:justify-start md:w-1/3">
            <img
              src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"
              alt="Ikigai Book"
              className="w-60 md:w-72 rounded shadow"
            />
          </div>

          {/* Right - Book Info */}
          <div className="mt-6 md:mt-0 md:ml-10 md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ikigai: The Japanese Secret to a Long and Happy Life
            </h2>
            <p className="text-blue-500 mb-4">
              - Héctor García, Francesc Miralles
            </p>
            <button onClick={() => setModalStatus(true)}> <FontAwesomeIcon icon={faEye} className='text-gray-400' /></button>


            <div className="text-sm md:text-base space-y-1">
              <p>
                <b>Publisher:</b> Penguin Life
              </p>
              <p>
                <b>Language:</b> English
              </p>
              <p>
                <b>No. of pages:</b> 208
              </p>
              <p>
                <b>Seller Mail:</b> maxwell@gmail.com
              </p>
              <p>
                <b>Real Price:</b> $15
              </p>
              <p>
                <b>ISBN:</b> 978-0143130727
              </p>
            </div>

            {/* Book Description */}
            <p className="mt-4 text-gray-700 text-justify leading-relaxed">
              Ikigai is a Japanese concept that combines the words "iki" (life)
              and "gai" (worth). The book explores the principles of Ikigai, or
              the reason for being, and how it leads to a long, fulfilling, and
              happy life. It presents the stories of the people from Okinawa,
              the place with the highest life expectancy, to understand their
              ways of living and what keeps them happy. The authors blend the
              ancient wisdom of the Japanese with modern psychological
              principles to offer insights on how to live a more meaningful and
              purpose-driven life.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/all-books"
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center px-5 py-2 rounded-lg shadow transition"
              >
                Back
              </Link>
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow transition">
                Buy $13
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {modalStatus && <div className='relative z-10 ' onClick={() => setModalStatus(false)}>
        <div className="bg-gray-500/75 fixed inset-0 transition-opacity">
          <div className="justify-center flex items-center md:min-h-screen">
            <div className='bg-white text-black md:h-100 md:w-200 w-100 rounded'>
              <div className='bg-black text-white flex justify-between items-center p-3'>
                <h3>Books Images</h3>
                <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)} />
              </div>
              <p className='text-blue-600 my-5 ml-5'>
                <FontAwesomeIcon icon={faCamera} className='me-2' />
                Camera click of the book in the hand of seller
              </p>

              <div className="md-flex flex-cols-3 flex-wrap my-4">
                {/* duplicate images */}
                <img className='' style={{ width: "250px", height: "250px" }} src=" https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?cs=srgb&dl=assortment-book-bindings-books-1130980.jpg&fm=jpg" alt="book images" />

              </div>
            </div>
          </div>
        </div>
      </div>}

      <Footer />
    </>
  );
};

export default ViewBook;
