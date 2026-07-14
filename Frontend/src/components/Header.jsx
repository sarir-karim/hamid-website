import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMail, FiMessageCircle, FiChevronDown } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isExperienceOpen, setIsExperienceOpen] = useState(false)
  const [isToursOpen, setIsToursOpen] = useState(false)
  const experienceRef = useRef(null)
  const toursRef = useRef(null)

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
  }

  // Close experiences dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (experienceRef.current && !experienceRef.current.contains(event.target)) {
        setIsExperienceOpen(false)
      }
      if (toursRef.current && !toursRef.current.contains(event.target)) {
        setIsToursOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/contact', label: 'Contact' }

  ]

  const topNavLinks = navLinks.slice(0, 2)
  const bottomNavLinks = navLinks.slice(2)

  const toursItems = [
    { label: 'All Tours', to: '/tours' },
    { label: 'Hunting Tour', to: '/hunting-tour' },
    { label: 'Treks', to: '/tours/treks' },
    { label: 'Expeditions', to: '/tours/expeditions' },
  ]

  const experienceItems = [
    { label: 'Culture & Heritage Tours', to: '/experiences/culture-heritage-tours' },
    { label: 'Passes', to: '/experiences/passes' },
    { label: 'Mountain Trainings', to: '/experiences/mountain-trainings' },
    { label: 'Expeditions', to: '/experiences/expeditions' },
    { label: 'Treks', to: '/experiences/treks' },
  ]

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
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center px-4 md:px-10 py-4 md:py-5">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 no-underline hover:opacity-80 transition-opacity"
          aria-label="Mountain Soul Adventure Home"
        >
          <div className="text-green-700 text-2xl font-bold" aria-hidden="true">▲</div>
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
        <div className="hidden md:flex items-center gap-8 w-1/2" aria-label="Main Navigation">
          {topNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-green-700 hover:text-green-900 no-underline text-md font-semibold transition-colors duration-200 ${
                  isActive ? 'text-green-900' : ''
                }`
              }
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="relative" ref={experienceRef}>
            <button
              type="button"
              onClick={() => setIsExperienceOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-green-700 hover:text-green-900 text-md font-semibold transition-colors duration-200"
              aria-expanded={isExperienceOpen}
              aria-haspopup="menu"
            >
              Experiences
              <FiChevronDown className={`h-4 w-4 transition-transform ${isExperienceOpen ? 'rotate-180' : ''}`} />
            </button>
            {isExperienceOpen && (
              <div className="absolute left-0 mt-2 w-64 overflow-hidden rounded-3xl border border-green-200 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.45)]">
                <div className="py-2">
                  {experienceItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-3 text-md text-gray-800 transition-colors duration-200 hover:bg-green-50 hover:text-green-900"
                      onClick={() => {
                        setIsExperienceOpen(false)
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

          <div className="relative" ref={toursRef}>
            <button
              type="button"
              onClick={() => setIsToursOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-green-700 hover:text-green-900 text-md font-semibold transition-colors duration-200"
              aria-expanded={isToursOpen}
              aria-haspopup="menu"
            >
              Tours
              <FiChevronDown className={`h-4 w-4 transition-transform ${isToursOpen ? 'rotate-180' : ''}`} />
            </button>
            {isToursOpen && (
              <div className="absolute left-0 mt-2 w-64 overflow-hidden rounded-3xl border border-green-200 bg-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.45)]">
                <div className="py-2">
                  {toursItems.map((item) => (
                    <Link
                      key={item.to}
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

          {bottomNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-green-700 hover:text-green-900 no-underline text-md font-semibold transition-colors duration-200 ${
                  isActive ? 'text-green-900' : ''
                }`
              }
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}
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
            className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col gap-0 py-4 md:hidden"
            aria-label="Mobile Navigation"
          >
            {topNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-green-700 hover:bg-green-50 hover:text-green-900 no-underline px-6 py-3 transition-colors duration-200 text-md font-semibold border-b border-gray-100 ${
                    isActive ? 'text-green-900' : ''
                  }`
                }
                onClick={handleNavClick}
              >
                {link.label}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={() => setIsExperienceOpen((prev) => !prev)}
              className="flex w-full items-center justify-between px-6 py-3 text-left text-green-900 text-md font-semibold transition-colors duration-200 hover:bg-green-50 hover:text-green-700 border-b border-green-100"
              aria-expanded={isExperienceOpen}
            >
              Experiences
              <FiChevronDown className={`h-4 w-4 transition-transform ${isExperienceOpen ? 'rotate-180' : ''}`} />
            </button>
            {isExperienceOpen && (
              <div className="bg-white">
                {experienceItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-8 py-2 text-md text-gray-700 hover:bg-green-50 hover:text-green-900"
                    onClick={() => {
                      setIsExperienceOpen(false)
                      handleNavClick()
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsToursOpen((prev) => !prev)}
              className="flex w-full items-center justify-between px-6 py-3 text-left text-green-900 text-md font-semibold transition-colors duration-200 hover:bg-green-50 hover:text-green-700 border-b border-green-100"
              aria-expanded={isToursOpen}
            >
              Tours
              <FiChevronDown className={`h-4 w-4 transition-transform ${isToursOpen ? 'rotate-180' : ''}`} />
            </button>
            {isToursOpen && (
              <div className="bg-white">
                {toursItems.map((item) => (
                  <Link
                    key={item.to}
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

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-green-700 hover:bg-green-50 hover:text-green-900 no-underline px-6 py-3 transition-colors duration-200 text-md font-semibold border-b border-gray-100 ${
                    isActive ? 'text-green-900' : ''
                  }`
                }
                onClick={handleNavClick}
              >
                {link.label}
              </NavLink>
            ))}
            <Link 
              to="/contact"
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
