import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 relative">
      <div className="container mx-auto flex flex-col items-center space-y-4 text-center">
        {/* Email */}
        <a
          href="mailto:management@lif3away.com"
          className="text-gray-300 hover:text-white"
        >
          management@lif3away.com
        </a>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com/Lif3away"
            className="text-blue-500 text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/lif3away-com/"
            className="text-blue-400 text-xl"
          >
            <FaLinkedinIn />
          </a>
        </div>

        {/* Address */}
        <p className="text-sm text-gray-400">
          Registered address: 408 S Spring St, STE 603, Los Angeles 90013.
        </p>
      </div>

      {/* Careers (Left) */}
      <div className="absolute bottom-6 left-6 text-sm text-gray-400">
        <a
          href="https://www.linkedin.com/company/lif3away-com/jobs/"
          className="hover:text-white"
        >
          Lif3away Careers
        </a>
      </div>

      {/* Copyright (Right) */}
      <div className="absolute bottom-6 right-6 flex items-center space-x-2 text-xs text-gray-500">
        <img src="/images/logo.PNG" alt="Lif3away Logo" className="w-4" />
        <p> Lif3away Inc. © 2025</p>
      </div>
    </footer>
  );
}
