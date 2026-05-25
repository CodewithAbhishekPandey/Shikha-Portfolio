import { Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-lg text-zinc-400 mb-2">I am Shikha Shalini</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 mb-6 leading-[1.1]">
            Full Stack Developer <br className="hidden md:block" /> & UI/UX Designer
          </h1>
          <p className="text-zinc-400 max-w-md mb-8 leading-relaxed">
            Building modern, scalable, and user-focused digital experiences through clean development and thoughtful design systems.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href="/shikha.pdf" 
              download="shikha.pdf"
              className="bg-zinc-800 text-white flex items-center justify-center hover:bg-zinc-700 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors border border-zinc-700/50 whitespace-nowrap"
            >
              Download CV
            </a>
            <a 
              href="mailto:shikhasalini0309@gmail.com"
              className="bg-zinc-50 text-black flex items-center justify-center hover:bg-zinc-200 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors border border-white whitespace-nowrap"
            >
              Connect
            </a>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/shikha-shalini-000907253/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} className="fill-current" />
              </a>
              <a 
                href="https://github.com/ShikhaShalini" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={22} className="fill-current" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="relative aspect-square md:aspect-auto md:h-[500px] flex justify-end items-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Using a monochrome placeholder portrait */}
          <div className="w-full h-full max-w-[400px] ml-auto relative overflow-hidden flex items-end justify-center">
             <img 
               src="/11.jpg" 
               alt="Shikha Shalini Portrait" 
               className="w-full h-full object-cover object-top grayscale contrast-125 brightness-75 rounded-3xl [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1000&auto=format&fit=crop";
               }}
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
