import { useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const TAWK_SCRIPT_ID = 'tawk-to-script'
const TAWK_SCRIPT_URL = 'https://embed.tawk.to/6abee58be4b7de3446fe1e19/default'

export default function TawkChat() {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = window.Tawk_LoadStart || new Date()

    if (document.getElementById(TAWK_SCRIPT_ID)) return

    const script = document.createElement('script')
    script.id = TAWK_SCRIPT_ID
    script.async = true
    script.src = TAWK_SCRIPT_URL
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    document.head.appendChild(script)
  }, [])

  return (
    <a
      href="https://wa.me/923463323625"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed right-6 bottom-[95px] z-[2147483647] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
    >
      <FaWhatsapp size={30} aria-hidden="true" />
    </a>
  )
}