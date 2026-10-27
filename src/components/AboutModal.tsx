import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cpu, Users, BrainCircuit, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_INFO, ABOUT_EASYBYZ } from '../data/content';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 shadow-2xl overflow-y-auto max-h-[90vh] z-10 no-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.05] text-[#9ca3af] hover:text-white hover:bg-white/[0.1] border border-white/5 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff]" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#00f0ff] font-heading">
              CONHEÇA A EASY BYZ CREATOR
            </h2>
            <span className="text-[10px] font-mono bg-white/[0.05] text-[#9ca3af] px-2 py-0.5 rounded-full border border-white/5 font-medium ml-auto mr-7">
              Quem Somos
            </span>
          </div>

          {/* Founder Profile Card with Photo */}
          <div className="my-4 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 flex items-center gap-3.5 sm:gap-4 relative overflow-hidden">
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#00f0ff]/50 shadow-lg shadow-[#00f0ff]/10 bg-[#111]">
                <img
                  src="/images/sections/about-patricia.png"
                  alt="Patricia Guimarães"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#030303] border border-[#00f0ff] flex items-center justify-center shadow">
                <Sparkles className="w-2.5 h-2.5 text-[#00f0ff]" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#00f0ff]">
                Fundadora & Estrategista
              </div>
              <h4 className="font-heading font-extrabold text-white text-sm sm:text-base leading-tight mt-0.5">
                Patricia Guimarães
              </h4>
              <p className="text-[11px] text-[#9ca3af] leading-snug mt-1 line-clamp-2">
                Especialista em comportamento humano, tecnologia e automação de processos.
              </p>
            </div>
          </div>

          {/* Lead */}
          <h3 className="text-sm sm:text-base font-bold text-white font-heading leading-snug">
            {ABOUT_EASYBYZ.lead}
          </h3>

          {/* Detailed Story */}
          <div className="mt-3.5 space-y-3 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
            <p>
              A Easy Byz Creator é uma agência de soluções digitais dedicada a criar sistemas e aplicativos exclusivos para empreendedores que buscam eficiência, automação e valorização da própria marca.
            </p>
            <p>
              Entendemos que por trás de toda automação de sucesso existe uma estratégia de comunicação clara. Conectamos engenharia de processos, design minimalista e psicologia de consumo para construir ferramentas intuitivas que resolvem as dores reais da sua rotina — como a gestão de tempo e o atendimento manual repetitivo.
            </p>
            <p>
              Através de um ecossistema moderno e robusto, entregamos autonomia, padrão visual internacional e processos desenhados sob medida para que a sua empresa cresça no piloto automático.
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 gap-2.5 pt-4">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4 text-[#00f0ff]" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white font-heading">INOVAÇÃO</h4>
                <p className="text-[11px] sm:text-xs text-[#9ca3af] mt-0.5">Engenharia de ponta para automatizar rotinas.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#00ddff]/10 border border-[#00ddff]/30 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-[#00ddff]" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white font-heading">PARCERIA</h4>
                <p className="text-[11px] sm:text-xs text-[#9ca3af] mt-0.5">Apoio constante para impulsionar seu crescimento.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#c084fc]/10 border border-[#c084fc]/30 flex items-center justify-center shrink-0">
                <BrainCircuit className="w-4 h-4 text-[#c084fc]" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-white font-heading">PSICOLOGIA</h4>
                <p className="text-[11px] sm:text-xs text-[#9ca3af] mt-0.5">Design focado na melhor experiência e conversão do cliente.</p>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <a
              href={BRAND_INFO.patriciaPortfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#9ca3af] hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Portfólio Patricia Guimarães</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00ddff]" />
            </a>

            <button
              onClick={onClose}
              className="py-2 px-4 rounded-xl bg-[#00f0ff] hover:bg-[#00ddff] text-black font-bold text-xs transition-all cursor-pointer glow-cyan-sm"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
