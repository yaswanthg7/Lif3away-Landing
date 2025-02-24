import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar/>
      {/* Hero Image */}
      <div className="h-[40vh] relative">
        <img 
          src="/images/contact-us.jpg"
          alt="Sunset beach"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-light text-[#FEF7FF] text-center mb-12">
      CONTACT US
    </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600 transition"
          >
            Send Message
          </button>
        </form>
        
      </div>
      <Footer />
    </div>
    
  );
}