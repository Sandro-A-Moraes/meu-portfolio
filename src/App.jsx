import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from '@/contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Helmet>
        <title>Sandro Moraes - Desenvolvedor FullStack</title>
        <meta 
          name="description" 
          content="Portfolio de Sandro Moraes, desenvolvedor FullStack especializado em React, Node.js, cloud computing e desenvolvimento web moderno." 
        />
        <meta name="theme-color" content="#020617" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <div className="relative z-10 bg-slate-950">
            <About />
            <Skills />
            <Certifications />
            <Projects />
          </div>
          <Footer />
        </main>
        <Toaster />
      </div>
      <Analytics />
    </LanguageProvider>
  );
}

export default App;