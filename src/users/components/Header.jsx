import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Top Header */}
      <div className="relative flex justify-between items-center p-3 sm:p-4 border-b">
        {/* Logo (left) */}
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </div>

        {/* Title (center absolute, always centered) */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-serif whitespace-nowrap">
          BOOK STORE
        </h1>

        {/* Desktop Social + Login (right) */}
        <div className="hidden md:flex items-center space-x-4">
          <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-gray-500" />
          <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-gray-500" />
          <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-gray-500" />
          <Link to="/login">
            <button className="border px-3 py-1 lg:px-4 lg:py-2 rounded text-sm md:text-base hover:bg-black hover:text-white transition">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button (right) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:block bg-black text-white">
        <ul className="flex justify-center space-x-6 md:space-x-8 lg:space-x-12 py-2 text-sm md:text-base lg:text-lg">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/all-books" className="hover:text-gray-300">Books</Link></li>
          <li><Link to="/careers" className="hover:text-gray-300">Careers</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile Navbar (Dropdown under header) */}
      <div
        className={`md:hidden bg-black text-white transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-3 space-y-3 text-sm sm:text-base">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/all-books" onClick={() => setMenuOpen(false)}>Books</Link></li>
          <li><Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="border px-3 py-1 rounded hover:bg-white hover:text-black transition">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
