"use client"

import { motion } from "framer-motion"
import Lottie from "lottie-react"
import readingAnimation from "../animations/reading-animation.json"

export default function Hero() {
  console.log("Animation data:", readingAnimation)
  return (
    <div
      className="min-h-[80vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img1.jpg-Gzru6OzA2ml0r0XBEjoOuDqywqxFSo.jpeg')`,
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-book-blue/30 backdrop-blur-sm" />

      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[80vh] px-4">
          {/* Left side content */}
          <motion.div
            className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Discover the Magic of Reading</h1>
            <p className="text-xl mb-8 text-white/90">
              Embark on countless adventures through the pages of timeless stories. Let each book be a gateway to new
              worlds and endless possibilities.
            </p>
            <motion.button
              className="bg-book-cyan hover:bg-book-cyan/90 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          {/* Right side animation */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Lottie
              animationData={readingAnimation}
              loop={true}
              className="w-full h-[400px]"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

