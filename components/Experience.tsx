import React from 'react';
import { EXPERIENCES } from '../constants';
import useIntersectionObserver from '../utils/useIntersectionObserver';

const ExperienceItem: React.FC<{ exp: typeof EXPERIENCES[0]; index: number }> = ({ exp, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div 
      ref={ref} 
      className={`relative pl-8 md:pl-0 group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Desktop Timeline Layout */}
      <div className="hidden md:flex items-center justify-between w-full mb-12">
        <div className="w-5/12 text-right pr-8">
           {index % 2 === 0 ? (
             <Content exp={exp} align="right" />
           ) : (
             <div className="text-slate-500 font-mono text-sm">{exp.period}</div>
           )}
        </div>
        
        <div className="w-2/12 flex justify-center relative">
           <div className="w-0.5 h-full bg-slate-800 absolute top-0 bottom-0 -z-10 group-last:h-1/2"></div>
           <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform">
              <span className="text-xs font-bold text-white">{exp.logoInitials}</span>
           </div>
        </div>

        <div className="w-5/12 pl-8 text-left">
          {index % 2 !== 0 ? (
             <Content exp={exp} align="left" />
           ) : (
             <div className="text-slate-500 font-mono text-sm">{exp.period}</div>
           )}
        </div>
      </div>

      {/* Mobile Timeline Layout */}
      <div className="md:hidden border-l-2 border-slate-800 ml-3 pb-12 pl-8 relative">
        <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-500 z-10"></div>
        <div className="text-sm text-cyan-400 font-mono mb-2">{exp.period}</div>
        <Content exp={exp} align="left" />
      </div>
    </div>
  );
};

const Content: React.FC<{ exp: typeof EXPERIENCES[0]; align: 'left' | 'right' }> = ({ exp, align }) => (
  <div className={`bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors ${align === 'right' ? 'items-end' : 'items-start'}`}>
    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
    <h4 className="text-cyan-400 text-sm font-semibold mb-4">{exp.company}</h4>
    <ul className={`space-y-2 mb-4 text-slate-400 text-sm leading-relaxed ${align === 'right' ? 'text-right' : 'text-left'}`}>
      {exp.description.slice(0, 3).map((desc, i) => (
        <li key={i}>{desc}</li>
      ))}
    </ul>
    <div className={`flex flex-wrap gap-2 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
      {exp.skills.slice(0, 3).map(skill => (
        <span key={skill} className="px-2 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From Physics to Fintech. A timeline of leadership, engineering excellence, and innovation.
          </p>
        </div>

        <div className="relative">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;