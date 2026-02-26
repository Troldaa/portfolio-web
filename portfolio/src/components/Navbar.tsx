import { Home, User, Play, MessageSquare, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.home, icon: <Home size={20} />, href: '#' },
    { name: t.nav.about, icon: <User size={20} />, href: '#about' },
    { name: t.nav.posts, icon: <Play size={20} />, href: '#posts' },
    { name: t.nav.contact, icon: <MessageSquare size={20} />, href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex items-center gap-6 shadow-2xl">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
          >
            <span className="group-hover:text-blue-400 transition-colors">
              {item.icon}
            </span>
            <span className="text-sm font-medium hidden sm:block">{item.name}</span>
          </a>
        ))}

        <div className="w-[1px] h-6 bg-white/10 mx-2" />

        <button
          onClick={() => setLanguage(language === 'en' ? 'cz' : 'en')}
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-500 hover:text-blue-400 transition-colors"
        >
          <Languages size={18} />
          <span>{language}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
