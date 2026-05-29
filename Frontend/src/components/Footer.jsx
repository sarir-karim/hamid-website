import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-500 text-3xl font-bold">▲</span>
              <h3 className="text-white text-xl font-bold">Mountain Soul</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Explore with Soul. Authentic adventures across Pakistan's most breathtaking landscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#tours" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Tours
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Programs
                </a>
              </li>
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Destinations
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#mountaineering" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Mountaineering
                </a>
              </li>
              <li>
                <a href="#trekking" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Trekking
                </a>
              </li>
              <li>
                <a href="#cultural" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Cultural Tours
                </a>
              </li>
              <li>
                <a href="#hunting" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Hunting Expeditions
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-white" size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white" size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} <a href="#home" className="text-green-500 hover:text-green-400 transition-colors">Mountain Soul Adventure</a>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
