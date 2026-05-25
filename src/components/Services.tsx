import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const services = [
  {
    title: 'UI/UX Website Design',
    desc: 'Creating intuitive, modern, and visually balanced interfaces focused on usability, accessibility, and seamless user journeys.',
    pills: ['User-Centered Layouts', 'Responsive Design Systems']
  },
  {
    title: 'Frontend Development',
    desc: 'Building responsive, interactive, and high-performance interfaces using modern frontend technologies and clean architecture.',
    pills: ['React & JavaScript', 'Smooth UI Interactions']
  },
  {
    title: 'Full Stack Development',
    desc: 'Developing scalable web applications with secure backend systems, optimized APIs, and efficient database architecture.',
    pills: ['API Integration', 'Scalable Architecture']
  },
  {
    title: 'Performance Optimization',
    desc: 'Optimizing websites for speed, responsiveness, accessibility, and smooth performance across all devices.',
    pills: ['Speed Optimization', 'Mobile Performance']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 max-w-6xl mx-auto">
      <ScrollReveal direction="up" duration={0.8}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-zinc-50 tracking-tight">Services</h2>
          <p className="text-zinc-400 text-sm font-medium">Designing scalable digital experiences with modern development and intuitive user interfaces.</p>
        </div>
      </ScrollReveal>
      
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {services.map((svc, i) => (
          <StaggerItem 
            key={i}
            direction="up"
            className="h-full"
          >
            <div className="flex flex-col h-full bg-[#121212] rounded-2xl p-6 border border-zinc-800/50 hover:bg-[#181818] hover:border-zinc-700/60 transition-all duration-300" id={`service-card-${i}`}>
              <h3 className="text-lg font-bold text-zinc-50 mb-4 tracking-tight">{svc.title}</h3>
              <p className="text-sm text-zinc-400 mb-8 leading-relaxed flex-grow">
                {svc.desc}
              </p>
              <div className="flex flex-col gap-2 mt-auto">
                {svc.pills.map((pill, j) => (
                  <div key={j} className="w-full bg-zinc-800/30 text-zinc-400 text-xs px-4 py-2.5 rounded-full border border-zinc-800/50 text-left font-medium">
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
