export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-10 py-5">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center gap-2 no-underline hover:opacity-80 transition-opacity"
          aria-label="Mountain Soul Adventure Home"
        >
          <div className="text-green-700 text-2xl font-bold" aria-hidden="true">▲</div>
          <span className="text-gray-900 font-semibold text-lg">Mountain Soul Adventure</span>
        </a>

        {/* Navigation */}
        <nav 
          className="flex gap-8 items-center w-1/2" 
          aria-label="Main Navigation"
        >
          <a 
            href="#home" 
            className="text-green-700 hover:text-green-900 no-underline text-sm transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#tours" 
            className="text-green-700 hover:text-green-900 no-underline text-sm transition-colors duration-200"
          >
            Tours
          </a>
          <a 
            href="#programs" 
            className="text-green-700 hover:text-green-900 no-underline text-sm transition-colors duration-200"
          >
            Programs
          </a>
          <a 
            href="#destinations" 
            className="text-green-700 hover:text-green-900 no-underline text-sm transition-colors duration-200"
          >
            Destinations
          </a>
          <a 
            href="#about" 
            className="text-green-700 hover:text-green-900 no-underline text-sm transition-colors duration-200"
          >
            About Us
          </a>
          <a 
            href="#gallery" 
            className="text-green-700 hover:text-green-900 no-underline text-sm transition-colors duration-200"
          >
            Gallery
          </a>
          <a 
            href="#contact" 
            className="text-green-700 hover:text-green-900 no-underline text-sm transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Book Now Button */}
        <button 
          className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition-colors duration-200 font-medium text-sm"
          aria-label="Book a tour now"
        >
          Book Now
        </button>
      </div>
    </header>
  )
}
