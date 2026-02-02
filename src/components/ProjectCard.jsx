import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectCard = ({ project, index, onClick }) => {
  const { translations } = useLanguage();
  const handleGithubClick = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/20 cursor-pointer"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-slate-900/0 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
        
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-110"
        />
        
        {/* Floating Badges */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {project.technologies.slice(0, 2).map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-bold bg-black/50 backdrop-blur-md border border-white/10 rounded text-white">
              {tech}
            </span>
          ))}
          {project.technologies.length > 2 && (
            <span className="px-2 py-1 text-xs font-bold bg-black/50 backdrop-blur-md border border-white/10 rounded text-white">
              +{project.technologies.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-8 z-20 -mt-12">
        <div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-xl transform transition-transform duration-300 group-hover:-translate-y-2">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white font-display group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-cyan-500/10 transition-colors">
              <Code size={18} className="text-cyan-400" />
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-slate-500"
              >
                #{tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4 border-t border-white/5">
            <a 
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleGithubClick}
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors z-30"
            >
              <Github size={18} />
              {translations.projects.github}
            </a>
            <span className="flex items-center gap-2 text-sm font-medium text-slate-500 ml-auto group-hover:text-cyan-400 transition-colors">
              {translations.projects.verDetalhes} &rarr;
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;