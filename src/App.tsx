import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import MinecraftCharacter from './components/MinecraftCharacter';
import PostList from './components/PostList';
import ContactModal from './components/ContactModal';
import { Youtube, Trophy, MessageSquare, Play, Info, Instagram, Music2, User } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { t } = useLanguage();
  const [visitorCount, setVisitorCount] = useState(84);

  useEffect(() => {
    const savedCount = localStorage.getItem('visitor_count');
    if (savedCount) {
      setVisitorCount(parseInt(savedCount, 10));
    }
  }, []);

  const handleVisitorClick = () => {
    const newCount = visitorCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem('visitor_count', newCount.toString());
  };

  const stats = [
    { label: t.sidebar.exp, value: '0.5', icon: <Trophy size={16} className="text-yellow-500" />, unit: t.sidebar.expUnit },
    { label: t.sidebar.promoted, value: '3', icon: <MessageSquare size={16} className="text-blue-500" /> },
    {
      label: t.sidebar.visitors,
      value: visitorCount.toString(),
      icon: <User size={16} className="text-green-500" />,
      onClick: handleVisitorClick
    },
  ];

  return (
    <div className="min-h-screen bg-[#05050a] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Immersive Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(239,68,68,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 mix-blend-overlay" />
      </div>

      <Navbar />

      <main className="relative z-10 container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Main Hero Section - Popup Style */}
          <div id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Sidebar - Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-[#12121e]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                <div className="absolute -inset-2 bg-gradient-to-tr from-red-600 via-blue-600 to-red-600 rounded-full blur-md opacity-20 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#12121e] bg-[#1a1a2e] shadow-2xl">
                   <img src="https://minotar.net/helm/MiniOmega_69/256.png" alt="MiniOmega_69 Head" className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-500" />
                </div>
              </div>

              <div className="mb-8">
                <h1 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                  MiniOmega_69
                </h1>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">{t.sidebar.title}</p>
              </div>

              <div className="w-full space-y-3 mb-8">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    onClick={stat.onClick}
                    className={`bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between group/stat transition-all hover:translate-x-1 ${stat.onClick ? 'cursor-pointer hover:bg-white/15 hover:border-green-500/30 active:scale-95' : 'hover:bg-white/10'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg group-hover/stat:bg-white/10 transition-colors">
                        {stat.icon}
                      </div>
                      <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
                    </div>
                    <span className="font-bold text-white tracking-wider">{stat.value} {stat.unit || ''}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mb-8">
                <a href="https://youtube.com/@MiniOmega_69" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-red-500/10 border border-white/10 rounded-2xl transition-all hover:scale-110"><Youtube size={22} className="text-red-500" /></a>
                <a href="https://instagram.com/jakubecz._.j" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-pink-500/10 border border-white/10 rounded-2xl transition-all hover:scale-110"><Instagram size={22} className="text-pink-500" /></a>
                <a href="https://tiktok.com/@MiniOmega_69" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-cyan-500/10 border border-white/10 rounded-2xl transition-all hover:scale-110"><Music2 size={22} className="text-cyan-400" /></a>
              </div>

              <button
                onClick={() => setIsContactOpen(true)}
                className="w-full py-5 bg-gradient-to-br from-red-600 to-blue-700 rounded-3xl font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] hover:shadow-blue-500/40 hover:-translate-y-1 transition-all active:translate-y-0"
              >
                {t.sidebar.hire}
              </button>
            </motion.div>

            {/* Right Main Content - Character & About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 flex flex-col gap-8"
            >
              {/* Character Window */}
              <div className="bg-[#12121e]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl flex-1 relative overflow-hidden flex items-center justify-center min-h-[500px] group/window">
                {/* Window Controls Decoration */}
                <div className="absolute top-6 left-8 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40 shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40 shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                </div>

                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Name Tag above head */}
                  <div className="absolute top-0 z-20 flex flex-col items-center gap-2 group-hover/window:-translate-y-2 transition-transform duration-500">
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full shadow-2xl">
                      <span className="text-sm font-black tracking-widest uppercase text-white drop-shadow-lg">{t.hero.nametag}</span>
                    </div>
                    <div className="w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent" />
                  </div>

                  <MinecraftCharacter skin="MiniOmega_69" />

                  {/* Speech Bubbles */}
                  <div className="absolute top-1/3 right-4 md:right-12 animate-bounce delay-700 pointer-events-none">
                    <div className="bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl rounded-bl-none p-5 max-w-[180px] shadow-2xl ring-1 ring-white/10">
                      <p className="text-xs font-medium leading-relaxed">{t.hero.bluePill}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-1/3 left-4 md:left-12 animate-bounce pointer-events-none">
                    <div className="bg-red-600/20 backdrop-blur-xl border border-red-500/30 rounded-3xl rounded-br-none p-5 max-w-[180px] shadow-2xl ring-1 ring-white/10">
                      <p className="text-xs font-medium leading-relaxed">{t.hero.redPill}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Grid */}
              <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-mt-32">
                <div className="bg-[#12121e]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 hover:border-red-500/30 transition-all group">
                  <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                    <Play className="text-red-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 tracking-tight">
                    {t.sections.story.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {t.sections.story.content}
                  </p>
                </div>
                <div className="bg-[#12121e]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <Info className="text-blue-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 tracking-tight">
                     {t.sections.goals.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {t.sections.goals.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Posts Section */}
          <section id="posts" className="space-y-12 scroll-mt-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2">
                <h2 className="text-5xl font-black tracking-tighter uppercase">{t.sections.posts.title.split(' ')[0]} <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">{t.sections.posts.title.split(' ')[1]}</span></h2>
                <p className="text-gray-500 font-medium tracking-widest uppercase text-xs">{t.sections.posts.subtitle}</p>
              </div>
              <div className="h-0.5 flex-1 mx-0 md:mx-12 bg-gradient-to-r from-red-500/20 via-blue-500/20 to-transparent rounded-full mb-2" />
              <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-bold text-sm">{t.sections.posts.viewAll}</button>
            </div>
            <PostList />
          </section>

        </div>
      </main>

      <AnimatePresence>
        {isContactOpen && (
          <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="contact" className="py-16 text-center border-t border-white/5 relative z-10">
        <div className="mb-6 flex justify-center gap-6">
            <a href="https://instagram.com/jakubecz._.j" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
            <a href="https://tiktok.com/@MiniOmega_69" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">TikTok</a>
            <a href="https://youtube.com/@MiniOmega_69" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">YouTube</a>
        </div>
        <p className="text-gray-600 font-medium">© 2026 MiniOmega_69. Built with React & <span className="text-blue-500">🧊 Blocks</span>.</p>
      </footer>
    </div>
  );
}

export default App;
