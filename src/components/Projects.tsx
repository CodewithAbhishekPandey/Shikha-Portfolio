import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { ArrowUpRight, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'BeautyIsLive',
    tagline: 'E-Commerce Beauty & Skincare Platform',
    desc: 'A premium, highly responsive e-commerce application crafted with an immersive shopping experience. Includes catalog search, filter micro-states, dynamic cart interactions, and high-fidelity product imagery representation.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel API'],
    liveUrl: 'https://beautiproducts.vercel.app/',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Aura Minimalist Architecture',
    tagline: 'High-End Design & Architectural Portfolio',
    desc: 'A modern, ultra-minimalist spatial design portfolio showcasing luxury architecture. Features fluid scroll-driven animations, high-contrast typography grids, and flawless image-mask layout transitions.',
    tags: ['HTML5', 'CSS3/SCSS', 'JavaScript', 'GSAP', 'CSS Grid', 'GitHub Pages'],
    liveUrl: 'https://shikhashalini.github.io/arch-file/',
    githubUrl: 'https://github.com/shikhashalini/arch-file',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Sweet Delight Patisserie',
    tagline: 'Boutique Dessert & Confectionery Experience',
    desc: 'An elegant local restaurant and sweet shop platform designed with cozy, warm minimalism. Integrated digital product catalogs, dynamic pre-order inquiries, and custom visual storytelling panels.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Sanity CMS', 'EmailJS'],
    liveUrl: '#',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Nova Full-Stack SaaS Engine',
    tagline: 'High-Performance API Telemetry Dashboard',
    desc: 'An advanced visual panel designed for managing high-scale application clusters. Tracks system metrics in real-time, models API latency with charts, and authenticates through secure backend channels.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Recharts', 'REST APIs'],
    liveUrl: '#',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-zinc-50 tracking-tight">Projects</h2>
          <p className="text-zinc-400 text-sm font-medium">Demonstrating modern engineering and cohesive interaction design</p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project, i) => (
          <StaggerItem
            key={i}
            direction="up"
            className="h-full"
          >
            <div className="group flex flex-col justify-between h-full bg-[#121212] rounded-2xl p-8 border border-zinc-800/50 hover:border-zinc-750 hover:bg-[#151515] transition-all duration-300 relative overflow-hidden">
              {/* Background Theme Image Overlay with elegant double fade */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.55] group-hover:opacity-[0.70] transition-opacity duration-500">
                <img 
                  src={project.image} 
                  alt="" 
                  className="w-full h-full object-cover grayscale contrast-125 brightness-[0.35] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
              </div>

              {/* Ambient hover glow/gradient effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-bl-full pointer-events-none group-hover:bg-white/[0.02] transition-colors duration-300 z-10" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <Folder size={18} />
                  </div>
                  <div className="flex items-center gap-3">
                    <a 
                      href={project.githubUrl} 
                      className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      aria-label={`Visit live site for ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-50 mb-1 tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-500 font-medium mb-4 uppercase tracking-wider">
                  {project.tagline}
                </p>
                <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/30 relative z-10">
                {project.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className="bg-zinc-800/40 text-[10px] sm:text-xs text-zinc-300 font-medium px-2.5 py-1 rounded-full border border-zinc-700/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
