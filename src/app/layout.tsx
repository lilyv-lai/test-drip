import "./globals.css";
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen vsc-initialized">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
