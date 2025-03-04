import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    {
      title: "OUR STORY",
      text: "Born from the challenges and insight of the London rental market, we recognized the unmet needs of transient workers and families seeking stability, comfort, and quality. In a city famed for its rapid influx of international talents and professionals, we pioneered solutions that set a new standard for mid- and long-term stays.",
    },
    {
      title: "OUR MISSION",
      text: "We believe in empowering people to live without limits, to feel at home, and to thrive wherever they are. Our mission is to make medium-to-long term renting simple, secure, and straightforward while nurturing community connections and prioritizing customer satisfaction.",
    },
    {
      title: "WHAT WE OFFER",
      text: "Lif3away connects renters with quality, fully managed rental properties tailored to their needs. Whether you’re here for a six-month contract, a temporary relocation, or just exploring a new chapter in life, we provide more than just a place to stay, we offer a seamless experience where technology meets hospitality.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="h-screen">
        <div className="flex flex-col h-full">
          {/* Top Half - Background Image with Heading */}
          <div className="h-[60vh] relative">
            <img
              src="/images/about-us.jpg"
              alt="Modern living space"
              className="w-full h-full object-cover mr-80"
              style={{ objectPosition: "50% 40%" }}
            />
            {/* Centered Heading */}
            <div className="absolute inset-0 flex justify-center items-center">
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }} // Slower appearance
                className="text-2xl font-400 text-[#FEF7FF] text-center px-4 mr-100 ml-50 mb-60 mt-90"
                style={{ marginTop: "10rem" }}
              >
                Be part of the change you are looking for
              </motion.h1>
            </div>
          </div>

          {/* Bottom Half - Auto-Transitioning Content */}
          <div className="h-[40vh] bg-[#1D1B20] text-[#FEF7FF] flex items-center">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                key={currentSection} // Key ensures re-animation on change
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 2, ease: "easeInOut" }} // **Slower transition (2s)**
              >
                <h2 className="text-4xl font-light mb-6">
                  {sections[currentSection].title}
                </h2>
                <p className="text-lg leading-relaxed">
                  {sections[currentSection].text}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
