import { useState } from 'react';
import { 
  Heart, Cake, Gift, GraduationCap, Baby, Crown,
  Palette, Download, Share2, Eye, Sparkles, 
  Calendar, Clock, MapPin, Users, Mail, Star
} from 'lucide-react';

type EventType = 'wedding' | 'birthday' | 'anniversary' | 'baby-shower' | 'graduation' | 'engagement';
type StyleType = 'elegant' | 'modern' | 'floral' | 'royal' | 'minimal' | 'boho';

const eventTypes = [
  { id: 'wedding' as EventType, name: 'Wedding', emoji: '💍', desc: 'Classic wedding invitations' },
  { id: 'birthday' as EventType, name: 'Birthday', emoji: '🎂', desc: 'Birthday party invites' },
  { id: 'anniversary' as EventType, name: 'Anniversary', emoji: '💝', desc: 'Celebrate milestones' },
  { id: 'baby-shower' as EventType, name: 'Baby Shower', emoji: '👶', desc: 'Welcome the little one' },
  { id: 'graduation' as EventType, name: 'Graduation', emoji: '🎓', desc: 'Celebrate achievements' },
  { id: 'engagement' as EventType, name: 'Engagement', emoji: '💐', desc: 'Engagement parties' },
];

const styleTypes = [
  { id: 'elegant' as StyleType, name: 'Elegant', color: 'from-amber-200 to-rose-200', textColor: 'text-rose-900' },
  { id: 'modern' as StyleType, name: 'Modern', color: 'from-slate-100 to-zinc-200', textColor: 'text-slate-900' },
  { id: 'floral' as StyleType, name: 'Floral', color: 'from-pink-100 to-purple-100', textColor: 'text-purple-900' },
  { id: 'royal' as StyleType, name: 'Royal', color: 'from-indigo-200 to-purple-200', textColor: 'text-indigo-900' },
  { id: 'minimal' as StyleType, name: 'Minimal', color: 'from-gray-50 to-white', textColor: 'text-gray-900' },
  { id: 'boho' as StyleType, name: 'Boho', color: 'from-orange-100 to-amber-100', textColor: 'text-orange-900' },
];

const colorThemes = [
  { id: 'rose', name: 'Rose', bg: 'from-rose-100 via-pink-50 to-rose-100', accent: 'bg-rose-500', text: 'text-rose-900' },
  { id: 'gold', name: 'Gold', bg: 'from-amber-50 via-yellow-50 to-amber-100', accent: 'bg-amber-500', text: 'text-amber-900' },
  { id: 'sage', name: 'Sage', bg: 'from-emerald-50 via-green-50 to-teal-50', accent: 'bg-emerald-500', text: 'text-emerald-900' },
  { id: 'navy', name: 'Navy', bg: 'from-slate-100 via-blue-50 to-slate-100', accent: 'bg-blue-600', text: 'text-blue-900' },
  { id: 'lavender', name: 'Lavender', bg: 'from-purple-50 via-violet-50 to-purple-100', accent: 'bg-purple-500', text: 'text-purple-900' },
  { id: 'peach', name: 'Peach', bg: 'from-orange-50 via-amber-50 to-orange-100', accent: 'bg-orange-400', text: 'text-orange-900' },
];

