"use client"

import { motion } from "framer-motion"

export default function ContactUs() {
  return (
    <div id="contact" className="py-16 bg-book-blue/10 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded bg-white/10 border border-book-cyan/30 text-white placeholder-white/50 focus:outline-none focus:border-book-cyan"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded bg-white/10 border border-book-cyan/30 text-white placeholder-white/50 focus:outline-none focus:border-book-cyan"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-white">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 rounded bg-white/10 border border-book-cyan/30 text-white placeholder-white/50 focus:outline-none focus:border-book-cyan"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-book-cyan hover:bg-book-cyan/90 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg w-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  )
}

