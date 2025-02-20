import { useState } from "react";
import { CreditCard, Bot, Fingerprint, ChevronLeft, ChevronRight } from "lucide-react";
import About from "./About-us";
import Map from "./Investors";
import Contacts from "./Contact-us";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const tabData = {
  Tenants: [
    { title: "Save Money", icon: <CreditCard className="w-6 h-6 text-emerald-600" />, description: "You get a secure and efficient rental experience that’s as budget-friendly as it is hassle-free. Discover a smarter way to book and start saving today." },
    { title: "Online Booking", icon: <Bot className="w-6 h-6 text-emerald-600" />, description: "Book your next rental easily with Lif3away’s secure online reservation. With a protected payment process, you can reserve properties quickly." },
    { title: "ID Check Advanced", icon: <Fingerprint className="w-6 h-6 text-emerald-600" />, description: "Our service verifies landlords and agents, significantly reducing the risk of fraud, Especially beneficial for international tenants or those unfamiliar with the area, ensuring you can trust the people you’re dealing with." },
    { title: "AI Personal Agent", icon: <CreditCard className="w-6 h-6 text-emerald-600" />, description: "Let Lif3away’s AI Personal Agent do the heavy lifting for you. Increase your chances of securing the perfect place with tailored recommendations and smart insights, Your personal rental assistant, always by your side." },
    { title: "Live View", icon: <Bot className="w-6 h-6 text-emerald-600" />, description: "Whether you're in a different city or country, you can thoroughly assess a property before committing to a lease, saving you time and travel expenses while ensuring you get a clear, detailed view of your next home." },
    { title: "Veritrust", icon: <Fingerprint className="w-6 h-6 text-emerald-600" />, description: "The Veritrust means the landlord or agent has earned at least 10 reviews with 4 stars or higher, ensuring reliability and trustworthiness, Unlike other platforms, Lif3away sets the bar for transparency, so you can feel secure in your rental decisions." },
    { title: "Online Contract", icon: <CreditCard className="w-6 h-6 text-emerald-600" />, description: "Easily share and digitally sign rental agreements, ensuring speed, transparency, and reliability for both parties, Perfect for those relocating to another country, it simplifies the process and builds trust every step of the way." },
  ],
  Landlords: [
    { title: "Save Money", icon: <CreditCard className="w-6 h-6 text-emerald-600" />, description: "You Can Access the most affordable and transparent online booking system. No hidden fees, no complicated pricing. Save money, save time, and experience the difference with Lif3away." },
    { title: "Online Booking", icon: <Bot className="w-6 h-6 text-emerald-600" />, description: "Lif3away allows landlords to accept reservations effortlessly through a protected payment process, ensuring quick and reliable transactions. Manage your rentals with confidence and ease, no matter where your tenants are coming from." },
    { title: "ID Check Advanced", icon: <Fingerprint className="w-6 h-6 text-emerald-600" />, description: "Using ID scanning and facial biometric technology, we help landlords confirm the identity of prospective tenants, reducing the risk of fraud. This simple yet powerful process safeguards your property and streamlines tenant screening, making it faster and more reliable than ever before." },
    { title: "AI Personal Agent", icon: <CreditCard className="w-6 h-6 text-emerald-600" />, description: "Set competitive prices, optimize occupancy, and automatically create polished property descriptions. Get real-time market insights and task automation to save time and reduce errors, keeping your listings attractive and reducing vacancy periods." },
    { title: "Live View", icon: <Bot className="w-6 h-6 text-emerald-600" />, description: "Showcase your property efficiently with virtual tours, allowing potential tenants to explore without multiple in-person visits. Ideal for landlords with multiple listings or properties in different locations, it lets you conduct tours remotely, saving time and reaching more interested renters." },
    { title: "Veritrust", icon: <Fingerprint className="w-6 h-6 text-emerald-600" />, description: "This added layer of security helps reduce risks and gives you peace of mind, knowing your tenants have passed both identity and financial checks. Trust veritrust to make your rental experience safer, more reliable, and hassle-free."},
    { title: "Online Contract", icon: <CreditCard className="w-6 h-6 text-emerald-600" />, description: " Landlords can easily create, send, and manage rental contracts online, streamlining the leasing process. Automate paperwork, save time, and reduce errors, all within the platform, making property management more efficient and hassle-free." },
    { title: "Sponsored Ads", icon: <Bot className="w-6 h-6 text-emerald-600" />, description: "Accelerate your rental process and increase your property's visibility across continents. Reach a wider audience, improve attractiveness, and attract more potential tenants faster, all while enhancing the global appeal of your listings." },
  ],
  Agents: [
    { title: "Save Money", icon: <CreditCard className="w-6 h-6 text-emerald-600" />, description: "You can access the most affordable and transparent online booking system available. No hidden fees, no complicated pricing. Save money, save time, and experience the difference with Lif3away." },
    { title: "Online Booking", icon: <Bot className="w-6 h-6 text-emerald-600" />, description: "Lif3away allows landlords to accept reservations effortlessly through a protected payment process, ensuring quick and reliable transactions." },
    { title: "ID Check Advanced", icon: <Fingerprint className="w-6 h-6 text-emerald-600" />, description: "Using ID scanning and facial biometric technology, we help landlords confirm the identity of prospective tenants, reducing the risk of fraud. This simple yet powerful process not only safeguards your property but also streamlines tenant screening, making it faster and more reliable than ever before." },
    { title: "AI Personal Agent", icon: <CreditCard className="w-6 h-6 text-emerald-600" />, description: "Lif3away’s AI instantly generates property descriptions, saving time and ensuring consistency. With real-time market data, agents can optimize pricing and occupancy, quickly adapting to trends. Stay competitive and attract renters faster, all while boosting efficiency and revenue." },
    { title: "Live View", icon: <Bot className="w-6 h-6 text-emerald-600" />, description: "Lif3away’s live view feature lets agents showcase properties to interested tenants without in-person viewing. Ideal for agents with multiple listings or properties in different locations, it offers a time-saving solution for remote showings. Conduct tours effortlessly, attract more tenants, and manage properties more efficiently." },
    { title: "Veritrust", icon: <Fingerprint className="w-6 h-6 text-emerald-600" />, description: "This added layer of security helps reduce risks and gives you peace of mind, knowing your tenants have passed both identity and financial checks. Trust Veritrust to make your rental experience safer, more reliable, and hassle-free." },
    { title: "Online Contract", icon: <CreditCard className="w-6 h-6 text-emerald-600" />, description: " Lif3away enables agents to generate, distribute, and track contracts seamlessly for both tenants and landlords. By centralizing all paperwork within the platform, agents save time, reduce errors, and keep everything organized in one place." },
    { title: "Sponsored Ads", icon: <Bot className="w-6 h-6 text-emerald-600" />, description: "Accelerate your rental process and expand your properties’ visibility across continentswith Lif3away. Attract a wider audience, increase your property’s appeal, and secure more potential tenants faster. Enhance the global appeal of your listings, making them more attractive to renters from around the world" },
  ],
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"Tenants" | "Landlords" | "Agents">("Tenants");
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
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-start pl-[5%]">
            <h1 className="text-4xl font-light text-[#FEF7FF]">Simplify your move</h1>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="h-1/2 grid grid-cols-2">
          {/* Left Content */}
          <div className="bg-black p-12 flex items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-[#FEF7FF]">
                Discover the future of rental solutions
              </h2>
              <p className="text-lg text-gray-300">
                Join our exclusive community and be the first to experience a smarter, automated rental platform.
                Connecting you with vetted properties, trusted landlords, and seamless experiences.
              </p>
              <button className="px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition">
                Join the waiting list
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-center bg-black p-6">
            <div className="w-[400px] h-[280px] md:w-[450px] md:h-[320px] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/landing-page2.jpg"
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
            <div className="space-y-8 text-black">
              <h2 className="text-5xl font-light">Innovative features, unlimited power.</h2>
              <p className="text-gray-400 text-lg-[#1D1B20]">
                We know how stressful it can be to find a new home to rent and move, especially to a new city.
                Our goal is to break down all the barriers and risks, at the lowest possible cost, so you can focus only on what matters.
                That's why we invest in innovation, with the help of technology and AI we can offer never-before-seen features.
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
            setActiveCategory(category as "Tenants" | "Landlords" | "Agents");
            setActiveTab(0); // Reset to first card when changing category
          }}
          className={`px-6 py-2 rounded-full transition ${
            activeCategory === category ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
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
              activeTab === index ? "ring-2 ring-emerald-500" : "hover:ring-1 hover:ring-gray-300"
            }`}
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              {tab.icon}
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
          setActiveTab((prev) =>
            prev < Math.floor(tabData[activeCategory].length / 3) ? prev + 1 : prev // Navigate to next set of 3 cards
          );
        }}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
</section>





      <About />
      <Map />
      <Contacts/>
      <Footer />
    </div>
  );
}
