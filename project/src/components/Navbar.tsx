import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 w-full">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="/images/logo.PNG" alt="Lif3away Logo" className="w-8 h-8" />
        <span
          className="text-lg font- thin"
          style={{ fontFamily: "Arial", color: "#20D7B8",fontWeight: 200 , fontSize: "1rem" }}
        >
          Lif3away
        </span>
      </Link>

      {/* Navigation Links (Centered in the Middle of Screen) */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-20 ">
        <Link
          to="/about"
          className="text-lg transition hover:text-emerald-400"
          style={{ color: "#FEF7FF" , marginRight:"9rem" , fontSize:"1rem" }}
        >
          ABOUT US
        </Link>
        <Link
          to="/contacts"
          className="text-lg transition hover:text-emerald-400"
          style={{ color: "#FEF7FF",marginRight:"9rem" ,fontSize:"1rem"}}
        >
          CONTACT US
        </Link>
        <Link
          to="/Investors"
          className="text-lg transition hover:text-emerald-400"
          style={{ color: "#FEF7FF",fontSize:"1rem" }}
        >
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
      {menuOpen && (
        <div className="absolute top-16 left-1 w-full text-center md:hidden flex flex-col space-y-4 p-6">
          <Link
            to="/about"
            className="block text-lg"
            style={{ color: "#FEF7FF" }}
          >
            ABOUT US
          </Link>
          <Link
            to="/contacts"
            className="block text-lg"
            style={{ color: "#FEF7FF" }}
          >
            CONTACT US
          </Link>
          <Link
            to="/Investors"
            className="block text-lg"
            style={{ color: "#FEF7FF" }}
          >
            INVESTORS
          </Link>
        </div>
      )}
    </nav>
  );
}
