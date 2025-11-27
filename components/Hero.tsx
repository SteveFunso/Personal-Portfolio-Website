import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 pb-20 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse mr-2"></span>
            Available for Senior Roles
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
            Architecting <br />
            <span className="gradient-text">Intelligent</span> <br />
            Solutions.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
            I am <strong className="text-slate-200">{PERSONAL_INFO.name}</strong>, a {PERSONAL_INFO.title}.
            {PERSONAL_INFO.tagline} I build secure fintech infrastructures and RAG-powered AI systems that scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-600/20 transition-all hover:translate-y-[-2px]"
            >
              View Work <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass-panel text-slate-200 hover:bg-slate-800/50 font-semibold transition-all hover:translate-y-[-2px]"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 pt-6 text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Visual Element / Abstract Code Representation */}
        <div className="hidden lg:block relative h-[600px] w-full">
           <div className="absolute inset-0 glass-panel rounded-2xl border border-slate-700 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
              <div className="bg-slate-900/80 h-8 flex items-center px-4 gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6 font-mono text-sm overflow-hidden">
                <div className="text-slate-500 mb-2">// Initializing AI Neural Network...</div>
                <div className="text-purple-400">const <span className="text-yellow-300">Architect</span> = <span className="text-blue-400">new</span> AI_Solutions();</div>
                <br />
                <div className="text-purple-400">class <span className="text-yellow-300">CashToken_System</span> <span className="text-purple-400">extends</span> <span className="text-yellow-300">Fintech</span> {"{"}</div>
                <div className="pl-4 text-blue-400">constructor<span className="text-slate-300">()</span> {"{"}</div>
                <div className="pl-8 text-slate-300">this.uptime = <span className="text-green-400">"99.99%"</span>;</div>
                <div className="pl-8 text-slate-300">this.security = <span className="text-green-400">"Entrust_MFA"</span>;</div>
                <div className="pl-8 text-slate-300">this.ai_module = <span className="text-blue-400">new</span> RAG_Assistant();</div>
                <div className="pl-4 text-slate-300">{"}"}</div>
                <br />
                <div className="pl-4 text-purple-400">async <span className="text-blue-400">optimize_efficiency</span><span className="text-slate-300">()</span> {"{"}</div>
                <div className="pl-8 text-slate-500">// Analyzing 10TB+ Proprietary Data</div>
                <div className="pl-8 text-purple-400">await <span className="text-yellow-300">n8n_workflow</span>.execute();</div>
                <div className="pl-8 text-purple-400">return <span className="text-green-400">"40% Increase"</span>;</div>
                <div className="pl-4 text-slate-300">{"}"}</div>
                <div className="text-slate-300">{"}"}</div>
                
                <div className="mt-8 border-t border-slate-800 pt-4">
                  <div className="flex justify-between text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    <span>Status</span>
                    <span className="text-green-400 animate-pulse">Online</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-3/4 animate-[pulse_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;