import React from 'react';
import { motion } from 'framer-motion';
import { Award, Check, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Certificações
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AWS Certification Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-slate-950 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/50">
                <Award className="text-cyan-400" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-cyan-400 transition-colors">
                AWS Cloud Practitioner
              </h3>
              <p className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-wider">
                Amazon Web Services
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Cloud Computing Concepts', 'Security & Compliance', 'Technology & Billing'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="bg-cyan-500/10 p-1 rounded-full">
                      <Check size={12} className="text-cyan-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Verificado
                </span>
                <a href="https://drive.google.com/file/d/1K65P7bMYHH1vPqtNo14dgZDEhRJTrTj_/view?usp=sharing" target='_blank'>
                  <ExternalLink size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* FullStack Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-slate-950 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/50">
                <Award className="text-cyan-400" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-cyan-400 transition-colors">
                FullStack Developer By COMPASS UOL
              </h3>
              <p className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-wider">
                COMPASS UOL
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Frontend Mastery', 'Backend Mastery', 'Team Management'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="bg-cyan-500/10 p-1 rounded-full">
                      <Check size={12} className="text-cyan-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Verificado
                </span>
                <a href="https://drive.google.com/file/d/1I4u78VPfaup_JFlOn2ZnABbevWmH-paM/view?usp=sharing" target='_blank'>
                  <ExternalLink size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Placeholder Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-slate-900/20 border border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[350px] hover:border-white/20 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="text-slate-600" size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-500 text-center font-display">
              Próxima Meta
            </h3>
            <p className="text-slate-600 text-center text-sm mt-2">
              Em breve novas conquistas
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;