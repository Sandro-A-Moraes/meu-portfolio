import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import cyberWeb from '../assets/images/projects/cyber-web.png'

const projectsData = [
  {
    id: 1,
    title: 'Cyber E-commerce',
    description: 'Plataforma de e-commerce full stack focada em performance, escalabilidade e práticas reais de produção, com autenticação, gerenciamento de produtos e fluxo completo de compra e checkout.',
    fullDescription: 'Cyber Web é uma aplicação de e-commerce full stack desenvolvida para simular um ambiente real de produção, cobrindo desde a listagem de produtos até um fluxo de checkout protegido por autenticação. O frontend foi construído com React, TypeScript, Vite e TailwindCSS, garantindo uma interface moderna, responsiva e bem estruturada, com navegação feita via React Router. A autenticação de usuários foi implementada com Clerk, incluindo proteção de rotas sensíveis como o checkout. O backend foi desenvolvido com Node.js, TypeScript, Express e Prisma ORM, disponibilizando uma API REST para gerenciamento de produtos e regras de negócio. O banco de dados utiliza SQLite em desenvolvimento, com arquitetura preparada para uso de bancos relacionais como MySQL ou PostgreSQL em produção. A aplicação foi totalmente containerizada com Docker e orquestrada com Docker Compose, permitindo padronização de ambientes e facilidade de deploy. O projeto também foi preparado para execução em ambiente de nuvem na AWS, utilizando EC2, Nginx como servidor web e gerenciamento de processos. Durante o desenvolvimento, foram enfrentados desafios relacionados à autenticação, organização de rotas, integração frontend-backend, configuração de ambientes, Dockerização e deploy em cloud, que foram superados com estudo, testes práticos e aplicação de boas práticas de engenharia de software.',
    image: `${cyberWeb}`,
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript', 'Docker', 'Prisma', 'Express.js'],
    github: 'https://github.com/Sandro-A-Moraes/cyber-web-frontend',
    liveDemo: 'https://example.com'
  },
  {
    id: 2,
    title: 'Aether Dashboard',
    description: 'Sistema de gerenciamento de tarefas futurista com colaboração em tempo real, visualização de dados 3D e automação de fluxo de trabalho.',
    fullDescription: 'Aether Dashboard transforma a produtividade da equipe com uma interface visualmente impressionante e funcional. Utilizando Three.js para visualizações de dados interativas em 3D, permite que gestores analisem métricas complexas intuitivamente. A colaboração em tempo real é suportada por WebSockets e GraphQL, permitindo atualizações instantâneas. O sistema inclui automação de fluxo de trabalho personalizável e integração com ferramentas populares como Slack e Jira.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    technologies: ['TypeScript', 'Three.js', 'Node.js', 'GraphQL', 'Docker', 'Apollo Client', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    liveDemo: 'https://example.com'
  },
  {
    id: 3,
    title: 'Quantum Social',
    description: 'Rede social descentralizada focada em privacidade e controle de dados, utilizando criptografia de ponta a ponta e IPFS.',
    fullDescription: 'Quantum Social é uma plataforma revolucionária construída sobre princípios da Web3. Ela devolve o controle dos dados aos usuários através de armazenamento descentralizado via IPFS e contratos inteligentes em Solidity. A interface React oferece uma experiência familiar e fluida, enquanto o backend garante que todas as comunicações sejam criptografadas de ponta a ponta. Recursos incluem identidades soberanas, feed sem algoritmos manipulativos e monetização direta para criadores.',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7',
    technologies: ['React', 'Web3', 'Solidity', 'IPFS', 'Socket.io', 'Ethereum', 'Hardhat', 'Ethers.js'],
    github: 'https://github.com',
    liveDemo: 'https://example.com'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
              Projetos <span className="text-cyan-400">Selecionados</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Explorando as fronteiras do que é possível na web moderna. Clique nos cards para ver detalhes.
            </p>
          </div>
          
          <a href="https://github.com/Sandro-A-Moraes" target='_blank'>
            <button className="text-white hover:text-cyan-400 border-b border-transparent hover:border-cyan-400 transition-all pb-1 font-medium">
              Ver todos os projetos &rarr;
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