export default function Footer() {
  return (
    <footer className="bg-book-blue/20 backdrop-blur-md text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">BookishUI</h3>
            <p className="text-white/80">Bringing the joy of reading to your digital experience.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="text-white/80 hover:text-book-cyan transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-book-cyan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
            <p className="text-white/80">Follow us on social media for updates and book recommendations.</p>
          </div>
        </div>
        <div className="mt-8 text-center text-white/60">
          <p>&copy; 2024 BookishUI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

