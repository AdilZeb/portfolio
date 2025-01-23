export default function Footer() {
    return (
      <footer id="footer" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Your Name. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition duration-300">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                GitHub
              </a>
              <a href="#" className="hover:text-blue-400 transition duration-300">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  