import { Building2, CreditCard, Bot, Fingerprint, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <section className="h-screen">
        <div className="flex flex-col h-full">
          {/* Top half - Image */}
          <div className="h-1/2 relative">
            <img 
              src="/images/about-us.jpg"
              alt="Modern living space" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex justify-center items-center" >
            <h1 className="text-2xl font-light text-white">Be part of the change you are looking for</h1>
          </div>
          </div>
          
          {/* Bottom half - Content */}
          <div className="h-1/2 bg-black text-white flex items-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl font-light mb-8">OUR STORY</h2>
              <p className="text-lg text-white leading-relaxed">
                Lif3away connects renters with quality, fully managed rental properties
                tailored to their needs. Whether you're here for a six-month contract, a
                temporary relocation, or just exploring a new chapter in life, we provide
                more than just a place to stay, we offer a seamless experience where
                technology meets hospitality.
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
              <h2 className="text-4xl font-light mb-8">WHAT WE OFFER</h2>
              <p className="text-lg text-white leading-relaxed">
                Lif3away connects renters with quality, fully managed rental properties
                tailored to their needs. Whether you're here for a six-month contract, a
                temporary relocation, or just exploring a new chapter in life, we provide
                more than just a place to stay, we offer a seamless experience where
                technology meets hospitality.
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
              <h2 className="text-4xl font-light mb-8">OUR MISSION</h2>
              <p className="text-lg text-white leading-relaxed">
                Lif3away connects renters with quality, fully managed rental properties
                tailored to their needs. Whether you're here for a six-month contract, a
                temporary relocation, or just exploring a new chapter in life, we provide
                more than just a place to stay, we offer a seamless experience where
                technology meets hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* Services Section 
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

          <div className="flex justify-betweenitems-center mt-12">
            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100">
              Subscribe
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
      </section>*/}
    </div>
  );
}