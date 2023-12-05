import './globals.css'
import { Inter } from 'next/font/google'
import Navbar1 from './navbar1'
import Navbar2 from './navbar2'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar1/>
        <Navbar2/>
        
        {/* <Footer/> */}
        {children}</body>
    </html>
  )
}

