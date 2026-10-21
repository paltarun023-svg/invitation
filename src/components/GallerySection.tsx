import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Download, Eye, Play, Filter } from 'lucide-react';

const categories = ['All', 'Product Photos', 'Brand Videos', 'Social Media', 'Food & Beverage', 'Fashion', 'Tech'];

const galleryItems = [
  {
    id: 1,
    type: 'photo',
    category: 'Product Photos',
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    title: 'Premium Skincare Set',
    business: 'Glow Beauty',
    likes: 234,
    views: 1200,
    emoji: '🧴',
  },
  {
    id: 2,
    type: 'video',
    category: 'Brand Videos',
    gradient: 'from-fuchsia-600 via-pink-600 to-rose-700',
    title: 'Summer Collection Launch',
    business: 'Urban Threads',
    likes: 567,
    views: 3400,
    emoji: '👗',
  },
  {
    id: 3,
    type: 'photo',
    category: 'Food & Beverage',
    gradient: 'from-amber-500 via-orange-500 to-red-600',
    title: 'Artisan Coffee Branding',
    business: 'Roast & Co.',
    likes: 189,
    views: 890,
    emoji: '☕',
  },
  {
    id: 4,
    type: 'photo',
    category: 'Tech',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    title: 'Wireless Earbuds Promo',
    business: 'SoundWave',
    likes: 445,
    views: 2100,
    emoji: '🎧',
  },
  {
    id: 5,
    type: 'video',
    category: 'Social Media',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    title: 'Fitness App Promo Reel',
    business: 'FitLife',
    likes: 789,
    views: 5600,
    emoji: '💪',
  },
  {
    id: 6,
    type: 'photo',
    category: 'Fashion',
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
    title: 'Luxury Watch Collection',
    business: 'TimeCraft',
    likes: 321,
    views: 1800,
    emoji: '⌚',
  },
  {
    id: 7,
    type: 'photo',
    category: 'Food & Beverage',
    gradient: 'from-lime-500 via-green-500 to-emerald-600',
    title: 'Organic Snack Packaging',
    business: 'GreenBites',
    likes: 156,
    views: 720,
    emoji: '🥗',
  },
  {
    id: 8,
    type: 'video',
    category: 'Product Photos',
    gradient: 'from-indigo-600 via-violet-600 to-purple-700',
    title: 'Smart Home Device Ad',
    business: 'HomeIQ',
    likes: 298,
    views: 1500,
    emoji: '🏠',
  },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-4">
            <Eye className="w-3.5 h-3.5" />
            Community Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            See What Others Are
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Creating</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Browse AI-generated content from businesses like yours. Get inspired and start creating.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                  : 'bg-white/5 text-gray-400 border border-white/[0.06] hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-110`} />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <span className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{item.emoji}</span>
                <div className="text-center">
                  <div className="text-white font-semibold text-sm">{item.title}</div>
                  <div className="text-white/60 text-xs mt-1">{item.business}</div>
                </div>
              </div>

              {/* Video indicator */}
              {item.type === 'video' && (
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-white fill-white" />
                </div>
              )}

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-end transition-opacity duration-300 ${
                hoveredId === item.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="w-full p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-white/80">
                        <Heart className="w-3.5 h-3.5 text-rose-400" />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/80">
                        <Eye className="w-3.5 h-3.5" />
                        {item.views}
                      </span>
                    </div>
                    <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                      <Download className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all">
            Load More Examples
          </button>
        </div>
      </div>
    </section>
  );
}
