import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Github, Code, Calendar, Layers } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 mt-16 md:mt-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
      />
      
      <motion.div
        layoutId={`project-${project.id}`}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl shadow-cyan-900/20 z-10 flex flex-col"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button - Sticky position to ensure visibility */}
        <div className="sticky top-4 right-4 z-20 flex justify-end px-4 w-full pointer-events-none">
          <button 
            onClick={onClose} 
            className="p-2 bg-black/60 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md border border-white/20 shadow-lg pointer-events-auto"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Section - Negative margin to pull up under sticky header area */}
        <div className="relative h-64 sm:h-80 w-full flex-shrink-0 -mt-14">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-500/30 rounded-full uppercase tracking-wider">
                Project Details
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
              {project.title}
            </h2>
            
            <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-cyan-400" />
                <span>2024 Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers size={16} className="text-violet-400" />
                <span>Fullstack Architecture</span>
              </div>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Code size={20} className="text-cyan-400" />
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-cyan-100 shadow-sm hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4">
            <a 
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-400 transition-colors duration-300"
            >
              <Github size={20} />
              Ver Código no GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;