import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  ExternalLink, 
  Sparkles, 
  Cpu, 
  Users, 
  BrainCircuit, 
  ArrowUpRight 
} from 'lucide-react';
import { ABOUT_EASYBYZ, BRAND_INFO } from '../data/content';

export const AboutEasyByz: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="mb-7 px-4">
      <div className="rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 p-5 shadow-xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section title */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff]" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#00f0ff] font-heading">
              CONHEÇA A EASY BYZ CREATOR
            </h2>
          </div>
          
          <span className="text-[10px] font-mono bg-white/[0.05] text-[#9ca3af] px-2 py-0.5 rounded-full border border-white/5 font-medium">
            Quem Somos
          </span>
        </div>

        {/* Founder & Mission Highlight */}
        <div className="relative">
          <h3 className="text-base sm:text-lg font-bold text-white font-heading leading-snug">
            {ABOUT_EASYBYZ.lead}
          </h3>

          <p className="text-xs text-[#e2e8f0] mt-2.5 leading-relaxed">
            A Easy Byz Creator é uma agência de soluções digitais dedicada a criar sistemas e aplicativos exclusivos para empreendedores que buscam eficiência, automação e valorização da própria marca.
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-3 text-xs text-[#9ca3af] space-y-2.5 leading-relaxed">
                  <p>
                    Entendemos que por trás de toda automação de sucesso existe uma estratégia de comunicação clara. Conectamos engenharia de processos, design minimalista e psicologia de consumo para construir ferramentas intuitivas que resolvem as dores reais da sua rotina — como a gestão de tempo e o atendimento manual repetitivo.
                  </p>
                  
                  <p>
                    Através de um ecossistema moderno e robusto, entregamos autonomia, padrão visual internacional e processos desenhados sob medida para que a sua empresa cresça no piloto automático.
                  </p>

                  {/* 3 Core Pillars */}
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
                      <Cpu className="w-4 h-4 text-[#00f0ff] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-xs text-white font-heading">INOVAÇÃO</h4>
                        <p className="text-[11px] text-[#9ca3af]">Engenharia de ponta para automatizar rotinas.</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
                      <Users className="w-4 h-4 text-[#00ddff] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-xs text-white font-heading">PARCERIA</h4>
                        <p className="text-[11px] text-[#9ca3af]">Apoio constante para impulsionar seu crescimento.</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5">
                      <BrainCircuit className="w-4 h-4 text-[#c084fc] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-xs text-white font-heading">PSICOLOGIA</h4>
                        <p className="text-[11px] text-[#9ca3af]">Design focado na melhor experiência e conversão do cliente.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle / Founder Link Action Bar */}
          <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-semibold text-[#00f0ff] hover:text-[#00ddff] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>{isExpanded ? 'Ler menos' : 'Ler história completa'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>

            <a
              href={BRAND_INFO.patriciaPortfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#9ca3af] hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Patricia Guimarães</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00ddff]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
