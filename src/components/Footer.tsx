import { Sparkles, Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                PixelForge AI
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Create stunning AI-generated photos and videos for your business. Professional quality content in seconds.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">AI Photo Generator</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">AI Video Creator</a></li>
              <li><a href="#invitations" className="text-sm text-gray-400 hover:text-white transition-colors">Invitation Cards</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Background Remover</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Brand Kit</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">API Access</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  newsletter@pixelforge.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 PixelForge AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
