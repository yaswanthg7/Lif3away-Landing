import { useState } from "react";
import Navbar from "../components/Navbar";

import "../index.css"

const tabData = {
  Tenants: [
    {
      title: "Save Money",
      icon: "/images/save-money.png",
      description:
        "You get a secure and efficient rental experience that's as budget-friendly as it is hassle-free. Discover a smarter way to book and start saving today.",
    },
    {
      title: "Online Booking",
      icon: "/images/online-booking.png",
      description:
        "Book your next rental easily with Lif3away's secure online reservation. With a protected payment process, you can reserve properties quickly.",
    },
    {
      title: "ID Check Advanced",
      icon: "/images/id-check.png",
      description:
        "Our service verifies landlords and agents, significantly reducing the risk of fraud. Especially beneficial for international tenants or those unfamiliar with the area, ensuring you can trust the people you're dealing with.",
    },
    {
      title: "AI Personal Agent",
      icon: "/images/ai-agent.png",
      description:
        "Let Lif3away’s AI Personal Agent do the heavy lifting for you. Increase your chances of securing the perfect place with tailored recommendations and smart insights. Your personal rental assistant, always by your side.",
    },
    {
      title: "Live View",
      icon: "/images/live-view.png",
      description:
        "Whether you're in a different city or country, you can thoroughly assess a property before committing to a lease, saving you time and travel expenses while ensuring you get a clear, detailed view of your next home.",
    },
    {
      title: "Veritrust",
      icon: "/images/veritrust.png",
      description:
        "Veritrust means the landlord or professional has earned at least 10 reviews with 4 stars or higher, ensuring reliability and trustworthiness. Unlike other platforms, Lif3away sets the bar for transparency, so you can feel secure in your rental decisions.",
    },
    {
      title: "Online Contract",
      icon: "/images/online-contract.png",
      description:
        "Easily share and digitally sign rental agreements, ensuring speed, transparency, and reliability for both parties. Perfect for those relocating to another country, it simplifies the process and builds trust every step of the way.",
    },
  ],
  Landlords: [
    {
      title: "Save Money",
      icon: "/images/save-money.png",
      description:
        "You can access the most affordable and transparent online booking system available. No hidden fees, no complicated pricing. Save money, save time, and experience the difference with Lif3away.",
    },
    {
      title: "Online Booking",
      icon: "/images/online-booking.png",
      description:
        "Lif3away allows landlords to accept reservations effortlessly through a protected payment process, ensuring quick and reliable transactions. Manage your rentals with confidence and ease, no matter where your tenants are coming from.",
    },
    {
      title: "ID Check Advanced",
      icon: "/images/id-check.png",
      description:
        "Using ID scanning and facial biometric technology, we help landlords confirm the identity of prospective tenants, reducing the risk of fraud. This simple yet powerful process safeguards your property and streamlines tenant screening, making it faster and more reliable than ever before.",
    },
    {
      title: "AI Personal Agent",
      icon: "/images/ai-agent.png",
      description:
        "Set competitive prices, optimize occupancy, and automatically create polished property descriptions. Get real-time market insights and task automation to save time and reduce errors, keeping your listings attractive and reducing vacancy periods.",
    },
    {
      title: "Live View",
      icon: "/images/live-view.png",
      description:
        "Showcase your property efficiently with virtual tours, allowing potential tenants to explore without multiple in-person visits. Ideal for landlords with multiple listings or properties in different locations, it lets you conduct tours remotely, saving time and reaching more interested renters.",
    },
    {
      title: "Veritrust",
      icon: "/images/veritrust.png",
      description:
        "This added layer of security helps reduce risks and gives you peace of mind, knowing your tenants have passed both identity and financial checks. Trust veritrust to make your rental experience safer, more reliable, and hassle-free.",
    },
    {
      title: "Online Contract",
      icon: "/images/online-contract.png",
      description:
        "Landlords can easily create, send, and manage rental contracts online, streamlining the leasing process. Automate paperwork, save time, and reduce errors, all within the platform, making property management more efficient and hassle-free.",
    },
    {
      title: "Sponsored Ads",
      icon: "/images/sponsored-ads.png",
      description:
        "Accelerate your rental process and increase your property's visibility across continents. Reach a wider audience, improve attractiveness, and attract more potential tenants faster, all while enhancing the global appeal of your listings.",
    },
  ],
  Professionals: [
    {
      title: "Save Money",
      icon: "/images/save-money.png",
      description:
        "You can access the most affordable and transparent online booking system available. No hidden fees, no complicated pricing. Save money, save time, and experience the difference with Lif3away.",
    },
    {
      title: "Online Booking",
      icon: "/images/online-booking.png",
      description:
        " Lif3away allows landlords to accept reservations effortlessly through a protected payment process, ensuring quick and reliable transactions.",
    },
    {
      title: "ID Check Advanced",
      icon: "/images/id-check.png",
      description:
        "Using ID scanning and facial biometric technology, we help landlords confirm the identity of prospective tenants, reducing the risk of fraud. This simple yet powerful process not only safeguards your property but also streamlines tenant screening, making it faster and more reliable than ever before..",
    },
    {
      title: "AI Personal Agent",
      icon: "/images/ai-agent.png",
      description:
        "Lif3away’s AI instantly generates property descriptions, saving time and ensuring consistency. With real-time market data, agents can optimize pricing and occupancy, quickly adapting to trends. Stay competitive and attract renters faster, all while boosting efficiency and revenue.",
    },
    {
      title: "Live View",
      icon: "/images/live-view.png",
      description:
        "Lif3away’s live view feature lets agents showcase properties to interested tenants without in-person viewing. Ideal for agents with multiple listings or properties in different locations, it offers a time-saving solution for remote showings. Conduct tours effortlessly, attract more tenants, and manage properties more efficiently.",
    },
    {
      title: "Veritrust",
      icon: "/images/veritrust.png",
      description:
        "This added layer of security helps reduce risks and gives you peace of mind, knowing your tenants have passed both identity and financial checks. Trust Veritrust to make your rental experience safer, more reliable, and hassle-free.",
    },
    {
      title: "Online Contract",
      icon: "/images/online-contract.png",
      description:
        "Lif3away enables agents to generate, distribute, and track contracts seamlessly for both tenants and landlords. By centralizing all paperwork within the platform, agents save time, reduce errors, and keep everything organized in one place.",
    },
    {
      title: "Sponsored Ads",
      icon: "/images/sponsored-ads.png",
      description:
        "Accelerate your rental process and expand your properties’ visibility across continents with Lif3away. Attract a wider audience, increase your property’s appeal, and secure more potential tenants faster. Enhance the global appeal of your listings, making them more attractive to renters from around the world.",
    },
  ],
};

