import { Link } from 'react-router-dom';

export default function Navbar() {
  const textColor = 'text-white';
  const hoverColor = 'hover:text-emerald-400';

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6">
      {/* Logo and Links in Same Line */}
      <div className="flex items-center space-x-20">
        <Link to="/" className="flex items-center space-x-2 text-teal-400">
          <img src="/images/logo.PNG" alt="Lif3away Logo" className="w-10 h-10" />
          <span className="text-2xl font-#20D7B8" style={{ fontFamily: "'#20D7B8', Helvetica Neue" }}>
            Lif3away
          </span>
        </Link>

        {/* Centered Links Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-40">
          <Link
            to="/about"
            className={`${textColor} ${hoverColor} transition`}
          >
            ABOUT US
          </Link>
          <Link
            to="/contacts"
            className={`${textColor} ${hoverColor} transition`}
          >
            CONTACT US
          </Link>
          <Link
            to="/Investors"
            className={`${textColor} ${hoverColor} transition`}
          >
            INVESTOR
          </Link>
        </div>
      </div>
    </nav>
  );
}