export default function InvitationSection() {
  const [eventType, setEventType] = useState<EventType>('wedding');
  const [styleType, setStyleType] = useState<StyleType>('elegant');
  const [colorTheme, setColorTheme] = useState('rose');
  
  // Form data
  const [name1, setName1] = useState('Emma');
  const [name2, setName2] = useState('James');
  const [eventDate, setEventDate] = useState('June 15, 2026');
  const [eventTime, setEventTime] = useState('4:00 PM');
  const [venue, setVenue] = useState('The Grand Ballroom');
  const [address, setAddress] = useState('123 Garden Avenue, New York');
  const [message, setMessage] = useState('Together with their families, request the honor of your presence');
  const [rsvpDate, setRsvpDate] = useState('May 30, 2026');
  const [rsvpEmail, setRsvpEmail] = useState('emma.james@wedding.com');

  const selectedTheme = colorThemes.find(c => c.id === colorTheme) || colorThemes[0];
  const selectedStyle = styleTypes.find(s => s.id === styleType) || styleTypes[0];

  const getEventTitle = () => {
    switch (eventType) {
      case 'wedding': return 'Wedding Invitation';
      case 'birthday': return 'Birthday Party';
      case 'anniversary': return 'Anniversary Celebration';
      case 'baby-shower': return 'Baby Shower';
      case 'graduation': return 'Graduation Party';
      case 'engagement': return 'Engagement Party';
    }
  };

  const getNamesDisplay = () => {
    if (eventType === 'birthday' || eventType === 'graduation') {
      return name1;
    }
    return `${name1} & ${name2}`;
  };

  const getDecorativeElements = () => {
    switch (eventType) {
      case 'wedding': return '💐 ✨ 💐';
      case 'birthday': return '🎈 🎉 🎈';
      case 'anniversary': return '💕 🌹 💕';
      case 'baby-shower': return '🍼 🧸 🍼';
      case 'graduation': return '🎓 ⭐ 🎓';
      case 'engagement': return '💍 💐 💍';
    }
  };

  return (
    <section id="invitations" className="relative py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm mb-4">
            <Heart className="w-3.5 h-3.5" />
            Invitation Card Creator
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Design Beautiful
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent"> Invitations</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Create stunning wedding, birthday, and party invitations in minutes. Choose from beautiful templates and customize every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Form Controls */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Event Type Selection */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Event Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {eventTypes.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setEventType(event.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      eventType === event.id
                        ? 'border-rose-500/50 bg-rose-500/10'
                        : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{event.emoji}</span>
                      <div>
                        <div className="text-sm font-medium text-white">{event.name}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Style Selection */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Card Style
              </label>
              <div className="grid grid-cols-3 gap-2">
                {styleTypes.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setStyleType(style.id)}
                    className={`relative p-3 rounded-xl border transition-all ${
                      styleType === style.id
                        ? 'border-rose-500/50 ring-2 ring-rose-500/25'
                        : 'border-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div className={`w-full aspect-video rounded-lg bg-gradient-to-br ${style.color} mb-2`} />
                    <div className="text-xs text-gray-300 text-center font-medium">{style.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Theme */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Color Theme
              </label>
              <div className="grid grid-cols-6 gap-2">
                {colorThemes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setColorTheme(theme.id)}
                    className={`relative p-1.5 rounded-xl border transition-all ${
                      colorTheme === theme.id
                        ? 'border-rose-500/50 ring-2 ring-rose-500/25'
                        : 'border-white/[0.06] hover:border-white/20'
                    }`}
                  >
                    <div className={`w-full aspect-square rounded-lg bg-gradient-to-br ${theme.bg}`} />
                    <div className="text-[10px] text-gray-400 text-center mt-1">{theme.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Details Form */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 space-y-4">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Event Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {eventType === 'birthday' || eventType === 'graduation' ? 'Honoree Name' : 'First Name'}
                  </label>
                  <input
                    type="text"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    placeholder="Name"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/25 transition-all"
                  />
                </div>
                {(eventType === 'wedding' || eventType === 'anniversary' || eventType === 'engagement') && (
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Second Name
                    </label>
                    <input
                      type="text"
                      value={name2}
                      onChange={(e) => setName2(e.target.value)}
                      placeholder="Name"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/25 transition-all"
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Date
                  </label>
                  <input
                    type="text"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    placeholder="June 15, 2026"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/25 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Time
                  </label>
                  <input
                    type="text"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    placeholder="4:00 PM"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/25 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Venue
                </label>
                <input
                  type="text"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="The Grand Ballroom"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/25 transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Garden Avenue, New York"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/25 transition-all"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 mb-1 block flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  Personal Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your special message..."
                  rows={2}
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/25 transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    RSVP By
                  </label>
                  <input
                    type="text"
                    value={rsvpDate}
                    onChange={(e) => setRsvpDate(e.target.value)}
                    placeholder="May 30, 2026"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/25 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    RSVP Email
                  </label>
                  <input
                    type="text"
                    value={rsvpEmail}
                    onChange={(e) => setRsvpEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/25 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Live Preview */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-rose-400" />
                  <span className="text-sm font-medium text-gray-300">Live Preview</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* The Invitation Card */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedTheme.bg}`} />
                
                {/* Decorative Border */}
                {styleType === 'elegant' || styleType === 'royal' ? (
                  <div className="absolute inset-4 border-2 border-current opacity-20 rounded-lg" style={{ borderColor: 'currentColor' }} />
                ) : null}

                {styleType === 'floral' && (
                  <>
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-300/30 to-transparent rounded-full blur-2xl" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-300/30 to-transparent rounded-full blur-2xl" />
                  </>
                )}

                {/* Card Content */}
                <div className={`relative h-full flex flex-col items-center justify-center p-8 text-center ${selectedTheme.text}`}>
                  {/* Decorative Elements */}
                  <div className="text-2xl mb-4 tracking-widest">{getDecorativeElements()}</div>

                  {/* Event Title */}
                  <div className={`text-xs uppercase tracking-[0.3em] mb-4 opacity-70 ${
                    styleType === 'modern' ? 'font-mono' : 'font-serif'
                  }`}>
                    {getEventTitle()}
                  </div>

                  {/* Names */}
                  <div className={`mb-6 ${
                    styleType === 'elegant' || styleType === 'royal' 
                      ? 'font-serif text-3xl sm:text-4xl italic' 
                      : styleType === 'modern' 
                        ? 'font-mono text-2xl sm:text-3xl font-light tracking-wide'
                        : styleType === 'minimal'
                          ? 'text-2xl sm:text-3xl font-light'
                          : 'font-serif text-3xl sm:text-4xl'
                  }`}>
                    {getNamesDisplay()}
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`h-px w-12 ${selectedTheme.accent} opacity-40`} />
                    <Star className="w-3 h-3 opacity-40" />
                    <div className={`h-px w-12 ${selectedTheme.accent} opacity-40`} />
                  </div>

                  {/* Message */}
                  <p className={`text-sm mb-6 max-w-xs leading-relaxed ${
                    styleType === 'elegant' || styleType === 'royal' ? 'font-serif italic' : ''
                  }`}>
                    {message}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-3.5 h-3.5 opacity-60" />
                      <span className="font-medium">{eventDate}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-3.5 h-3.5 opacity-60" />
                      <span>{eventTime}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-3.5 h-3.5 opacity-60" />
                      <span>{venue}</span>
                    </div>
                    <div className="text-xs opacity-60">{address}</div>
                  </div>

                  {/* RSVP */}
                  <div className="mt-6 pt-4 border-t border-current opacity-60 w-full max-w-xs">
                    <div className="text-xs uppercase tracking-wider mb-1">RSVP by {rsvpDate}</div>
                    <div className="text-xs">{rsvpEmail}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button className="py-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl font-semibold text-white text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-rose-500/25 transition-all">
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button className="py-3 bg-white/5 border border-white/10 rounded-xl font-semibold text-white text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              {/* Additional Options */}
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-400">
                <button className="hover:text-white transition-colors flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  AI Enhance
                </button>
                <span>•</span>
                <button className="hover:text-white transition-colors">Print Ready</button>
                <span>•</span>
                <button className="hover:text-white transition-colors">Digital Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
