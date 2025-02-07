import { Settings } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Map() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <div className="relative h-screen">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Earth from space" 
          className="w-full h-full object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/70">
          <div className="max-w-4xl mx-auto px-6 pt-32">
            <h1 className="text-5xl font-light mb-8">Driving rental evolution</h1>
            <div className="flex justify-between items-start">
              <div className="max-w-lg">
                <p className="text-lg mb-4">
                  Join our exclusive community and be the first to experience a smarter,
                  automated rental platform.
                </p>
                <p className="text-lg text-emerald-400">
                  Connecting you with vetted properties, trusted landlords, and seamless experiences.
                </p>
              </div>
              <Settings className="w-32 h-32 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-screen">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Earth from space" 
          className="w-full h-full object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/70">
          <div className="max-w-4xl mx-auto px-6 pt-32">
            <h1 className="text-5xl font-light mb-8">Our Mission</h1>
            <div className="flex justify-between items-start">
              <div className="max-w-lg">
                <p className="text-lg mb-4">
                  Join our exclusive community and be the first to experience a smarter,
                  automated rental platform.
                </p>
                <p className="text-lg text-emerald-400">
                  Connecting you with vetted properties, trusted landlords, and seamless experiences.
                </p>
              </div>
              <Settings className="w-32 h-32 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-screen">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Earth from space" 
          className="w-full h-full object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/70">
          <div className="max-w-4xl mx-auto px-6 pt-32">
            <h1 className="text-5xl font-light mb-8">Whats Sets Us Apart</h1>
            <div className="flex justify-between items-start">
              <div className="max-w-lg">
                <p className="text-lg mb-4">
                  Join our exclusive community and be the first to experience a smarter,
                  automated rental platform.
                </p>
                <p className="text-lg text-emerald-400">
                  Connecting you with vetted properties, trusted landlords, and seamless experiences.
                </p>
              </div>
              <Settings className="w-32 h-32 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-screen">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Earth from space" 
          className="w-full h-full object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/70">
          <div className="max-w-4xl mx-auto px-6 pt-32">
            <h1 className="text-5xl font-light mb-8">Whats Sets Us Apart</h1>
            <div className="flex justify-between items-start">
              <div className="max-w-lg">
                <p className="text-lg mb-4">
                  Join our exclusive community and be the first to experience a smarter,
                  automated rental platform.
                </p>
                <p className="text-lg text-emerald-400">
                  Connecting you with vetted properties, trusted landlords, and seamless experiences.
                </p>
              </div>
              <Settings className="w-32 h-32 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}