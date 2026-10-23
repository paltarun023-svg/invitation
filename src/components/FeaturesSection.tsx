import { Camera, Video, Palette, Layers, Zap, Globe, Shield, RefreshCw, Heart } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'AI Product Photography',
    description: 'Generate photorealistic product images in any setting, style, or mood. Perfect for e-commerce and catalogs.',
    color: 'from-violet-500 to-blue-500',
  },
  {
    icon: Video,
    title: 'Marketing Videos',
    description: 'Create scroll-stopping video ads and promotional content with AI-powered motion and effects.',
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Invitation Cards',
    description: 'Design beautiful wedding, birthday, and party invitations with stunning templates and live previews.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Brand Consistency',
    description: 'Maintain your brand identity across all generated content with custom style presets and color matching.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Layers,
    title: 'Background Removal',
    description: 'Instantly remove or replace backgrounds. Place products in any environment with photorealistic lighting.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate high-quality images in seconds, not hours. Batch process entire product catalogs overnight.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Globe,
    title: 'Multi-Platform Ready',
    description: 'Auto-resize and optimize content for Instagram, TikTok, Facebook, LinkedIn, and more.',
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: Shield,
    title: 'Commercial License',
    description: 'All generated content comes with full commercial usage rights. Use anywhere, no restrictions.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: RefreshCw,
    title: 'Unlimited Revisions',
    description: 'Not quite right? Regenerate with different styles, angles, and compositions until it\'s perfect.',
    color: 'from-lime-500 to-green-500',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-4">
            <Zap className="w-3.5 h-3.5" />
            Powerful Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> Scale </span>
            Your Brand
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            From product photos to video ads, our AI platform handles it all with professional quality at a fraction of the cost.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
