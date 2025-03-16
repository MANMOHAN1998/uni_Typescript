"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-book-blue/10 backdrop-blur-sm p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          <img src="/logo.png"
          alt="Logo"
          style={{ width: "50px", height: "50px", marginRight: "15px" }}
          />
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <NavLink href="/" mobile>
            Home
          </NavLink>
          <NavLink href="#contact" mobile>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children, mobile = false }) {
  return (
    <Link href={href}>
      <motion.span
        className={`block ${mobile ? "p-2" : ""} text-white hover:text-book-cyan transition-colors`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  )
}

