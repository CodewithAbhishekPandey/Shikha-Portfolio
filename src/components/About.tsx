import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export function About() {
  const approaches = [
    { num: '01', title: 'Understand user needs & business goals' },
    { num: '02', title: 'Design clean and intuitive interfaces' },
    { num: '03', title: 'Build scalable responsive applications' },
    { num: '04', title: 'Optimize performance & user experience' },
  ];

  const metrics = [
    { value: '06+', label: 'Months Of Experience' },
    { value: '25+', label: 'Projects Completed' },
    { value: '05+', label: 'Clients Served' },
    { value: '15+', label: 'Technologies Mastered' },
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-zinc-50 tracking-tight">About Me</h2>
          <p className="text-zinc-400 max-w-4xl mx-auto text-sm leading-relaxed">
            I'm a passionate Full Stack Developer and UI/UX Designer focused on building modern digital products that combine clean aesthetics with scalable functionality. I enjoy transforming ideas into intuitive user experiences through thoughtful design, efficient frontend systems, and reliable backend architecture.
          </p>
        </div>
      </ScrollReveal>

      <div className="mb-20">
        <ScrollReveal direction="up" duration={0.6} delay={0.1}>
          <h3 className="text-center text-lg font-semibold text-zinc-50 mb-8 tracking-tight">My Approach</h3>
        </ScrollReveal>
        <StaggerContainer className="flex flex-wrap md:flex-row items-center gap-4 justify-center">
          {approaches.map((step, i) => (
             <StaggerItem 
               key={i}
               direction="none"
               duration={0.5}
               className="w-full md:w-auto"
             >
               <div className="flex items-center bg-[#121212] border border-zinc-800/50 rounded-xl p-3 pr-6 gap-4 hover:border-zinc-700/60 transition-colors duration-300">
                 <div className="bg-white text-black font-bold text-sm w-8 h-8 rounded-md flex items-center justify-center shrink-0">
                   {step.num}
                 </div>
                 <span className="text-sm font-medium text-zinc-300">{step.title}</span>
               </div>
             </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center pt-10 border-t border-zinc-800/50 max-w-4xl mx-auto">
        {metrics.map((metric, i) => (
           <StaggerItem 
             key={i}
             direction="up"
             duration={0.6}
           >
             <div>
               <div className="text-4xl font-bold text-zinc-50 mb-2">{metric.value}</div>
               <div className="text-xs text-zinc-400 font-medium">{metric.label}</div>
             </div>
           </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
