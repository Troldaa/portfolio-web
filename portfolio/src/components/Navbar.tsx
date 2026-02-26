import { Home, User, Play, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', icon: <Home size={20} />, href: '#' },
    { name: 'About', icon: <User size={20} />, href: '#about' },
    { name: 'Posts', icon: <Play size={20} />, href: '#posts' },
    { name: 'Contact', icon: <MessageSquare size={20} />, href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <div className="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex items-center gap-8 shadow-2xl">
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
      </div>
    </nav>
  );
};

export default Navbar;
