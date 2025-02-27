import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const content = [
  {
    title: "Driving rental evolution",
    text: "Join our exclusive community and be the first to experience a smarter, automated rental platform. Connecting you with vetted properties, trusted landlords, and seamless experiences.",
    image: "/images/logo1.jpg", 
  },
  {
    title: "Our mission",
    text: "With today's technology, the platform can fill this gap by offering a complete and intuitive solution for medium and long-term rentals, ensuring easy access to quality housing solutions across borders, specifically designed for people moving internationally.",
    image: "/images/logo2.jpg", 
  },
  {
    title: "Specialized market focus",
    text: "We cater specifically to medium and long-term renters, ensuring tailored solutions for their needs.",
    image: "/images/logo3.jpg", 
  },
  {
    title: "Flexible booking options",
    text: "Our platform offers adaptable leasing terms to match your lifestyle and plans.",
    image: "/images/logo4.jpg", 
  },
  {
    title: "Technology-driven safeguards",
    text: "We integrate cutting-edge security measures to protect tenants and landlords.",
    image: "/images/logo5.jpg", 
  },
  {
    title: "Effortless online solutions",
    text: "A seamless digital experience from property search to lease finalization.",
    image: "/images/logo6.jpg", 
  },
];

export default function Map() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Top Half: Image Section */}
      <div className="relative h-[50vh]">
        <img
          src="/images/investors.JPG"
          alt="Earth from space"
          className="w-full h-full object-cover absolute "
          style={{ objectPosition: "50% 30%" }}
        />
      </div>
      
      {/* Bottom Half: Content Section */}
      <div 
        className="relative h-[50vh] flex flex-row justify-start items-center px-6" // flex-row to align side by side
        style={{
          background: "linear-gradient(to bottom, #000000, #1D1B20)",
        }}
      >
        {/* Content Section */}
        <div className="max-w-4xl text-left pl-10 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
            >
              {/* Title and Text Content */}
              <h1 className="text-4xl font-light mb-4">{content[index].title}</h1>
              <p className="text-lg text-[#FEF7FF] max-w-xl">{content[index].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Displayed Next to Content */}
        <div 
          className=" ml-auto flex justify-center items-center h-40 w-40 " // Adjusted to make sure the image isn't too large
        >
          <img
            src={content[index].image} // Dynamically changes image based on the index
            alt={`Image ${index + 1}`}
            className="h-full w-full object-cover rounded-lg" // Adjusted to keep image proportions
            style={{
              filter: 'brightness(0.6)', // Applying brightness to darken the image and blend it better
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
