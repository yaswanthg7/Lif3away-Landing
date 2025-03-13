import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About-us';
import Investors from './pages/Investors';
import Contacts from './pages/Contact-us';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const handlePrivacyOpen = () => setShowPrivacy(true);
    const handleTermsOpen = () => setShowTerms(true);
    
    window.addEventListener("openPrivacy", handlePrivacyOpen);
    window.addEventListener("openTerms", handleTermsOpen);

    return () => {
      window.removeEventListener("openPrivacy", handlePrivacyOpen);
      window.removeEventListener("openTerms", handleTermsOpen);
    };
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Investors" element={<Investors />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

      {/* Privacy Modal */}
      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="relative bg-white p-4 md:p-6 rounded-md shadow-lg max-w-3xl w-[90%] h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <iframe
              src="/lif3away-privacy-policy.html"
              title="Privacy Policy"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setShowTerms(false)}
        >
          <div
            className="relative bg-white p-4 md:p-6 rounded-md shadow-lg max-w-3xl w-[90%] h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <iframe
              src="/lif3away-website-t-cs.html"
              title="Terms & Conditions"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
