import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const translations = {
    pt: {
      nav: {
        inicio: "Início",
        sobre: "Sobre",
        competencias: "Competências",
        certificacoes: "Certificações",
        projetos: "Projetos",
        contato: "Contato",
      },
      hero: {
        disponivel: "Disponível para Projetos",
        titulo: "Sandro Moraes",
        subtitulo: "Desenvolvedor FullStack & Criador Digital",
        descricao:
          "Transformando ideias complexas em experiências digitais elegantes, escaláveis e de alto desempenho.",
        verProjetos: "Ver Projetos",
        entrarContato: "Entrar em Contato",
        scroll: "Scroll",
      },
      about: {
        titulo1: "Sobre",
        titulo2: "Mim",
        descricao1:
          "Sou um desenvolvedor FullStack apaixonado por criar arquiteturas robustas e interfaces imersivas. Minha abordagem combina precisão técnica com design intuitivo, garantindo que cada linha de código contribua para uma experiência de usuário excepcional.",
        descricao2:
          "Com forte base em ecossistemas JavaScript modernos, transito fluidamente entre a lógica complexa do backend e a interatividade refinada do frontend. Meu objetivo é sempre entregar software que não apenas funcione, mas que inspire.",
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud",
        pixelPerfect: "Pixel Perfect",
        scalable: "Scalable",
        secure: "Secure",
        frontendMastery: "Domínio Frontend",
        backendRobustness: "Robustez Backend",
        devopsCloud: "DevOps & Cloud",
        frontendDesc: "React, Tailwind, UX/UI Design",
        backendDesc: "Node.js, Express, Databases",
        devopsDesc: "AWS, Docker, CI/CD, SCRUM",
      },
      skills: {
        titulo1: "Competências",
        titulo2: "Técnicas",
        subtitulo:
          "Um conjunto abrangente de tecnologias e ferramentas modernas para construir o futuro da web.",
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Tools",
        metodologias: "Metodologias",
      },
      certifications: {
        titulo: "Certificações",
        verCertificado: "Ver Certificado",
        verificado: "Verificado",
        proximaMeta: "Próxima Meta",
        emBreve: "Em breve novas conquistas",
      },
      projects: {
        titulo: "Projetos",
        subtitulo:
          "Explorando as fronteiras do que é possível na web moderna. Clique nos cards para ver detalhes.",
        verMais: "Ver Mais",
        verProjeto: "Ver Projeto",
        tecnologias: "Tecnologias",
        github: "GitHub",
        verDetalhes: "Ver Detalhes",
        projectDetails: "Project Details",
        development: "2024 Development",
        architecture: "Fullstack Architecture",
        tecnologiasModal: "Tecnologias",
        verCodigo: "Ver Código no GitHub",
        data: [
          {
            id: 1,
            title: "Cyber E-commerce",
            description:
              "Plataforma de e-commerce full stack focada em performance, escalabilidade e práticas reais de produção, com autenticação, gerenciamento de produtos e fluxo completo de compra e checkout.",
            fullDescription:
              "Cyber Web é uma aplicação de e-commerce full stack desenvolvida para simular um ambiente real de produção, cobrindo desde a listagem de produtos até um fluxo de checkout protegido por autenticação. O frontend foi construído com React, TypeScript, Vite e TailwindCSS, garantindo uma interface moderna, responsiva e bem estruturada, com navegação feita via React Router. A autenticação de usuários foi implementada com Clerk, incluindo proteção de rotas sensíveis como o checkout. O backend foi desenvolvido com Node.js, TypeScript, Express e Prisma ORM, disponibilizando uma API REST para gerenciamento de produtos e regras de negócio. O banco de dados utiliza SQLite em desenvolvimento, com arquitetura preparada para uso de bancos relacionais como MySQL ou PostgreSQL em produção. A aplicação foi totalmente containerizada com Docker e orquestrada com Docker Compose, permitindo padronização de ambientes e facilidade de deploy. O projeto também foi preparado para execução em ambiente de nuvem na AWS, utilizando EC2, Nginx como servidor web e gerenciamento de processos. Durante o desenvolvimento, foram enfrentados desafios relacionados à autenticação, organização de rotas, integração frontend-backend, configuração de ambientes, Dockerização e deploy em cloud, que foram superados com estudo, testes práticos e aplicação de boas práticas de engenharia de software.",
            image: "cyberWeb",
            technologies: [
              "React",
              "Node.js",
              "AWS",
              "Docker",
              "TypeScript",
              "Docker",
              "Prisma",
              "Express.js",
            ],
            github: "https://github.com/Sandro-A-Moraes/cyber-web-frontend",
            liveDemo: "https://example.com",
          },
          {
            id: 2,
            title: "Instituto Longevitá",
            description:
              "Site institucional desenvolvido para fortalecer a presença digital da clínica, com foco em conversão, experiência do usuário e identidade acolhedora.",
            fullDescription:
              "O projeto do Instituto Longevitá foi desenvolvido com o objetivo de posicionar a clínica no ambiente digital, aumentando a captação de pacientes e facilitando o contato com o público. O site foi estruturado com uma abordagem de landing page na Home, priorizando conversão e navegação intuitiva. Foram aplicadas boas práticas de SEO inicial, responsividade e performance, além de integração com WhatsApp para facilitar o atendimento. A identidade visual foi pensada para transmitir acolhimento, profissionalismo e confiança, alinhando-se à proposta de cuidado integral da clínica. O projeto também foi preparado para futuras expansões, como implementação de blog, landing pages e possíveis produtos digitais.",
            image: "longevita",
            technologies: [
              "React.js",
              "TailwindCSS",
              "JavaScript",
              "Vite",
              "Figma",
            ],
            github: "",
            liveDemo: "https://www.longevitasi.cloud",
          },
          {
            id: 3,
            title: "Go Social",
            description:
              "Rede social descentralizada focada em privacidade e controle de dados, para desenvolvedores e entusiastas, utilizando criptografia de ponta a ponta e IPFS.",
            fullDescription:
              "Go Social é uma plataforma revolucionária construída sobre princípios de privacidade e controle de dados. A interface react está em desenvolvimento, mas o backend em Go já está funcional, garantindo que todas as comunicações sejam criptografadas de ponta a ponta. A plataforma oferece um ambiente seguro e privado, permitindo que os usuários tenham controle total sobre seus dados e interações. Recursos como identidades soberanas, feed sem algoritmos manipulativos e monetização direta para criadores estão sendo implementados para oferecer uma experiência única e segura.",
            image:
              "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
            technologies: [
              "React",
              "Web3",
              "Solidity",
              "IPFS",
              "Socket.io",
              "Ethereum",
              "Hardhat",
              "Ethers.js",
            ],
            github: "https://github.com/Sandro-A-Moraes/gosocial-frontend.git",
            liveDemo: "https://example.com",
          },
          {
            id: 4,
            title: "Atlas",
            description:
              "Plataforma web de gestÃ£o laboratorial veterinÃ¡ria que organiza requisiÃ§Ãµes, coletas, triagem, laudos e integraÃ§Ã£o segura com sistema legado.",
            fullDescription:
              "Atlas Ã© um ecossistema laboratorial veterinÃ¡rio pensado para centralizar o fluxo entre clÃ­nicas, administraÃ§Ã£o, motoboys, laboratÃ³rio interno e usuÃ¡rios master. A plataforma controla a criaÃ§Ã£o de requisiÃ§Ãµes, rastreio por status, triagem de materiais, publicaÃ§Ã£o de laudos e a integraÃ§Ã£o com o legado Esmeralda apenas apÃ³s a validaÃ§Ã£o dos materiais. Tecnicamente, foi concebida como uma aplicaÃ§Ã£o web modular com foco em rastreabilidade, permissÃµes por perfil, resiliÃªncia operacional e fluxos assÃ­ncronos.",
            image:
              "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=80",
            technologies: [
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Zustand",
              "TanStack Query",
              "PostgreSQL",
              "AI",
            ],
            github: "",
            liveDemo: "https://example.com",
          },
        ],
      },
      footer: {
        titulo: "Vamos construir algo incrível?",
        descricao:
          "Estou sempre aberto a novos desafios e colaborações. Se você tem uma ideia inovadora, entre em contato e vamos transformá-la em realidade.",
        iniciarConversa: "Iniciar Conversa",
        navegacao: "Navegação",
        social: "Social",
        direitos: "Todos os direitos reservados.",
        desenvolvido: "Desenvolvido com",
      },
    },
    en: {
      nav: {
        inicio: "Home",
        sobre: "About",
        competencias: "Skills",
        certificacoes: "Certifications",
        projetos: "Projects",
        contato: "Contact",
      },
      hero: {
        disponivel: "Available for Projects",
        titulo: "Sandro Moraes",
        subtitulo: "FullStack Developer & Digital Creator",
        descricao:
          "Transforming complex ideas into elegant, scalable, and high-performance digital experiences.",
        verProjetos: "View Projects",
        entrarContato: "Get in Touch",
        scroll: "Scroll",
      },
      about: {
        titulo1: "About",
        titulo2: "Me",
        descricao1:
          "I am a passionate FullStack developer focused on creating robust architectures and immersive interfaces. My approach combines technical precision with intuitive design, ensuring that every line of code contributes to an exceptional user experience.",
        descricao2:
          "With a strong foundation in modern JavaScript ecosystems, I seamlessly navigate between complex backend logic and refined frontend interactivity. My goal is always to deliver software that not only works, but inspires.",
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud",
        pixelPerfect: "Pixel Perfect",
        scalable: "Scalable",
        secure: "Secure",
        frontendMastery: "Frontend Mastery",
        backendRobustness: "Backend Robustness",
        devopsCloud: "DevOps & Cloud",
        frontendDesc: "React, Tailwind, UX/UI Design",
        backendDesc: "Node.js, Express, Databases",
        devopsDesc: "AWS, Docker, CI/CD, SCRUM",
      },
      skills: {
        titulo1: "Technical",
        titulo2: "Skills",
        subtitulo:
          "A comprehensive set of modern technologies and tools to build the future of the web.",
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Tools",
        metodologias: "Methodologies",
      },
      certifications: {
        titulo: "Certifications",
        verCertificado: "View Certificate",
        verificado: "Verified",
        proximaMeta: "Next Goal",
        emBreve: "New achievements soon",
      },
      projects: {
        titulo: "Projects",
        subtitulo:
          "Exploring the frontiers of what is possible in modern web. Click on the cards to see details.",
        verMais: "See More",
        verProjeto: "View Project",
        tecnologias: "Technologies",
        github: "GitHub",
        verDetalhes: "View Details",
        projectDetails: "Project Details",
        development: "2024 Development",
        architecture: "Fullstack Architecture",
        tecnologiasModal: "Technologies",
        verCodigo: "View Code on GitHub",
        data: [
          {
            id: 1,
            title: "Cyber E-commerce",
            description:
              "Full stack e-commerce platform focused on performance, scalability and real production practices, with authentication, product management and complete purchase and checkout flow.",
            fullDescription:
              "Cyber Web is a full stack e-commerce application developed to simulate a real production environment, covering from product listing to an authentication-protected checkout flow. The frontend was built with React, TypeScript, Vite and TailwindCSS, ensuring a modern, responsive and well-structured interface, with navigation done via React Router. User authentication was implemented with Clerk, including protection of sensitive routes like checkout. The backend was developed with Node.js, TypeScript, Express and Prisma ORM, providing a REST API for product management and business rules. The database uses SQLite in development, with architecture prepared for relational databases like MySQL or PostgreSQL in production. The application was fully containerized with Docker and orchestrated with Docker Compose, allowing environment standardization and easy deployment. The project was also prepared for execution in AWS cloud environment, using EC2, Nginx as web server and process management. During development, challenges related to authentication, route organization, frontend-backend integration, environment configuration, Dockerization and cloud deployment were faced, which were overcome with study, practical tests and application of software engineering best practices.",
            image: "cyberWeb",
            technologies: [
              "React",
              "Node.js",
              "AWS",
              "Docker",
              "TypeScript",
              "Docker",
              "Prisma",
              "Express.js",
            ],
            github: "https://github.com/Sandro-A-Moraes/cyber-web-frontend",
            liveDemo: "https://example.com",
          },
          {
            id: 2,
            title: "Longevitá Institute",
            description:
              "Institutional website developed to strengthen the clinic’s digital presence, focusing on conversion, user experience, and a welcoming identity.",
            fullDescription:
              "The Longevitá Institute project was developed with the goal of establishing a strong digital presence for the clinic, increasing patient acquisition and simplifying communication with clients. The website was structured with a landing page approach on the homepage, prioritizing conversion and intuitive navigation. SEO best practices were applied, along with full responsiveness and performance optimization. Integration with WhatsApp was implemented to streamline contact. The visual identity was carefully designed to convey warmth, professionalism, and trust, aligning with the clinic’s holistic care approach. The project was also built with scalability in mind, allowing future expansion such as blog integration, landing pages, and digital products.",
            image: "/images/longevita-preview.webp",
            technologies: [
              "React.js",
              "TailwindCSS",
              "JavaScript",
              "Vite",
              "Figma",
            ],
            github: "",
            liveDemo: "https://www.longevitasi.cloud",
          },
          {
            id: 3,
            title: "Quantum Social",
            description:
              "Decentralized social network focused on privacy and data control, using end-to-end encryption and IPFS.",
            fullDescription:
              "Quantum Social is a revolutionary platform built on Web3 principles. It returns data control to users through decentralized storage via IPFS and smart contracts in Solidity. The React interface offers a familiar and fluid experience, while the backend ensures all communications are end-to-end encrypted. Features include sovereign identities, feed without manipulative algorithms and direct monetization for creators.",
            image:
              "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
            technologies: [
              "React",
              "Web3",
              "Solidity",
              "IPFS",
              "Socket.io",
              "Ethereum",
              "Hardhat",
              "Ethers.js",
            ],
            github: "https://github.com",
            liveDemo: "https://example.com",
          },
          {
            id: 4,
            title: "Atlas",
            description:
              "Veterinary laboratory management web platform that organizes requisitions, collections, triage, reports, and secure legacy system integration.",
            fullDescription:
              "Atlas is a veterinary laboratory ecosystem designed to unify the flow between clinics, administrators, couriers, the internal lab, and master users. The platform manages exam requisitions, status-based traceability, material triage, report delivery, and integration with the Esmeralda legacy system only after material validation. From a technical perspective, it was conceived as a modular web platform focused on operational resilience, role-based permissions, and asynchronous workflows.",
            image:
              "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1200&q=80",
            technologies: [
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Zustand",
              "TanStack Query",
              "PostgreSQL",
              "AI",
            ],
            github: "",
            liveDemo: "https://example.com",
          },
        ],
      },
      footer: {
        titulo: "Let's build something amazing?",
        descricao:
          "I'm always open to new challenges and collaborations. If you have an innovative idea, get in touch and let's turn it into reality.",
        iniciarConversa: "Start Conversation",
        navegacao: "Navigation",
        social: "Social",
        direitos: "All rights reserved.",
        desenvolvido: "Developed with",
      },
    },
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
