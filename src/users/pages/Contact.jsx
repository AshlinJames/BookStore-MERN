import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <>
      <Header />

      {/* Top Section */}
      <div className="text-center items-center px-4 py-10">
        <h1 className="text-3xl font-bold my-3">Contacts</h1>
        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore placeat nemo voluptatem iure, iste asperiores quia amet sint, similique corrupti praesentium delectus nesciunt odit laudantium. Beatae repudiandae amet odit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque ullam itaque atque totam quasi molestias cumque ducimus fuga voluptate suscipit vel distinctio omnis voluptates obcaecati quidem quas iure? Facere?
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center my-8 px-6">
        {/* Location */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-4 mb-3">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
          </div>
          <p className="text-sm sm:text-base">
            123 Main Street, Apt 4B, <br /> Anytown, CA 91234
          </p>
        </div>
        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-4 mb-3">
            <FontAwesomeIcon icon={faPhone} className="text-2xl" />
          </div>
          <p className="text-sm sm:text-base">+91 9874561230</p>
        </div>
        {/* Email */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full p-4 mb-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
          </div>
          <p className="text-sm sm:text-base">Bookstore@gmail.com</p>
        </div>
      </div>

      {/* Form + Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-20 my-10">
        {/* Form */}
        <div className="bg-gray-100 rounded-lg shadow p-6 text-center">
          <h1 className="text-lg font-semibold mb-4">Send me Message</h1>
          <input
            className="bg-white border p-2 rounded w-full mb-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-white border p-2 rounded w-full mb-3"
            type="email"
            placeholder="Email Id"
          />
          <textarea
            className="bg-white border p-2 rounded w-full mb-3 h-28"
            placeholder="Message"
          />
          <button className="bg-black hover:bg-gray-800 transition text-white px-4 py-2 rounded w-full flex justify-center items-center gap-2">
            Send <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>

        {/* Map */}
        <div className="w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62870.73449973762!2d76.29629185167815!3d9.982047399734459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Python%2C%20Data%20Science%2C%20AI%2C%20ASP.NET%2C%20Flutter%2C%20Software%20Testing%20Training%20Institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1758722389368!5m2!1sen!2sin"
            className="w-full h-full rounded-lg border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact
