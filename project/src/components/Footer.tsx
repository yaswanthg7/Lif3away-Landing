import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 relative">
      <div className="container mx-auto flex flex-col items-center space-y-4 pb-12">


        {/* Email */}
        <a href="mailto:management@lif3away.com" target="_blank" className="text-gray-300 hover:text-white">
          management@lif3away.com
        </a>

        {/* Social Media Icons */}
        <div className="flex space-x-4"> 
          <a href="https://facebook.com/Lif3away" target="_blank" className="text-blue-500 text-xl"><FaFacebookF /></a> {/* Facebook */}
          <a href="https://www.linkedin.com/company/lif3away-com/" target="_blank" className="text-blue-400 text-xl"><FaLinkedinIn /></a> {/* LinkedIn */}
        </div>

        

        {/* Address */}
        <div className="absolute bottom-6  text-sm text-gray-400"><p>
          Registered address: 408 S Spring St, STE 603, Los Angeles 90013.
        </p>
        </div>

        {/* Footer Links & Copyright */}
        <div className="absolute bottom-6 left-6 text-sm text-gray-400">
          <a href="https://www.linkedin.com/company/lif3away-com/jobs/" target="_blank" className="hover:text-white">Lif3away Careers</a>
        </div>

        <div className="absolute bottom-6 right-6 flex items-center space-x-2 text-xs text-gray-500">
          <img src="/images/logo.PNG" alt="Lif3away Logo" className="h-4 w-4" />
          <p> Lif3away Inc. © 2025</p>
        </div>
      </div>
    </footer>
  );
}
