import React from 'react';
import { motion } from 'motion/react';
import { ChevronUp, Globe } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-8 pt-6 pb-12 px-4 border-t border-white/5 flex flex-col items-center text-center">
      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#9ca3af] hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all mb-6 cursor-pointer"
      >
        <ChevronUp className="w-4 h-4" />
      </motion.button>

      {/* Developed By Link with Centered Logo (+40% size) */}
      <a
        href={BRAND_INFO.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center justify-center transition-all"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#9ca3af] uppercase font-semibold mb-2.5 group-hover:text-[#00f0ff] transition-colors">
          DEVELOPED BY
        </span>

        <div className="w-[90px] h-[90px] sm:w-[112px] sm:h-[112px] transition-transform group-hover:scale-105 flex items-center justify-center">
          <img
            src={BRAND_INFO.footerLogoUrl}
            alt="Easy Byz Creator"
            className="w-full h-full object-contain filter drop-shadow-lg group-hover:brightness-110 transition-all"
            referrerPolicy="no-referrer"
          />
        </div>
      </a>

      <p className="text-[10px] font-mono text-[#9ca3af] mt-5">
        © {new Date().getFullYear()} Easy Byz Creator. Todos os direitos reservados.
      </p>
    </footer>
  );
};
