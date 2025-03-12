import { useState } from 'react';
import Navbar from '../components/Navbar';


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const zohoFormUrl = "https://crm.zoho.com/crm/WebToLeadForm";

    const formBody = new URLSearchParams();
    formBody.append("First Name", formData.firstName);
    formBody.append("Last Name", formData.lastName);
    formBody.append("Email", formData.email);
    formBody.append("Phone", formData.phone);
    formBody.append("Description", formData.message);
    formBody.append("xnQsjsdp", "0ed2ccee1d2d05cea9a30abfa2344985fcb2a28a8027c9fedb4f4b2e918e1d4b");
    formBody.append("xmIwtLD", "b2cd68c3d2ddb8629f082d25750541622131789ea1504e9eea37dc79984b3f0a76104a1568d95f197f0b551177389550");
    formBody.append("actionType", "TGVhZHM=");

    try {
      const response = await fetch(zohoFormUrl, {
        method: "POST",
        body: formBody,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
  
        // Clear the form after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Image */}
      <div className="h-[40vh] relative">
        <img src="/images/contact-us.jpg" alt="Contact Us" className="w-full h-full object-cover" />
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-light text-[#FEF7FF] text-center mb-12">
          CONTACT US
        </h1>

        {successMessage && (
         <div className="w-full border border-gray-700 text-white py-2 rounded-full text-center">
         {successMessage}
        </div>
       
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            className="w-full bg-transparent border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          <button
            type="submit"
            className="w-full border border-gray-700 text-white py-2 rounded-full hover:bg-white hover:text-gray-600 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      
    </div>
  );
}
