import React from 'react';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over 8+ years of solving complex engineering challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, idx) => {
            // Dynamic Icon resolution
            const IconComponent = (Icons as any)[category.icon] || Icons.Code;

            return (
              <div 
                key={category.name}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:bg-slate-800/60 transition-all group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-cyan-600 transition-all duration-300">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-md bg-slate-950 text-slate-400 border border-slate-800 group-hover:border-slate-600 transition-colors cursor-default hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;