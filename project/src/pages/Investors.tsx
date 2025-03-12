import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import { motion, AnimatePresence } from "framer-motion";

const content = [
  {
    title: "Driving rental evolution",
    text: "Join our exclusive community and be the first to experience a smarter, automated rental platform. Connecting you with vetted properties, trusted landlords, and seamless experiences.",
    image: "/images/Logo1.png", 
  },
  {
    title: "Our mission",
    text: "With today's technology, the platform can fill this gap by offering a complete and intuitive solution for medium and long-term rentals, ensuring easy access to quality housing solutions across borders, specifically designed for people moving internationally.",
    image: "/images/Logo2.png", 
  },
  {
    title: "Specialized market focus",
    text: "We cater specifically to medium and long-term renters, ensuring tailored solutions for their needs.",
    image: "/images/Logo3.png", 
  },
  {
    title: "Flexible booking options",
    text: "Our platform offers adaptable leasing terms to match your lifestyle and plans.",
    image: "/images/Logo4.png", 
  },
  {
    title: "Technology-driven safeguards",
    text: "We integrate cutting-edge security measures to protect tenants and landlords.",
    image: "/images/Logo5.png", 
  },
  {
    title: "Effortless online solutions",
    text: "A seamless digital experience from property search to lease finalization.",
    image: "/images/Logo6.png", 
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
          className="w-full h-full object-cover absolute"
          style={{ objectPosition: "50% 30%" }}
        />
      </div>
      
      {/* Bottom Half: Content Section */}
      <div 
        className="relative h-auto min-h-[50vh] flex flex-col md:flex-row justify-start items-center px-6 py-10 md:py-0"
        style={{
          background: "linear-gradient(to bottom, #000000, #1D1B20)",
        }}
      >
        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="max-w-4xl text-center md:text-left md:pl-10 flex-1"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
              {content[index].title}
            </h1>
            <p className="text-base sm:text-lg text-[#FEF7FF] max-w-xl mx-auto md:mx-0">
              {content[index].text}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
{/* Image Displayed Next to Content  */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1 }} 
          className="flex justify-center items-center 
           h-60 w-40 mx-auto mt-8 
           md:ml-auto md:mr-20 md:mt-0" //  Adjusted for Mobile View
  
        >
          <img
            src={content[index].image} 
            alt={`Image ${index + 1}`}
            className="h-full w-full object-contain rounded-lg" 
            style={{
              filter: "brightness(0.9)", 
            }}
          />
        </motion.div>
      </AnimatePresence>

      </div>

    
    </div>
  );
}
