import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const skillCategories = [
  {
    title: 'Core Skills',
    skills: [
      'UI/UX Design',
      'Full Stack Development',
      'Frontend Engineering',
      'Responsive Web Design',
      'API Integration',
      'Component Architecture'
    ]
  },
  {
    title: 'Frontend Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Next.js']
  },
  {
    title: 'Backend Technologies',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST APIs']
  },
  {
    title: 'Design Tools',
    skills: ['Figma', 'Canva', 'Framer']
  },
  {
    title: 'Development Tools',
    skills: ['GitHub', 'VS Code', 'Netlify', 'Vercel', 'GSAP']
  }
];

export function Skills() {
  return (
     <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-zinc-50 tracking-tight">Skills</h2>
          <p className="text-zinc-400 text-sm font-medium">Creating seamless digital experiences through design, development, and scalable web technologies.</p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {skillCategories.map((cat, i) => (
          <StaggerItem
            key={i}
            direction="up"
            duration={0.5}
            className="h-full"
          >
            <div className="flex flex-col h-full bg-[#121212] rounded-2xl p-6 border border-zinc-800/50 hover:bg-[#181818] hover:border-zinc-700/60 transition-all duration-300">
              <h3 className="text-sm font-bold text-zinc-50 mb-6 tracking-tight">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <div 
                    key={j} 
                    className="bg-zinc-800/60 text-xs text-zinc-300 font-medium px-3 py-1.5 rounded-full border border-zinc-700/30 hover:bg-zinc-800 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Closing Skill Statement */}
      <ScrollReveal direction="up" duration={0.8} delay={0.2} className="mt-16 text-center max-w-2xl mx-auto border-t border-zinc-800/50 pt-10">
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
          Crafting scalable full-stack solutions with modern frontend engineering, intuitive UI/UX systems, and performance-driven development.
        </p>
      </ScrollReveal>
     </section>
  );
}
