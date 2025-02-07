import { Building2, CreditCard, Bot, Fingerprint, ChevronLeft, ChevronRight } from 'lucide-react';
import About from './About';
import Map from './Map';
import Contacts from './Contacts';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      {/* Hero Section */}
      <section className="h-screen flex flex-col">
        {/* Top half - Background Image */}
        <div className="h-1/2 relative">
          <img 
            src="/images/landing-page.JPG"
            alt="Modern architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center" >
            <h1 className="text-2xl font-light text-white">Simplify your move</h1>
          </div>
        </div>
        
        {/* Bottom half - Content and Image */}
        <div className="h-1/2 grid grid-cols-2">
          {/* Left side - Content */}
          <div className="bg-black p-12 flex items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-white">Discover the future of rental solutions</h2>
              <p className="text-lg text-gray-300">
                Join our exclusive community and be the first to experience a smarter, automated rental platform.
              </p>
              <button className="px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition">
                Join the waiting list
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80" 
              alt="Modern interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <p className="text-gray-400 text-lg">
                We know how stressful it can be to find a new home to rent and move, especially to a new city.
                Our goal is to break down all the barriers and risks, at the lowest possible cost, so you can focus only on what matters.
                That's why we invest in innovation, with the help of technology and AI we can offer never-before-seen features.
              </p>
              <div className="flex items-center space-x-3 text-emerald-400">
                <Building2 className="w-6 h-6" />
                <span className="text-2xl">New York, USA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex space-x-4 mb-12">
            <button className="px-6 py-2 bg-gray-100 rounded-full text-gray-900 hover:bg-gray-200">
              Tenants
            </button>
            <button className="px-6 py-2 bg-gray-700 rounded-full text-white">
              Landlords
            </button>
            <button className="px-6 py-2 bg-gray-700 rounded-full text-white">
              Professionals
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">ONLINE BOOKING</h3>
              <p className="text-gray-600">
                Book your next home easily with Lif3away's secure online reservation!
                With a protected payment process, you can reserve properties quickly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI AGENT</h3>
              <p className="text-gray-600">
                Book your next home easily with Lif3away's secure online reservation!
                With a protected payment process, you can reserve properties quickly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Fingerprint className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">ID CHECK</h3>
              <p className="text-gray-600">
                Our service verifies landlords and agents, significantly reducing the risk of fraud, beneficial for international tenants or those unfamiliar with the area.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <button className="px-6 py-6 border border-gray-300 rounded-full hover:bg-gray-100">
              Discover more
            </button>
            <div className="ml-auto flex">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ChevronRight className="w-5 h-5" />
              </button>
           </div>
          </div>
        </div>
      </section>
      <About/>
      <Map/>
      <Contacts/>
      <Footer/>
    </div>
  );
}