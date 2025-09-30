import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      {/* Hero / Landing Section */}
      <div className="flex flex-col justify-center items-center text-white bg-cover bg-center bg-[url(/bg.jpg)] h-screen px-5 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Wonderful Gifts</h1>
        <p className="mt-3 text-sm sm:text-base md:text-lg">
          Give your family and friends a book
        </p>
        <div className="mt-6 relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Books"
            className="h-11 w-full rounded-xl bg-white text-gray-600 pl-4 pr-10 text-sm sm:text-base focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-3 top-3.5 text-blue-500"
          />
        </div>
      </div>

      {/* Latest Collection */}
      <section className="px-5 md:px-20 lg:px-40 flex flex-col justify-center items-center py-10">
        <h1 className="text-xl sm:text-2xl font-bold text-center">Explore Our Latest Collection</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-8">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180"
                alt="book"
                className="w-full h-56 object-cover"
              />
              <div className="flex flex-col justify-center items-center py-3">
                <p className="text-blue-700 font-bold">Author</p>
                <p className="text-gray-800">Book Title</p>
                <p className="text-gray-600">$400</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/all-books"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Explore More...
          </Link>
        </div>
      </section>

      {/* Featured Author */}
      <section className="px-5 md:px-20 lg:px-40 py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <h1 className="text-lg font-bold uppercase">Featured Authors</h1>
          <h2 className="text-xl sm:text-2xl mb-4">Captivates with every word</h2>
          <p className="text-justify text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
            recusandae ut neque enim maiores cum, modi id beatae velit atque aperiam
            explicabo aut perspiciatis quia! Suscipit iusto dolores enim maxime.
          </p>
          <p className="text-justify text-gray-700 mb-4">
            Explicabo dolorem, doloribus cum, facilis eligendi iste reiciendis, ipsum
            consequuntur perferendis nulla corrupti officia. Beatae, at debitis totam
            eaque explicabo dolores ab assumenda commodi velit ex.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            className="rounded-lg shadow-xl w-72 sm:w-96 object-cover"
            src="https://tse2.mm.bing.net/th/id/OIP.O8vv9O4Ku4HvFQyep-NXMAHaLG?pid=Api&P=0&h=180"
            alt="author"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 md:px-20 lg:px-40 py-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold uppercase">Testimonials</h1>
        <h2 className="text-base sm:text-lg md:text-xl mb-6">See What Others Are Saying</h2>
        <div className="flex flex-col justify-center items-center max-w-3xl">
          <img
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-4 shadow"
            src="https://tse2.mm.bing.net/th/id/OIP.O8vv9O4Ku4HvFQyep-NXMAHaLG?pid=Api&P=0&h=180"
            alt="testimonial"
          />
          <h4 className="font-semibold text-lg">Treesa Joseph</h4>
          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sit
            aspernatur, quo nemo dignissimos obcaecati, libero ipsa rem nulla harum
            magnam quae recusandae dolorem necessitatibus totam ipsum ab aut debitis!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
