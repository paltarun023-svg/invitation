import { Sparkles, ArrowRight, Play, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-gray-300">Powered by Latest AI Models</span>
            <span className="px-2 py-0.5 text-xs font-medium bg-violet-500/20 text-violet-300 rounded-full">NEW</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-white">Create Stunning</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              AI Photos & Videos
            </span>
            <br />
            <span className="text-white">For Your Business</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Transform your brand with AI-generated product photos, marketing videos, 
            and social media content. No studio needed — just your imagination.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#create"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-semibold text-white shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all hover:scale-105 active:scale-95"
            >
              Start Creating Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              <Play className="w-5 h-5 text-violet-400" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-sm text-gray-400">Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2M+</div>
              <div className="text-sm text-gray-400">Photos Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9</div>
              <div className="flex items-center gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-400 ml-1">Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Preview Cards */}
        <div className="relative mt-20 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1">
            <div className="rounded-xl overflow-hidden bg-slate-900/80 backdrop-blur-sm">
              {/* Mock Dashboard Preview */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 flex-1 h-6 bg-white/5 rounded-md" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    'from-violet-600 to-blue-600',
                    'from-fuchsia-600 to-pink-600',
                    'from-amber-500 to-orange-600',
                  ].map((gradient, i) => (
                    <div
                      key={i}
                      className={`aspect-video rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center animate-fade-in-scale`}
                      style={{ animationDelay: `${1 + i * 0.2}s` }}
                    >
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
                          {i === 0 ? '📸' : i === 1 ? '🎬' : '✨'}
                        </div>
                        <div className="text-xs text-white/80">
                          {['Product Shot', 'Brand Video', 'Social Post'][i]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <div className="flex-1 h-3 bg-white/5 rounded-full" />
                  <div className="w-24 h-3 bg-violet-500/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
