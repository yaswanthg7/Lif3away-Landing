import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="h-screen">
        <div className="flex flex-col h-full">
          {/* Top half - Image */}
          <div className="h-1/2 relative">
            <img
              src="/images/about-us.jpg"
              alt="Modern living space"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
              <h1 className="text-2xl font-light text-white">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }} // Start smaller and invisible
                  whileInView={{ scale: 1, opacity: 1 }} // End at normal size and visible
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                >
                  Be part of the change you are looking for
                </motion.div>
              </h1>
            </div>
          </div>

          {/* Bottom half - Content */}
          <div className="h-1/2 bg-black text-white flex items-center">
            <div className="max-w-4xl mx-auto px-6">
              {/* <h2 className="text-4xl font-light mb-8">OUR STORY</h2> */}
              {/* <p className="text-lg text-white leading-relaxed">
                Lif3away connects renters with quality, fully managed rental
                properties tailored to their needs. Whether you're here for a
                six-month contract, a temporary relocation, or just exploring a
                new chapter in life, we provide more than just a place to stay,
                we offer a seamless experience where technology meets
                hospitality.
              </p> */}

              <h2 className="text-4xl font-light mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Start below
                  whileInView={{ opacity: 1, y: 0 }} // End at original position
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                >
                  OUR STORY
                </motion.div>
              </h2>
              <p className="text-lg text-white leading-relaxed">
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Start below
                  whileInView={{ opacity: 1, y: 0 }} // End at original position
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                >
                  Lif3away connects renters with quality, fully managed rental
                  properties tailored to their needs. Whether you're here for a
                  six-month contract, a temporary relocation, or just exploring
                  a new chapter in life, we provide more than just a place to
                  stay, we offer a seamless experience where technology meets
                  hospitality.
                </motion.div>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="flex flex-col h-full">
          {/* Top half - Image */}
          <div className="h-1/2 relative">
            <img
              src="/images/about-us.jpg"
              alt="Modern living space"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom half - Content */}
          <div className="h-1/2 bg-black text-white flex items-center">
            <div className="max-w-4xl mx-auto px-6">
              {/* <h2 className="text-4xl font-light mb-8">WHAT WE OFFER</h2>
              <p className="text-lg text-white leading-relaxed">
                Lif3away connects renters with quality, fully managed rental
                properties tailored to their needs. Whether you're here for a
                six-month contract, a temporary relocation, or just exploring a
                new chapter in life, we provide more than just a place to stay,
                we offer a seamless experience where technology meets
                hospitality.
              </p> */}
              <h2 className="text-4xl font-light mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Start below
                  whileInView={{ opacity: 1, y: 0 }} // End at original position
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                >
                  WHAT WE OFFER
                </motion.div>
              </h2>
              <p className="text-lg text-white leading-relaxed">
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Start below
                  whileInView={{ opacity: 1, y: 0 }} // End at original position
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                >
                  Lif3away connects renters with quality, fully managed rental
                  properties tailored to their needs. Whether you're here for a
                  six-month contract, a temporary relocation, or just exploring
                  a new chapter in life, we provide more than just a place to
                  stay, we offer a seamless experience where technology meets
                  hospitality.
                </motion.div>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="flex flex-col h-full">
          {/* Top half - Image */}
          <div className="h-1/2 relative">
            <img
              src="/images/about-us.jpg"
              alt="Modern living space"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom half - Content */}
          <div className="h-1/2 bg-black text-white flex items-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl font-light mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Start below
                  whileInView={{ opacity: 1, y: 0 }} // End at original position
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                >
                  OUR MISSION
                </motion.div>
              </h2>
              <p className="text-lg text-white leading-relaxed">
                {/* Lif3away connects renters with quality, fully managed rental
                properties tailored to their needs. Whether you're here for a
                six-month contract, a temporary relocation, or just exploring a
                new chapter in life, we provide more than just a place to stay,
                we offer a seamless experience where technology meets
                hospitality. */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }} // Start below
                  whileInView={{ opacity: 1, y: 0 }} // End at original position
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                >
                  Lif3away connects renters with quality, fully managed rental
                  properties tailored to their needs. Whether you're here for a
                  six-month contract, a temporary relocation, or just exploring
                  a new chapter in life, we provide more than just a place to
                  stay, we offer a seamless experience where technology meets
                  hospitality.
                </motion.div>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
