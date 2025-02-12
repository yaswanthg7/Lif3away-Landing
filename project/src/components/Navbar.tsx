import { Home, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const textColor = 'text-white';
  const hoverColor = 'hover:text-emerald-400';

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6">
      <Link to="/" className="flex items-center space-x-2 text-emerald-400">
        <Home className="w-8 h-8" />
        <span className={`text-2xl font-bold ${textColor}`}>Lif3away</span>
      </Link>
      
      <div className="flex items-center space-x-8">
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
          CONTACTS
        </Link>
        <Link 
          to="/map"
          className={`${textColor} ${hoverColor} transition`}
        >
          INVESTOR
        </Link>
        <Link 
          to="/map"
          className={`${textColor} ${hoverColor} transition`}
        >
          
        </Link>
      </div>

      <Link to="/login" className={`${textColor} ${hoverColor} transition`}>
        <UserCircle className="w-8 h-8" />
      </Link>
    </nav>
  );
}