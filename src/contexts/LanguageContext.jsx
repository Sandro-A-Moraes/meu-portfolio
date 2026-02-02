 import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const translations = {
    pt: {
      nav: {
        inicio: 'Início',
        sobre: 'Sobre',
        competencias: 'Competências',
        certificacoes: 'Certificações',
        projetos: 'Projetos',
        contato: 'Contato'
      },
      hero: {
        disponivel: 'Disponível para Projetos',
        titulo: 'Sandro Moraes',
        subtitulo: 'Desenvolvedor FullStack & Criador Digital',
        descricao: 'Transformando ideias complexas em experiências digitais elegantes, escaláveis e de alto desempenho.',
        verProjetos: 'Ver Projetos',
        entrarContato: 'Entrar em Contato',
        scroll: 'Scroll'
      },
      about: {
        titulo1: 'Sobre',
        titulo2: 'Mim',
        descricao1: 'Sou um desenvolvedor FullStack apaixonado por criar arquiteturas robustas e interfaces imersivas. Minha abordagem combina precisão técnica com design intuitivo, garantindo que cada linha de código contribua para uma experiência de usuário excepcional.',
        descricao2: 'Com forte base em ecossistemas JavaScript modernos, transito fluidamente entre a lógica complexa do backend e a interatividade refinada do frontend. Meu objetivo é sempre entregar software que não apenas funcione, mas que inspire.',
        frontend: 'Frontend',
        backend: 'Backend',
        cloud: 'Cloud',
        pixelPerfect: 'Pixel Perfect',
        scalable: 'Scalable',
        secure: 'Secure',
        frontendMastery: 'Domínio Frontend',
        backendRobustness: 'Robustez Backend',
        devopsCloud: 'DevOps & Cloud',
        frontendDesc: 'React, Tailwind, UX/UI Design',
        backendDesc: 'Node.js, Express, Databases',
        devopsDesc: 'AWS, Docker, CI/CD, SCRUM'
      },
      skills: {
        titulo1: 'Competências',
        titulo2: 'Técnicas',
        subtitulo: 'Um conjunto abrangente de tecnologias e ferramentas modernas para construir o futuro da web.',
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps & Tools',
        metodologias: 'Metodologias'
      },
      certifications: {
        titulo: 'Certificações',
        verCertificado: 'Ver Certificado',
        verificado: 'Verificado',
        proximaMeta: 'Próxima Meta',
        emBreve: 'Em breve novas conquistas'
      },
      projects: {
        titulo: 'Projetos',
        subtitulo: 'Explorando as fronteiras do que é possível na web moderna. Clique nos cards para ver detalhes.',
        verMais: 'Ver Mais',
        verProjeto: 'Ver Projeto',
        tecnologias: 'Tecnologias',
        github: 'GitHub',
        verDetalhes: 'Ver Detalhes',
        projectDetails: 'Project Details',
        development: '2024 Development',
        architecture: 'Fullstack Architecture',
        tecnologiasModal: 'Tecnologias',
        verCodigo: 'Ver Código no GitHub',
        data: [
          {
            id: 1,
            title: 'Cyber E-commerce',
            description: 'Plataforma de e-commerce full stack focada em performance, escalabilidade e práticas reais de produção, com autenticação, gerenciamento de produtos e fluxo completo de compra e checkout.',
            fullDescription: 'Cyber Web é uma aplicação de e-commerce full stack desenvolvida para simular um ambiente real de produção, cobrindo desde a listagem de produtos até um fluxo de checkout protegido por autenticação. O frontend foi construído com React, TypeScript, Vite e TailwindCSS, garantindo uma interface moderna, responsiva e bem estruturada, com navegação feita via React Router. A autenticação de usuários foi implementada com Clerk, incluindo proteção de rotas sensíveis como o checkout. O backend foi desenvolvido com Node.js, TypeScript, Express e Prisma ORM, disponibilizando uma API REST para gerenciamento de produtos e regras de negócio. O banco de dados utiliza SQLite em desenvolvimento, com arquitetura preparada para uso de bancos relacionais como MySQL ou PostgreSQL em produção. A aplicação foi totalmente containerizada com Docker e orquestrada com Docker Compose, permitindo padronização de ambientes e facilidade de deploy. O projeto também foi preparado para execução em ambiente de nuvem na AWS, utilizando EC2, Nginx como servidor web e gerenciamento de processos. Durante o desenvolvimento, foram enfrentados desafios relacionados à autenticação, organização de rotas, integração frontend-backend, configuração de ambientes, Dockerização e deploy em cloud, que foram superados com estudo, testes práticos e aplicação de boas práticas de engenharia de software.',
            image: 'cyberWeb',
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
        ]
      },
      footer: {
        titulo: 'Vamos construir algo incrível?',
        descricao: 'Estou sempre aberto a novos desafios e colaborações. Se você tem uma ideia inovadora, entre em contato e vamos transformá-la em realidade.',
        iniciarConversa: 'Iniciar Conversa',
        navegacao: 'Navegação',
        social: 'Social',
        direitos: 'Todos os direitos reservados.',
        desenvolvido: 'Desenvolvido com'
      }
    },
    en: {
      nav: {
        inicio: 'Home',
        sobre: 'About',
        competencias: 'Skills',
        certificacoes: 'Certifications',
        projetos: 'Projects',
        contato: 'Contact'
      },
      hero: {
        disponivel: 'Available for Projects',
        titulo: 'Sandro Moraes',
        subtitulo: 'FullStack Developer & Digital Creator',
        descricao: 'Transforming complex ideas into elegant, scalable, and high-performance digital experiences.',
        verProjetos: 'View Projects',
        entrarContato: 'Get in Touch',
        scroll: 'Scroll'
      },
      about: {
        titulo1: 'About',
        titulo2: 'Me',
        descricao1: 'I am a passionate FullStack developer focused on creating robust architectures and immersive interfaces. My approach combines technical precision with intuitive design, ensuring that every line of code contributes to an exceptional user experience.',
        descricao2: 'With a strong foundation in modern JavaScript ecosystems, I seamlessly navigate between complex backend logic and refined frontend interactivity. My goal is always to deliver software that not only works, but inspires.',
        frontend: 'Frontend',
        backend: 'Backend',
        cloud: 'Cloud',
        pixelPerfect: 'Pixel Perfect',
        scalable: 'Scalable',
        secure: 'Secure',
        frontendMastery: 'Frontend Mastery',
        backendRobustness: 'Backend Robustness',
        devopsCloud: 'DevOps & Cloud',
        frontendDesc: 'React, Tailwind, UX/UI Design',
        backendDesc: 'Node.js, Express, Databases',
        devopsDesc: 'AWS, Docker, CI/CD, SCRUM'
      },
      skills: {
        titulo1: 'Technical',
        titulo2: 'Skills',
        subtitulo: 'A comprehensive set of modern technologies and tools to build the future of the web.',
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'DevOps & Tools',
        metodologias: 'Methodologies'
      },
      certifications: {
        titulo: 'Certifications',
        verCertificado: 'View Certificate',
        verificado: 'Verified',
        proximaMeta: 'Next Goal',
        emBreve: 'New achievements soon'
      },
      projects: {
        titulo: 'Projects',
        subtitulo: 'Exploring the frontiers of what is possible in modern web. Click on the cards to see details.',
        verMais: 'See More',
        verProjeto: 'View Project',
        tecnologias: 'Technologies',
        github: 'GitHub',
        verDetalhes: 'View Details',
        projectDetails: 'Project Details',
        development: '2024 Development',
        architecture: 'Fullstack Architecture',
        tecnologiasModal: 'Technologies',
        verCodigo: 'View Code on GitHub',
        data: [
          {
            id: 1,
            title: 'Cyber E-commerce',
            description: 'Full stack e-commerce platform focused on performance, scalability and real production practices, with authentication, product management and complete purchase and checkout flow.',
            fullDescription: 'Cyber Web is a full stack e-commerce application developed to simulate a real production environment, covering from product listing to an authentication-protected checkout flow. The frontend was built with React, TypeScript, Vite and TailwindCSS, ensuring a modern, responsive and well-structured interface, with navigation done via React Router. User authentication was implemented with Clerk, including protection of sensitive routes like checkout. The backend was developed with Node.js, TypeScript, Express and Prisma ORM, providing a REST API for product management and business rules. The database uses SQLite in development, with architecture prepared for relational databases like MySQL or PostgreSQL in production. The application was fully containerized with Docker and orchestrated with Docker Compose, allowing environment standardization and easy deployment. The project was also prepared for execution in AWS cloud environment, using EC2, Nginx as web server and process management. During development, challenges related to authentication, route organization, frontend-backend integration, environment configuration, Dockerization and cloud deployment were faced, which were overcome with study, practical tests and application of software engineering best practices.',
            image: 'cyberWeb',
            technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript', 'Docker', 'Prisma', 'Express.js'],
            github: 'https://github.com/Sandro-A-Moraes/cyber-web-frontend',
            liveDemo: 'https://example.com'
          },
          {
            id: 2,
            title: 'Aether Dashboard',
            description: 'Futuristic task management system with real-time collaboration, 3D data visualization and workflow automation.',
            fullDescription: 'Aether Dashboard transforms team productivity with a visually impressive and functional interface. Using Three.js for interactive 3D data visualizations, it allows managers to intuitively analyze complex metrics. Real-time collaboration is supported by WebSockets and GraphQL, allowing instant updates. The system includes customizable workflow automation and integration with popular tools like Slack and Jira.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
            technologies: ['TypeScript', 'Three.js', 'Node.js', 'GraphQL', 'Docker', 'Apollo Client', 'PostgreSQL', 'Redis'],
            github: 'https://github.com',
            liveDemo: 'https://example.com'
          },
          {
            id: 3,
            title: 'Quantum Social',
            description: 'Decentralized social network focused on privacy and data control, using end-to-end encryption and IPFS.',
            fullDescription: 'Quantum Social is a revolutionary platform built on Web3 principles. It returns data control to users through decentralized storage via IPFS and smart contracts in Solidity. The React interface offers a familiar and fluid experience, while the backend ensures all communications are end-to-end encrypted. Features include sovereign identities, feed without manipulative algorithms and direct monetization for creators.',
            image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7',
            technologies: ['React', 'Web3', 'Solidity', 'IPFS', 'Socket.io', 'Ethereum', 'Hardhat', 'Ethers.js'],
            github: 'https://github.com',
            liveDemo: 'https://example.com'
          }
        ]
      },
      footer: {
        titulo: 'Let\'s build something amazing?',
        descricao: 'I\'m always open to new challenges and collaborations. If you have an innovative idea, get in touch and let\'s turn it into reality.',
        iniciarConversa: 'Start Conversation',
        navegacao: 'Navigation',
        social: 'Social',
        direitos: 'All rights reserved.',
        desenvolvido: 'Developed with'
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
