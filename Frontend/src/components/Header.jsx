import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMail, FiMessageCircle, FiChevronDown } from 'react-icons/fi'
import logo from '../assets/logo.jpeg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isToursOpen, setIsToursOpen] = useState(false)
  const [isExpeditionsOpen, setIsExpeditionsOpen] = useState(false)
  const toursRef = useRef(null)
  const mobileNavRef = useRef(null)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close menu when a link is clicked
  const handleNavClick = () => {
    setIsMenuOpen(false)
    setIsToursOpen(false)
    setIsExpeditionsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedDesktopTours = toursRef.current?.contains(event.target)
      const clickedMobileNav = mobileNavRef.current?.contains(event.target)

      if (!clickedDesktopTours && !clickedMobileNav) {
        setIsToursOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const primaryLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' }
  ]

  const secondaryLinks = [
    { to: '/tours?type=Trekking%20%26%20Hiking', label: 'Trekking' },
    { to: '/tours?type=Mountaineering', label: 'Expeditions' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/contact', label: 'Contact us' }
  ]

  const expeditionDropdownItems = [
    { label: 'Hunting Expeditions', to: '/tours?type=Hunting%20Expeditions' }
  ]

  const toursDropdownItems = [
    { label: 'Cultural & Heritage Tours', to: '/tours?type=Cultural%20Tours' },
    { label: 'Customized Private Tours', to: '/tours?type=Customized%20Private%20Tours' },
    { label: 'Corporate & Group Tours', to: '/tours?type=Corporate%20%26%20Group%20Tours' }
  ]

  const closeToursDropdown = () => {
    window.setTimeout(() => {
      const isStillHovered = toursRef.current && toursRef.current.matches(':hover')
      if (!isStillHovered) {
        setIsToursOpen(false)
      }
    }, 120)
  }

  return (
    <>
      <div className="bg-green-900 text-white text-sm py-2 px-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <span className="font-semibold">License No: PK-PTA-2026-001</span>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@mountainsoul.com"
              className="flex items-center gap-1 text-md hover:text-green-100"
            >
              <FiMail size={14} />
              info@mountainsoul.com
            </a>
            <a
              href="https://wa.me/923463323625"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-md hover:text-green-100"
            >
              <FiMessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <header className="bg-white shadow-sm sticky top-0 z-50 py-2">
        <div className="flex justify-between items-center py-0 px-4 md:px-10">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 no-underline hover:opacity-80 transition-opacity"
          aria-label="Mountain Soul Adventure Home "
        >
          <div className="h-20 w-20">
          <img
            src={logo}
            alt="Mountain Soul Adventure logo"
            className=" rounded-full h-full w-full object-cover border border-green-200 shadow-sm"
          />
          </div>
          <span className="text-gray-900 font-semibold text-sm md:text-lg">Mountain Soul Adventure</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-green-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-green-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-green-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end gap-6 lg:gap-8" aria-label="Main Navigation">
          {primaryLinks.map((link) => (
            <NavLink
              key={`${link.to}-${link.label}`}
              to={link.to}
              className={({ isActive }) =>
                `text-green-700 hover:text-green-900 no-underline text-md font-100 transition-colors duration-200 ${
                  isActive ? 'text-green-900' : ''
                }`
              }
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}

          <div
            className="relative"
            ref={toursRef}
            onMouseEnter={() => setIsToursOpen(true)}
            onMouseLeave={closeToursDropdown}
          >
            <button
              type="button"
              onClick={() => setIsToursOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-green-700 hover:text-green-900 text-md font-100 transition-colors duration-200"
              aria-expanded={isToursOpen}
              aria-haspopup="menu"
            >
              Tours
              <FiChevronDown className={`h-4 w-4 transition-transform ${isToursOpen ? 'rotate-180' : ''}`} />
            </button>
            {isToursOpen && (
              <div
                className="absolute left-0 mt-2 w-72 overflow-hidden rounded-3xl border border-green-200 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.45)]"
                onMouseEnter={() => setIsToursOpen(true)}
                onMouseLeave={closeToursDropdown}
              >
                <div className="py-2">
                  {toursDropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block px-4 py-3 text-md text-gray-800 transition-colors duration-200 hover:bg-green-50 hover:text-green-900"
                      onClick={() => {
                        setIsToursOpen(false)
                        handleNavClick()
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {secondaryLinks.map((link) => {
            if (link.label === 'Expeditions') {
              return (
                <div key={link.label} className="relative group">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-green-700 hover:text-green-900 text-md font-100 transition-colors duration-200"
                    onClick={() => window.location.href = link.to}
                  >
                    {link.label}
                    <FiChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-56 overflow-hidden rounded-3xl border border-green-200 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.45)]">
                      <div className="py-2">
                        {expeditionDropdownItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="block px-4 py-3 text-md text-gray-800 transition-colors duration-200 hover:bg-green-50 hover:text-green-900"
                            onClick={() => {
                              handleNavClick()
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <NavLink
                key={`${link.to}-${link.label}`}
                to={link.to}
                className={({ isActive }) =>
                  `text-green-700 hover:text-green-900 no-underline text-md font-100 transition-colors duration-200 ${
                    isActive ? 'text-green-900' : ''
                  }`
                }
                onClick={handleNavClick}
              >
                {link.label}
              </NavLink>
            )
          })}
        </div>

        {/* Desktop Book Now Button */}
        <Link 
          to="/book-now"
          className="hidden md:inline-flex bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition-colors duration-200 font-medium text-sm"
          aria-label="Book a tour now"
        >
          Book Now
        </Link>

        {/* Mobile Navigation Menu */}
        {isMobile && isMenuOpen && (
          <nav 
            ref={mobileNavRef}
            className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col gap-0 py-4 md:hidden"
            aria-label="Mobile Navigation"
          >
            {primaryLinks.map((link) => (
              <NavLink
                key={`${link.to}-${link.label}`}
                to={link.to}
                className={({ isActive }) =>
                  `text-green-700 hover:bg-green-50 hover:text-green-900 no-underline px-6 py-3 transition-colors duration-200 text-md font-100 border-b border-gray-100 ${
                    isActive ? 'text-green-900' : ''
                  }`
                }
                onClick={handleNavClick}
              >
                {link.label}
              </NavLink>
            ))}

            <div className="flex items-center border-b border-green-100">
              <Link
                to="/tours"
                className="flex-1 px-6 py-3 text-md font-100 text-green-900 transition-colors hover:bg-green-50 hover:text-green-700"
                onClick={handleNavClick}
              >
                Tours
              </Link>
              <button
                type="button"
                onClick={() => setIsToursOpen((prev) => !prev)}
                className="flex h-12 w-14 items-center justify-center text-green-800 transition-colors hover:bg-green-50"
                aria-label="Toggle Tours submenu"
                aria-expanded={isToursOpen}
                aria-controls="mobile-tours-menu"
              >
                <FiChevronDown className={`h-4 w-4 transition-transform ${isToursOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {isToursOpen && (
              <div id="mobile-tours-menu" className="bg-white border-b border-gray-100">
                {toursDropdownItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block px-8 py-2 text-md text-gray-700 hover:bg-green-50 hover:text-green-900"
                    onClick={() => {
                      setIsToursOpen(false)
                      handleNavClick()
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {secondaryLinks.map((link) => {
              if (link.label === 'Expeditions') {
                return (
                  <div key={link.label} className="border-b border-gray-100">
                    <div className="flex items-center border-b border-gray-100">
                      <NavLink
                        to={link.to}
                        className="flex-1 px-6 py-3 text-md font-100 text-green-700 transition-colors hover:bg-green-50 hover:text-green-900"
                        onClick={handleNavClick}
                      >
                        {link.label}
                      </NavLink>
                      <button
                        type="button"
                        className="flex h-12 w-14 items-center justify-center text-green-800 transition-colors hover:bg-green-50"
                        onClick={() => setIsExpeditionsOpen((prev) => !prev)}
                        aria-label="Toggle Expeditions submenu"
                        aria-expanded={isExpeditionsOpen}
                        aria-controls="mobile-expeditions-menu"
                      >
                        <FiChevronDown className={`h-4 w-4 transition-transform ${isExpeditionsOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {isExpeditionsOpen && (
                      <div id="mobile-expeditions-menu" className="bg-white">
                        {expeditionDropdownItems.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="block px-8 py-3 text-md text-gray-700 hover:bg-green-50 hover:text-green-900"
                            onClick={handleNavClick}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <NavLink
                  key={`${link.to}-${link.label}`}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-green-700 hover:bg-green-50 hover:text-green-900 no-underline px-6 py-3 transition-colors duration-200 text-md font-100 border-b border-gray-100 ${
                      isActive ? 'text-green-900' : ''
                    }`
                  }
                  onClick={handleNavClick}
                >
                  {link.label}
                </NavLink>
              )
            })}
            <Link 
              to="/book-now"
              className="bg-green-900 text-white mx-4 my-2 px-6 py-2 rounded hover:bg-green-800 transition-colors duration-200 font-medium text-sm text-center"
              aria-label="Book a tour now"
              onClick={handleNavClick}
            >
              Book Now
            </Link>
          </nav>
        )}
        </div>
      </header>
    </>
  )
}
