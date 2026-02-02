import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { translations } = useLanguage();
  return (
    <section id="about" className="py-32 relative overflow-hidden ">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              {translations.about.titulo1} <span className="text-cyan-400">{translations.about.titulo2}</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-8" />
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                {translations.about.descricao1}
              </p>
              <p>
                {translations.about.descricao2}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { label: translations.about.frontend, value: translations.about.pixelPerfect },
                { label: translations.about.backend, value: translations.about.scalable },
                { label: translations.about.cloud, value: translations.about.secure },
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-white/10 pl-6">
                  <div className="text-2xl font-bold text-white font-display">{stat.label}</div>
                  <div className="text-sm text-cyan-400 font-medium mt-1">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl blur-2xl transform rotate-6" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-8">
              {[
                { icon: Code2, title: translations.about.frontendMastery, desc: translations.about.frontendDesc, color: 'text-cyan-400' },
                { icon: Server, title: translations.about.backendRobustness, desc: translations.about.backendDesc, color: 'text-violet-400' },
                { icon: Globe, title: translations.about.devopsCloud, desc: translations.about.devopsDesc, color: 'text-emerald-400' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className={`p-3 rounded-lg bg-slate-950 border border-white/10 ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
                    <p className="text-slate-400 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;