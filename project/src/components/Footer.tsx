export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 text-center">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Email */}
        <a href="mailto:management@lift3away.com" className="text-gray-300 hover:text-white">
          📧 management@lift3away.com
        </a>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-red-500 text-xl">🔴</a> {/* YouTube */}
          <a href="#" className="text-blue-500 text-xl">📘</a> {/* Facebook */}
          <a href="#" className="text-pink-500 text-xl">📷</a> {/* Instagram */}
          <a href="#" className="text-blue-400 text-xl">🔗</a> {/* LinkedIn */}
          <a href="#" className="text-gray-400 text-xl">❌</a> {/* X (Twitter) */}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Press</a>
          <a href="#" className="hover:text-white">Privacy preferences</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Careers</a>
        </div>

        {/* Address */}
        <p className="text-gray-400 text-sm flex items-center">
          📍 Registered address: 408 S Spring St, STE 603, Los Angeles 90013.
        </p>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">© Lift3away Inc. 2025</p>
      </div>
    </footer>
  );
}
