import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Cpu, Database, Layout, PenTool } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Layout,
    color: 'from-cyan-400 to-blue-500',
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'Bootstrap', 'Figma', 'HTML5/CSS3']
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Database,
    color: 'from-violet-400 to-purple-500',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Prisma ORM', 'MYSQL', 'Mongoose', 'SQLite']
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    icon: Cpu,
    color: 'from-emerald-400 to-green-500',
    skills: ['Docker', 'AWS', 'Git/GitHub', 'CI/CD Pipelines', 'Linux']
  },
  {
    id: 'metodologias',
    title: 'Metodologias',
    icon: PenTool,
    color: 'from-orange-400 to-amber-500',
    skills: ['Scrum', 'Kanban', 'Agile', 'Trello', 'Git Flow0', 'TDD']
  }
];

const SkillCategory = ({ category, index }) => {
  const [isOpen, setIsOpen] = useState(true);
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl blur-xl"
           style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
      />
      
      <div className={`relative bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
              <Icon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">{category.title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-slate-400"
          >
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-white/5 border border-white/5 hover:border-white/20 text-slate-300 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-slate-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Competências <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Técnicas</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Um conjunto abrangente de tecnologias e ferramentas modernas para construir o futuro da web.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;