import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Extraordinary</h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              I'm currently open to Senior Backend Engineering, AI Architecture, or Technical Leadership roles. If you need someone to bridge the gap between complex physics-level logic and user-centric product design, let's talk.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors p-4 rounded-lg hover:bg-slate-900">
                <Mail className="text-cyan-500" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <div className="flex items-center gap-4 text-slate-300 p-4">
                <Phone className="text-cyan-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300 p-4">
                <MapPin className="text-cyan-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
             <h3 className="text-xl font-bold text-white mb-6">Quick Connect</h3>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label className="text-xs text-slate-500 uppercase font-bold">Name</label>
                   <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs text-slate-500 uppercase font-bold">Email</label>
                   <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@company.com" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-xs text-slate-500 uppercase font-bold">Message</label>
                 <textarea className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white h-32 focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="How can I help you?"></textarea>
               </div>
               <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                 Send Message
               </button>
             </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Stephen Adegbola. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={PERSONAL_INFO.linkedin} className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href={PERSONAL_INFO.github} className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;