import Link from 'next/link'
import { lato } from '../app/fonts'

export default function Navbar() {
  return (
    <nav className="bg-[#43403A] text-white px-6 py-9 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Drip Ca Phe</Link>
        <div className="flex items-center space-x-6">
          <Link
            href="/menu"
            className={`${lato.className} font-bold text-white relative transition-all duration-300 ease-in-out hover:text-[#E7E7E7] 
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#E7E7E7] 
                        hover:after:w-full after:transition-all after:duration-300`}
            >
            MENU
            </Link>

            <Link
            href="/contact"
            className={`${lato.className} font-bold text-white relative transition-all duration-300 ease-in-out hover:text-[#E7E7E7] 
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#E7E7E7] 
                        hover:after:w-full after:transition-all after:duration-300`}
            >
            CONTACT
            </Link>

            <Link
            href="/faq"
            className={`${lato.className} font-bold text-white relative transition-all duration-300 ease-in-out hover:text-[#E7E7E7] 
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#E7E7E7] 
                        hover:after:w-full after:transition-all after:duration-300`}
            >
            FAQ
            </Link>
        </div>

        <div className="space-x-4">
        <Link
            href="/menu"
            className={`${lato.className} text-white border-2 border-white bg-[#43403A] font-bold rounded-full px-5 py-2.5 text-center me-2 mb-2
                        transition-all duration-300 ease-in-out
                        hover:text-[#43403A] hover:bg-white hover:shadow-lg hover:scale-105`}>
            ORDER ONLINE
        </Link>
        </div>

      </div>
    </nav>
  )
}
