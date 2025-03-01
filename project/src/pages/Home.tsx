import { useState } from "react";
import {
  
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const tabData = {
  Tenants: [
    {
      title: "Save Money",
      icon: "/images/save-money.png",
      description:
        "You get a secure and efficient rental experience that’s as budget-friendly as it is hassle-free. Discover a smarter way to book and start saving today.",
    },
    {
      title: "Online Booking",
      icon: "/images/online-booking.png",
      description:
        "Book your next rental easily with Lif3away’s secure online reservation. With a protected payment process, you can reserve properties quickly.",
    },
    {
      title: "ID Check Advanced",
      icon: "/images/id-check.png",
      description:
        "Our service verifies landlords and agents, significantly reducing the risk of fraud, Especially beneficial for international tenants or those unfamiliar with the area, ensuring you can trust the people you’re dealing with.",
    },
    {
      title: "AI Personal Agent",
      icon: "/images/ai-agent.png",
      description:
        "Let Lif3away’s AI Personal Agent do the heavy lifting for you. Increase your chances of securing the perfect place with tailored recommendations and smart insights.",
    },
    {
      title: "Live View",
      icon: "/images/live-view.png",
      description:
        "Whether you're in a different city or country, you can thoroughly assess a property before committing to a lease, saving you time and travel expenses.",
    },
    {
      title: "Veritrust",
      icon: "/images/veritrust.png",
      description:
        "Veritrust means the landlord or professional has earned at least 10 reviews with 4 stars or higher, ensuring reliability and trustworthiness.",
    },
    {
      title: "Online Contract",
      icon: "/images/online-contract.png",
      description:
        "Easily share and digitally sign rental agreements, ensuring speed, transparency, and reliability for both parties.",
    },
  ],
  Landlords: [
    {
      title: "Save Money",
      icon: "/images/save-money.png",
      description:
        "Access the most affordable and transparent online booking system. No hidden fees, no complicated pricing.",
    },
    {
      title: "Online Booking",
      icon: "/images/online-booking.png",
      description:
        "Lif3away allows landlords to accept reservations effortlessly through a protected payment process.",
    },
    {
      title: "ID Check Advanced",
      icon: "/images/id-check.png",
      description:
        "Using ID scanning and facial biometric technology, we help landlords confirm the identity of prospective tenants, reducing the risk of fraud.",
    },
    {
      title: "AI Personal Agent",
      icon: "/images/ai-agent.png",
      description:
        "Set competitive prices, optimize occupancy, and create polished property descriptions using AI.",
    },
    {
      title: "Live View",
      icon: "/images/live-view.png",
      description:
        "Showcase your property efficiently with virtual tours, allowing potential tenants to explore remotely.",
    },
    {
      title: "Veritrust",
      icon: "/images/veritrust.png",
      description:
        "This added layer of security helps reduce risks and gives you peace of mind.",
    },
    {
      title: "Online Contract",
      icon: "/images/online-contract.png",
      description:
        "Easily create, send, and manage rental contracts online, streamlining the leasing process.",
    },
    {
      title: "Sponsored Ads",
      icon: "/images/sponsored-ads.png",
      description:
        "Increase your property’s visibility and attract more potential tenants with targeted advertisements.",
    },
  ],
  Agents: [
    {
      title: "Save Money",
      icon: "/images/save-money.png",
      description:
        "Access the most affordable and transparent online booking system available. No hidden fees, no complicated pricing.",
    },
    {
      title: "Online Booking",
      icon: "/images/online-booking.png",
      description:
        "Lif3away allows landlords to accept reservations effortlessly through a protected payment process.",
    },
    {
      title: "ID Check Advanced",
      icon: "/images/id-check.png",
      description:
        "Using ID scanning and facial biometric technology, we help landlords confirm the identity of prospective tenants, reducing the risk of fraud.",
    },
    {
      title: "AI Personal Agent",
      icon: "/images/ai-agent.png",
      description:
        "Lif3away’s AI instantly generates property descriptions, saving time and ensuring consistency.",
    },
    {
      title: "Live View",
      icon: "/images/live-view.png",
      description:
        "Lif3away’s live view feature lets agents showcase properties remotely, attracting more tenants.",
    },
    {
      title: "Veritrust",
      icon: "/images/veritrust.png",
      description:
        "This added layer of security helps reduce risks and gives you peace of mind.",
    },
    {
      title: "Online Contract",
      icon: "/images/online-contract.png",
      description:
        "Lif3away enables agents to generate, distribute, and track contracts seamlessly for both tenants and landlords.",
    },
    {
      title: "Sponsored Ads",
      icon: "/images/sponsored-ads.png",
      description:
        "Increase your property’s visibility and attract more potential tenants with targeted advertisements.",
    },
  ],
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<
    "Tenants" | "Landlords" | "Agents"
  >("Tenants");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex flex-col">
        {/* Background Image */}
        <div className="relative h-screen">
          <img
            src="/images/landing-page.JPG"
            alt="Modern architecture"
            className="absolute inset-0 w-full h-full object-cover "
            style={{
              objectPosition: "110% 38%",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-start pl-[5%]">
            <h1 className="text-3xl font-light text-[#FEF7FF] absolute top-1/4 left-1/4 right-2/4 transform -translate-x-2/4 mt-12 ">
              Simplify your move
            </h1>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="min-h-[50vh] grid grid-cols-2">
          {/* Left Content */}
          <div className="bg-[#1D1B20] p-12 flex flex-col items-center justify-center">
         <div className="space-y-6 text-center">
          <h2 className="text-3xl font-light text-[#FEF7FF]">
          Discover the future of rental solutions
          </h2>
          <p className="text-lg text-[#FEF7FF]">
          Join our exclusive community and be the first to experience a smarter, automated rental platform. Connecting you with vetted properties, trusted landlords, and seamless experiences.
          </p>
          <button className="px-8 py-3 bg-[#1D1B20] text-[#FEF7FF] border border-[#FEF7FF] rounded-full hover:bg-[#1D1B20] transition">
             Join the waiting list
          </button>
          </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center bg-[#1D1B20] p-6">
            <div className="w-[400px] h-[280px] md:w-[450px] md:h-[320px] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/landing-Page2.jpeg"
                alt="Modern interior"
                className="w-full h-full object-cover transform scale-95 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Features */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/3D-room.jpg"
                alt="Modern interior"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            <div className="space-y-8 text-blackn text-center">
              <h2 className="text-5xl font-light">
                Innovative features, unlimited power.
              </h2>
              <p className="text-black-400 text-lg-[#1D1B20]">
                We know how stressful it can be to find a new home to rent and
                move, especially to a new city. Our goal is to break down all
                the barriers and risks, at the lowest possible cost, so you can
                focus only on what matters. That's why we invest in innovation,
                with the help of technology and AI we can offer
                never-before-seen features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Tabs */}
          <div className="flex justify-center space-x-4 mb-12">
            {["Tenants", "Landlords", "Agents"].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(
                    category as "Tenants" | "Landlords" | "Agents"
                  );
                  setActiveTab(0); // Reset to first card when changing category
                }}
                className={`px-6 py-2 rounded-full transition ${
                  activeCategory === category
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sub-Tabs & Content */}
          <div className="grid grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            {tabData[activeCategory]
              .slice(activeTab * 3, activeTab * 3 + 3) // Show 3 cards per navigation click
              .map((tab, index) => (
                <div
                  key={index}
                  className={`cursor-pointer bg-white p-8 rounded-xl shadow-sm transition-transform transform hover:scale-105 transition-all duration-500 ease-in-out ${
                    activeTab === index
                      ? "hover:ring-1 hover:ring-gray-300" // "ring-2 ring-emerald-500"
                      : "hover:ring-1 hover:ring-gray-300"
                  }`}
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <img src={tab.icon} alt={tab.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{tab.title}</h3>
                  <p className="text-gray-600">{tab.description}</p>
                </div>
              ))}
          </div>

          {/* Navigation Buttons */}
          <div className="ml-auto flex justify-center space-x-4 mt-8">
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              onClick={() => {
                setActiveTab((prev) => (prev > 0 ? prev - 1 : prev)); // Navigate to previous set of 3 cards
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              onClick={() => {
                setActiveTab(
                  (prev) =>
                    prev < Math.floor(tabData[activeCategory].length / 3)
                      ? prev + 1
                      : prev // Navigate to next set of 3 cards
                );
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
