import Link from 'next/link'
import { lato } from '../app/fonts'

export default function Navbar() {
  return (
    <nav className="bg-[#43403A] text-white px-6 py-9">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Drip Ca Phe</Link>
        <div className="flex items-center space-x-6">
          <Link href="/menu" className={`${lato.className} font-bold hover:underline`}>MENU</Link>
          <Link href="/contact" className={`${lato.className} font-bold hover:underline`}>CONTACT</Link>
          <Link href="/faq" className={`${lato.className} font-bold hover:underline`}>FAQ</Link>
        </div>
        <div className="space-x-4">
          <Link href="/menu" className={`${lato.className} rounded-full border-2 border-white bg-[#43403A] text-white px-5 py-2 font-bold hover:underline transition-colors`}>ORDER ONLINE</Link>
        </div>
      </div>
    </nav>
  )
}