export default function Home() {
  // state for controlling the modal
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);



  const [activeCategory, setActiveCategory] = useState<"Tenants" | "Landlords" | "Professionals">("Tenants");
  const [paused, setPaused] = useState(false);
{/*
  const cities = [
    { name: "New York", icon: "/images/ny.png" },
    { name: "Chicago", icon: "/images/chicago.png" },
    { name: "Houston", icon: "/images/Houston.png" },
    { name: "San Francisco", icon: "/images/san-francisco.png" },
    { name: "Seattle", icon: "/images/seattle.png" },
    { name: "Austin", icon: "/images/austin.png" },
    { name: "Phoenix", icon: "/images/phoenix.png" },
    { name: "Columbus", icon: "/images/columbus.png" },
    { name: "Indianapolis", icon: "/images/indianapolis.png" },
    { name: "Los Angeles", icon: "/images/la.png" },
  ]; */}
  
  {/*const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prev) => (prev + 1) % cities.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [cities.length]);
  */}
 
  return (
    <div className="min-h-screen">
      <Navbar />
  
      {/* Main content wrapper - exactly screen height */}
      <div className="h-screen flex flex-col">
        {/* Hero Section - 60% of viewport height */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="/images/landing-page.JPG"
            alt="Modern architecture"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "50% 37%" }}
          />
          <div className="absolute inset-0 flex items-start pt-[15vh] px-6 sm:px-12 lg:px-24">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl ml-14 mt-8 font-light text-[#FEF7FF]">
              Simplify your move
            </h1>
          </div>
        </div>
  
        {/* Bottom Section - 40% of viewport height */}
        <div className="relative h-[40vh] bg-[#1D1B20]">
          <div className="absolute inset-0 container mx-auto px-6 sm:px-12 lg:px-24 py-8 sm:py-10">
            <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Content */}
              <div className="flex flex-col justify-center text-center lg:text-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#FEF7FF] mb-7 sm:mb-4 lg:mb-8">
                  Discover the future of rental solutions
                </h2>
                <p className="text-sm sm:text-base text-[#FEF7FF] mb-4 sm:mb-6 max-w-[80ch] mx-auto lg:mx-0">
                  Join our exclusive community and be the first to experience a smarter, automated rental platform.
                  Connecting you with vetted properties, trusted landlords, and seamless experiences.
                </p>
                <div className="flex justify-center lg:justify-center">
                  <button
                    onClick={() => setShowWaitlistForm(true)}
                    className="px-6 py-2.5 text-sm sm:text-base border border-[#FEF7FF] text-[#FEF7FF] rounded-full hover:bg-white/10 transition-colors duration-300"
                  >
                    Join the waiting list
                  </button>
                </div>
              </div>
  
              {/* Right Image */}
              <div className="hidden lg:flex items-center justify-end">
                <div className="relative w-full max-w-[390px] max-h-[390px] h-full overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/images/landing-Page2.jpeg"
                    alt="Modern interior"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
     {/* Innovative Features Section */}
     <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - 3D Room Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/3D-room.jpg"
                alt="Modern interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Content + Animated City */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center max-w-[100ch] font-thick text-[#1D1B20]">
                Innovative features, unlimited power.
              </h2>
              <p className="text-[1.05rem] leading-[1.75rem] text-[#1D1B20] text-center max-w-[90ch] mx-auto">
              We know how stressful it can be to find a new home to rent and move, especially to a new city. 
              Our goal is to break down all the barriers and risks, at the lowest possible cost, so you can focus only on what matters.
              That's why we invest in innovation, with the help of technology and AI we can offer never-before-seen features.'
              </p>

              {/* Animated City Display 
              <div className="city-flare-container">
                <div key={cities[currentCityIndex].name} className="city-flare-inner">
                  <img
                    src={cities[currentCityIndex].icon}
                    alt={cities[currentCityIndex].name}
                    className="city-flare-icon"
                  />
                  <div className="city-particles-wrapper">
                    <span className="city-flare-name">{cities[currentCityIndex].name}</span>
                    <div className="city-particles" />
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f8f8f8] py-16 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-8 sm:px-12 lg:px-16">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Tenants", "Landlords", "Professionals"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as any)}
                className={`px-6 py-2 text-base rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Infinite Scroll Container */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className={`scroll-wrapper ${paused ? "scroll-paused" : ""}`}
              style={{ width: "fit-content" }}
            >
              {[...tabData[activeCategory], ...tabData[activeCategory]].map((tab, index) => (
                <div
                  key={index}
                  className="w-[300px] min-w-[300px] p-6 rounded-xl card-glow shadow-lg text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <img src={tab.icon} alt={tab.title} className="w-10 h-10 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">{tab.title}</h3>
                  <p className="text-sm text-black leading-relaxed">{tab.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditionally render the Zoho Form modal */}
      {showWaitlistForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setShowWaitlistForm(false)} // Close if user clicks outside
        >
          {/* Modal content */}
          <div
            className="relative bg-white p-4 md:p-6 rounded-md shadow-lg max-w-2xl w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowWaitlistForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4"></h2>
           
            <iframe
              aria-label="Join the waiting list"
              frameBorder="0"
              style={{ height: "500px", width: "100%", border: "none" }}
              src="https://forms.zohopublic.com/lif3away1/form/joinus/formperma/BJ4LPmWeK-rDkzmojXOyqGrAnUZ5xD0IQXReYrMOUfQ"
            ></iframe>
          </div>
        </div>
      )}

      
    </div>
  );
}