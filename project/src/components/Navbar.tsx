import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 w-full bg-transparent">

      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="/images/logo.PNG" alt="Lif3away Logo" className="w-9 h-10 rounded-full" />
        <span
          className="text-lg font-thin"
          style={{
            fontFamily: "Arial",
            color: "#20D7B8",
            fontWeight: 200,
            fontSize: "1rem",
          }}
        >
          Lif3away
        </span>
      </Link>

      
{/* Desktop Navigation */}
<div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 max-w-[45vw] w-full justify-between px-4">
  <Link to="/about"
  className="text-sm md:text-base text-white hover:-translate-y-[1px] hover:opacity-90 transition-all duration-400">
    ABOUT US
  </Link>
  <Link to="/contacts" className="text-sm md:text-base text-white hover:-translate-y-[1px] hover:opacity-90 transition-all duration-400">
    CONTACT US
  </Link>
  <Link to="/Investors" className="text-sm md:text-base text-white hover:-translate-y-[1px] hover:opacity-90 transition-all duration-400">
    INVESTORS
  </Link>
</div>





      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white/10 backdrop-blur-lg text-white text-center transform transition-all duration-500 ease-out ${
          menuOpen
            ? "opacity-100 py-6 scale-100"
            : "opacity-0 py-0 scale-95 pointer-events-none"
        } md:hidden shadow-lg rounded-b-xl border-t border-white/10`}
      >


        <Link to="/about" className="block py-2 text-lg hover:text-emerald-400 transition">ABOUT US</Link>
        <Link to="/contacts" className="block py-2 text-lg hover:text-emerald-400 transition">CONTACT US</Link>
        <Link to="/Investors" className="block py-2 text-lg hover:text-emerald-400 transition">INVESTORS</Link>
      </div>
    </nav>
  );
}
