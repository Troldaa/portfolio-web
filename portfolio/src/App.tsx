import React from 'react';
import MinecraftCharacter from './components/MinecraftCharacter';
import PostList from './components/PostList';
import { Youtube, Twitch, Github } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-red opacity-10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-brand-blue opacity-10 blur-[120px]" />
      </div>

      {/* Navigation / Header */}
      <header className="z-20 w-full px-8 py-10 flex justify-between items-center max-w-7xl">
        <div className="minecraft-font text-brand-blue text-xl md:text-3xl border-b-4 border-brand-red pb-1 tracking-tighter">
          MINIOMEGA<span className="text-brand-red">_69</span>
        </div>
        <div className="flex gap-6 md:gap-10">
          <a href="#" className="text-white hover:text-brand-red transition-all transform hover:scale-125"><Youtube size={28} /></a>
          <a href="#" className="text-white hover:text-brand-blue transition-all transform hover:scale-125"><Twitch size={28} /></a>
          <a href="#" className="text-white hover:text-neutral-400 transition-all transform hover:scale-125"><Github size={28} /></a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="z-10 flex flex-col items-center w-full">
        <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center py-20">
          {/* Animated Text Bubbles */}
          <div className="absolute top-[10%] left-[5%] md:left-[15%] lg:left-[20%] animate-bounce delay-150 z-20">
            <div className="text-bubble minecraft-font text-[10px] md:text-xs border-2 border-brand-red p-3 max-w-[150px] md:max-w-none">
              Minecraft is life! ⚔️
            </div>
          </div>
          <div className="absolute bottom-[25%] right-[5%] md:right-[15%] lg:right-[20%] animate-bounce z-20">
            <div className="text-bubble minecraft-font text-[10px] md:text-xs border-2 border-brand-blue p-3 max-w-[150px] md:max-w-none">
              Welcome to my world! 💎
            </div>
          </div>

          <div className="relative group mb-10 mt-10">
            <div className="absolute -inset-8 bg-gradient-to-r from-brand-red to-brand-blue blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000" />
            <MinecraftCharacter skinUrl="https://mc-heads.net/skin/MiniOmega_69" />
          </div>

          <div className="mt-8 text-center px-6 max-w-4xl">
            <h1 className="minecraft-font text-3xl md:text-5xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-white to-brand-red drop-shadow-2xl">
              BUILDER & CREATOR
            </h1>
            <p className="text-neutral-300 text-base md:text-xl font-medium tracking-wide">
              Bringing Minecraft worlds to life with code and creativity.
              Explore my latest projects and videos below.
            </p>
          </div>
        </section>

        {/* Posts Section */}
        <section id="posts" className="w-full bg-black/40 backdrop-blur-sm flex justify-center py-20 border-y-8 border-brand-blue">
          <PostList />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 flex flex-col items-center bg-black border-t border-white/5">
        <div className="minecraft-font text-[10px] text-neutral-500 mb-6 tracking-widest">
          © 2026 MINIOMEGA_69 • CRAFTED WITH PASSION
        </div>
        <div className="flex gap-6">
          <div className="w-4 h-4 bg-brand-red shadow-[0_0_10px_rgba(255,0,51,0.5)]" />
          <div className="w-4 h-4 bg-brand-blue shadow-[0_0_10px_rgba(0,102,255,0.5)]" />
        </div>
      </footer>
    </div>
  );
};

export default App;
