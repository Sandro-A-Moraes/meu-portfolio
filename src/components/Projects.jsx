import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import cyberWeb from '../assets/images/projects/cyber-web.png'
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { translations } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = translations.projects.data.map(project => ({
    ...project,
    image: project.image === 'cyberWeb' ? `${cyberWeb}` : project.image
  }));

  return (
    <section id="projects" className="py-32 relative bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900/30 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              {translations.projects.titulo}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              {translations.projects.subtitulo}
            </p>
          </div>
          
          <a href="https://github.com/Sandro-A-Moraes" target='_blank'>
            <button className="text-white hover:text-cyan-400 border-b border-transparent hover:border-cyan-400 transition-all pb-1 font-medium">
              {translations.projects.verMais} &rarr;
            </button>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            isOpen={!!selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;