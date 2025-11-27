import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code, Star } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            Selected works demonstrating proficiency in microservices, AI integration, and secure system architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-xl glass-panel border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              {/* Abstract Top Banner */}
              <div className="h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400 block uppercase tracking-wider">{project.category}</span>
                      {index === 0 && (
                        <span className="flex items-center gap-1 text-[10px] bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded-full border border-yellow-500/20 font-bold uppercase tracking-widest">
                          <Star size={10} fill="currentColor" /> Featured
                        </span>
                      )}
                    </div>
                    <h3 className={`font-bold text-white group-hover:text-cyan-300 transition-colors ${index === 0 ? 'text-3xl' : 'text-2xl'}`}>{project.title}</h3>
                    <p className="text-sm text-slate-500 font-semibold mt-1">{project.role}</p>
                  </div>
                  <div className="p-2 bg-slate-800 rounded-lg text-slate-300 group-hover:text-white transition-colors">
                    <Code size={20} />
                  </div>
                </div>

                <p className={`text-slate-400 mb-6 leading-relaxed ${index === 0 ? 'text-lg max-w-4xl' : ''}`}>
                  {project.description}
                </p>

                <div className={`space-y-4 ${index === 0 ? 'md:flex md:space-y-0 md:gap-12 md:items-start' : ''}`}>
                   {/* Tech Stack */}
                   <div className={`${index === 0 ? 'md:w-1/2' : ''}`}>
                     <h4 className="text-xs uppercase text-slate-500 font-bold mb-3">Technologies</h4>
                     <div className="flex flex-wrap gap-2">
                       {project.techStack.map(tech => (
                         <span key={tech} className="px-2 py-1 text-xs font-medium rounded bg-slate-800 text-blue-200 border border-slate-700/50">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>

                   {/* Impact Stats */}
                   <div className={`pt-4 border-t border-slate-800 ${index === 0 ? 'md:pt-0 md:border-t-0 md:border-l md:pl-12 md:w-1/2' : ''}`}>
                     <h4 className="text-xs uppercase text-slate-500 font-bold mb-2">Key Impact</h4>
                     <ul className="space-y-1">
                       {project.impact.map((item, i) => (
                         <li key={i} className="flex items-center text-sm text-slate-300">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 shrink-0"></span>
                           {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;