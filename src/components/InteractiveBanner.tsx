import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';

interface InteractiveBannerProps {
  onOpenDiagnostic: () => void;
  onScrollToApps: () => void;
}

export const InteractiveBanner: React.FC<InteractiveBannerProps> = ({
  onOpenDiagnostic,
  onScrollToApps,
}) => {
  return (
    <div className="px-4 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="relative overflow-hidden rounded-2xl bg-[#0a0a0a]/90 border border-white/10 p-4 sm:p-5 shadow-xl group hover:border-[#00f0ff]/50 transition-all backdrop-blur-md"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#00f0ff]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00f0ff]/20 transition duration-500" />
        
        <div className="flex items-center gap-3.5 relative z-10">
          <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff] shrink-0 shadow-inner group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="flex-1 text-left">
            <h2 className="text-sm sm:text-base font-bold text-white leading-tight font-heading flex items-center gap-1.5">
              Como podemos crescer seu negócio?
            </h2>
            <p className="text-xs text-[#e2e8f0] mt-0.5 leading-snug">
              Responda rápido e descubra o app ideal para a sua rotina!
            </p>
          </div>

          <button
            onClick={onOpenDiagnostic}
            aria-label="Abrir Diagnóstico"
            className="w-10 h-10 rounded-full bg-[#00f0ff] text-black hover:bg-[#00ddff] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-all font-semibold cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Quick action buttons row */}
        <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#9ca3af]">
          <button
            onClick={onOpenDiagnostic}
            className="hover:text-[#00f0ff] font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Fazer Teste de Nicho</span>
            <span className="text-[10px] font-mono bg-white/[0.05] text-[#00f0ff] px-1.5 py-0.5 rounded border border-[#00f0ff]/30">1 min</span>
          </button>
          
          <button
            onClick={onScrollToApps}
            className="hover:text-[#00f0ff] font-medium flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Ver 8 Simuladores</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
