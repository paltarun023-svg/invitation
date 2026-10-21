import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, Wand2, Image, Video, Camera, Palette, 
  Sparkles, Loader2, Download, RefreshCw, ChevronDown,
  CheckCircle, AlertCircle
} from 'lucide-react';

type ContentType = 'photo' | 'video';
type GenerationStatus = 'idle' | 'generating' | 'complete';

const styles = [
  { id: 'professional', name: 'Professional', emoji: '💼', desc: 'Clean, corporate look' },
  { id: 'lifestyle', name: 'Lifestyle', emoji: '🌿', desc: 'Natural, authentic feel' },
  { id: 'minimal', name: 'Minimal', emoji: '⚪', desc: 'Simple, elegant design' },
  { id: 'vibrant', name: 'Vibrant', emoji: '🎨', desc: 'Bold, eye-catching colors' },
  { id: 'luxury', name: 'Luxury', emoji: '✨', desc: 'Premium, high-end aesthetic' },
  { id: 'playful', name: 'Playful', emoji: '🎉', desc: 'Fun, energetic vibe' },
];

const backgrounds = [
  { id: 'studio', name: 'Studio White', color: 'bg-gray-100' },
  { id: 'office', name: 'Modern Office', color: 'bg-amber-100' },
  { id: 'outdoor', name: 'Nature', color: 'bg-green-100' },
  { id: 'urban', name: 'Urban Street', color: 'bg-slate-300' },
  { id: 'gradient', name: 'Gradient', color: 'bg-gradient-to-br from-violet-200 to-pink-200' },
  { id: 'custom', name: 'Custom', color: 'bg-gradient-to-br from-blue-200 to-cyan-200' },
];

const resolutions = ['1024×1024', '1920×1080', '1080×1920', '1200×628'];

