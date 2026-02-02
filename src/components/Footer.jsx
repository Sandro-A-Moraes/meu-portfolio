import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';


const Footer = () => {
  const { translations } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-slate-950 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.5)]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 font-display">
              {translations.footer.titulo}
            </h2>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-8">
              {translations.footer.descricao}
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5594991952034&text&type=phone_number&app_absent=0" target='_blank'
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-400 transition-colors duration-300"
            >
              {translations.footer.iniciarConversa}
            </a>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">{translations.footer.navegacao}</h3>
                <ul className="space-y-2">
                  {['Início', 'Sobre', 'Projetos', 'Contato'].map((item) => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase() === 'início' ? 'hero' : item.toLowerCase()}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">{translations.footer.social}</h3>
                <div className="flex gap-4">
                  {[
                    { icon: FaGithub, href: 'https://github.com/Sandro-A-Moraes' },
                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sandro-moraes/' },
                    { icon: FaWhatsapp, href: 'https://wa.me/5594991952034' },
                    { icon: FaEnvelope, href: 'mailto:sandro.moraes3004@gmail.com' }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Sandro Moraes. {translations.footer.direitos}
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            {translations.footer.desenvolvido} React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;