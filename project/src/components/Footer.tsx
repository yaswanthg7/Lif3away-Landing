import { FaInstagram, FaYoutube, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1D1B20] text-white p-8">
      <div className="container mx-auto">
        
        {/* Top Section: Address (Left) and Social Media Icons (Right) */}
        <div className="flex justify-between items-start mb-4">
          {/* Address - Left */}
          <div className="text-left space-y-1">
            <p className="text-white-300 font-semibold">Lif3away, Inc.</p>
            <p className="text-white-400">P: 800-800-1800</p>
            <p className="text-white-400">408 S Spring St.</p>
            <p className="text-white-400">Ste. 603,</p>
            <p className="text-white-400">Los Angeles, CA 90013</p>
          </div>

          {/* Social Media Icons - Right */}
          <div className="flex space-x-4">
            <a href="https://twitter.com/Lif3away" target="_blank" className="text-white-400 hover:text-white text-xl">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com/Lif3away" target="_blank" className="text-white-400 hover:text-white text-xl">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/Lif3away" target="_blank" className="text-white-400 hover:text-white text-xl">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/company/lif3away-com/" target="_blank" className="text-white-400 hover:text-white text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom Section: Everything in One Straight Line and Centered */}
        <div className="flex justify-center items-center text-sm text-white-400 space-x-4">
          {/* Lif3away Logo */}
          <img src="/images/logo.PNG" alt="Lif3away Logo" className="w-6 h-6" />
          <p> Lif3away Inc © 2025. All Rights Reserved</p> <span>|</span>
          <a href="mailto:management@lif3away.com" className="hover:text-white">
            management@lif3away.com
          </a> 
          <span>|</span>
          <a href="https://www.linkedin.com/company/lif3away-com/jobs/" target="_blank" className="hover:text-white">Careers</a>
          <span>|</span>
          <a href="/support" className="hover:text-white">Support</a>
          <span>|</span>
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <span>|</span>
          <a href="/terms" className="hover:text-white">T&C</a>
        </div>

      </div>
    </footer>
  );
}
