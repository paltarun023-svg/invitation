import { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import GeneratorSection from './components/GeneratorSection';
import GallerySection from './components/GallerySection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                PixelForge AI
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#create" className="text-sm text-gray-300 hover:text-white transition-colors">Create</a>
              <a href="#gallery" className="text-sm text-gray-300 hover:text-white transition-colors">Gallery</a>
              <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-500/25">
                Get Started Free
              </button>
            </div>

            <button 
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-sm text-gray-300 hover:text-white py-2">Features</a>
              <a href="#create" className="block text-sm text-gray-300 hover:text-white py-2">Create</a>
              <a href="#gallery" className="block text-sm text-gray-300 hover:text-white py-2">Gallery</a>
              <a href="#pricing" className="block text-sm text-gray-300 hover:text-white py-2">Pricing</a>
              <button className="w-full mt-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg">
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <GeneratorSection />
        <GallerySection />
        <PricingSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
