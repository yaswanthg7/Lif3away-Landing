import { FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1D1B20] text-white p-6 sm:p-8">
      <div className="container mx-auto">
        
        {/* Top Section: Address (Left) and Social Media Icons (Right) */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left mb-6">
          
          {/* Address - Left */}
          <div className="text-white space-y-1">
            <p className="font-semibold">Lif3away, Inc.</p>
            <p className="text-sm">P: 800-800-1800</p>
            <p className="text-sm">408 S Spring St., Ste. 603</p>
            <p className="text-sm">Los Angeles, CA 90013</p>
          </div>

          {/* Social Media Icons - Right */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://twitter.com/Lif3away" target="_blank" className="text-white hover:text-gray-400 text-lg sm:text-xl">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com/Lif3away" target="_blank" className="text-white hover:text-gray-400 text-lg sm:text-xl">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/Lif3away" target="_blank" className="text-white hover:text-gray-400 text-lg sm:text-xl">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/company/lif3away-com/" target="_blank" className="text-white hover:text-gray-400 text-lg sm:text-xl">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/Lif3away" target="_blank" className="text-white hover:text-gray-400 text-lg sm:text-xl">
              <FaFacebook />
            </a>
          </div>

        </div>

        {/* Bottom Section: Centered Text Links */}
        <div className="flex flex-wrap justify-center items-center text-sm text-white space-x-3 text-center">
          <p>© 2025 Lif3away Inc. All Rights Reserved.</p>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:management@lif3away.com" target="_blank" className="hover:text-gray-400">management@lif3away.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="https://www.linkedin.com/company/lif3away-com/jobs/" target="_blank" className="hover:text-gray-400">Careers</a>
          <span className="hidden sm:inline">|</span>
          <a href="/support" className="hover:text-gray-400">Support</a>
          <span className="hidden sm:inline">|</span>
          <a href="/privacy" className="hover:text-gray-400">Privacy</a>
          <span className="hidden sm:inline">|</span>
          <a href="/terms" className="hover:text-gray-400">T&C</a>
        </div>

      </div>
    </footer>
  );
}
