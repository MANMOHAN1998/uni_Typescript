"use client"

import dynamic from "next/dynamic"
import Navbar from "./components/Navbar"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

const Hero = dynamic(() => import("./components/Hero"), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-book-cyan via-book-sky to-book-blue text-white font-serif">
      <Navbar />
      <Hero />
      <ContactUs />
      <Footer />
    </div>
  )
}