export default function GeneratorSection() {
  const [contentType, setContentType] = useState<ContentType>('photo');
  const [selectedStyle, setSelectedStyle] = useState('professional');
  const [selectedBg, setSelectedBg] = useState('studio');
  const [resolution, setResolution] = useState('1024×1024');
  const [prompt, setPrompt] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [status, setStatus] = useState<GenerationStatus>('idle');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedFile(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    setStatus('generating');
    setGeneratedImages([]);
    
    // Simulate AI generation
    setTimeout(() => {
      const colors = [
        'from-violet-600 via-purple-600 to-indigo-600',
        'from-fuchsia-600 via-pink-600 to-rose-600',
        'from-amber-500 via-orange-500 to-red-500',
        'from-emerald-500 via-teal-500 to-cyan-500',
      ];
      setGeneratedImages(colors);
      setStatus('complete');
    }, 4000);
  };

  const handleReset = () => {
    setStatus('idle');
    setGeneratedImages([]);
    setUploadedFile(null);
    setPrompt('');
  };

  return (
    <section id="create" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-sm mb-4">
            <Wand2 className="w-3.5 h-3.5" />
            AI Creation Studio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Create Your
            <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent"> AI Content</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Upload your product or describe your vision, and let our AI create stunning visuals for your business.
          </p>
        </motion.div>

        {/* Generator Card */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm overflow-hidden">
            {/* Content Type Toggle */}
            <div className="flex border-b border-white/[0.06]">
              <button
                onClick={() => setContentType('photo')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium transition-all ${
                  contentType === 'photo'
                    ? 'text-white bg-white/[0.05] border-b-2 border-violet-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Image className="w-4 h-4" />
                AI Photos
              </button>
              <button
                onClick={() => setContentType('video')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium transition-all ${
                  contentType === 'video'
                    ? 'text-white bg-white/[0.05] border-b-2 border-fuchsia-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Video className="w-4 h-4" />
                AI Videos
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Upload Area */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Upload Product Image (Optional)
                      </label>
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="relative border-2 border-dashed border-white/10 rounded-xl p-8 text-center cursor-pointer hover:border-violet-500/50 hover:bg-violet-500/5 transition-all group"
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        {uploadedFile ? (
                          <div className="flex items-center justify-center gap-4">
                            <img src={uploadedFile} alt="Uploaded" className="w-20 h-20 object-cover rounded-lg" />
                            <div className="text-left">
                              <p className="text-sm text-white font-medium">Image uploaded</p>
                              <p className="text-xs text-gray-400">Click to change</p>
                            </div>
                          </div>
                        ) : (
                          <>
                            <Upload className="w-10 h-10 text-gray-500 mx-auto mb-3 group-hover:text-violet-400 transition-colors" />
                            <p className="text-sm text-gray-400">
                              <span className="text-violet-400 font-medium">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g., Acme Coffee Co."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all"
                      />
                    </div>

                    {/* Prompt */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Describe Your Vision
                      </label>
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder={contentType === 'photo' 
                          ? "e.g., A premium coffee bag on a marble countertop with morning light streaming through a window, minimalist aesthetic"
                          : "e.g., A 15-second product showcase with smooth camera movement, elegant transitions, and upbeat music"
                        }
                        rows={3}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 transition-all resize-none"
                      />
                    </div>

                    {/* Style Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Visual Style
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {styles.map((style) => (
                          <button
                            key={style.id}
                            onClick={() => setSelectedStyle(style.id)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                              selectedStyle === style.id
                                ? 'border-violet-500/50 bg-violet-500/10'
                                : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{style.emoji}</span>
                              <div>
                                <div className="text-sm font-medium text-white">{style.name}</div>
                                <div className="text-xs text-gray-400">{style.desc}</div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Background Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Background
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                        {backgrounds.map((bg) => (
                          <button
                            key={bg.id}
                            onClick={() => setSelectedBg(bg.id)}
                            className={`relative p-2 rounded-xl border transition-all ${
                              selectedBg === bg.id
                                ? 'border-violet-500/50 ring-2 ring-violet-500/25'
                                : 'border-white/[0.06] hover:border-white/20'
                            }`}
                          >
                            <div className={`w-full aspect-square rounded-lg ${bg.color} mb-1`} />
                            <div className="text-xs text-gray-400 text-center truncate">{bg.name}</div>
                            {selectedBg === bg.id && (
                              <div className="absolute -top-1 -right-1 w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Resolution */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Resolution
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {resolutions.map((res) => (
                          <button
                            key={res}
                            onClick={() => setResolution(res)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                              resolution === res
                                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                                : 'bg-white/5 text-gray-400 border border-white/[0.06] hover:bg-white/10'
                            }`}
                          >
                            {res}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Generate Button */}
                    <button
                      onClick={handleGenerate}
                      className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-semibold text-white shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-5 h-5" />
                      Generate {contentType === 'photo' ? 'Photos' : 'Video'}
                    </button>
                  </motion.div>
                )}

                {status === 'generating' && (
                  <motion.div
                    key="generating"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-16 text-center"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full border-4 border-violet-500/20" />
                      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500 animate-spin" />
                      <div className="absolute inset-3 rounded-full border-4 border-transparent border-t-fuchsia-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-violet-400 animate-pulse" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Creating Your {contentType === 'photo' ? 'Photos' : 'Video'}</h3>
                    <p className="text-gray-400 mb-6">Our AI is crafting stunning visuals for your business...</p>
                    <div className="max-w-sm mx-auto">
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 4, ease: 'easeInOut' }}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <span>Analyzing prompt</span>
                        <span>~30 seconds</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {status === 'complete' && (
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white">Your AI-Generated Content</h3>
                        <p className="text-sm text-gray-400">4 variations created • Ready to download</p>
                      </div>
                      <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-all"
                      >
                        <RefreshCw className="w-4 h-4" />
                        New Creation
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {generatedImages.map((gradient, i) => (
                        <motion.div
                          key={i}
                          className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.15 }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl mb-2">
                                {contentType === 'photo' ? '📸' : '🎬'}
                              </div>
                              <div className="text-white/80 text-sm font-medium">
                                {businessName || 'Your Business'}
                              </div>
                              <div className="text-white/50 text-xs mt-1">
                                Variation {i + 1}
                              </div>
                            </div>
                          </div>
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                              <Download className="w-5 h-5 text-white" />
                            </button>
                            <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                              <RefreshCw className="w-5 h-5 text-white" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/25 transition-all">
                        <Download className="w-5 h-5" />
                        Download All
                      </button>
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                        <RefreshCw className="w-5 h-5" />
                        Regenerate
                      </button>
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                        <Palette className="w-5 h-5" />
                        Edit Style
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
