import { motion } from 'motion/react';

export function Navbar() {
  const links = ['Home', 'Services', 'Projects', 'About', 'Skills'];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 pt-6 px-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-white tracking-widest border border-zinc-700/50">
          ss
        </div>

        {/* Nav Capsule */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 backdrop-blur-md rounded-full px-6 py-2 border border-zinc-800">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                link === 'About' 
                  ? 'text-white bg-zinc-800/50' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/30'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Spacer for centering */}
        <div className="w-10 hidden md:block z-0 opacity-0 pointer-events-none"></div>
      </div>
    </motion.header>
  );
}
