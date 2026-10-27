import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const WhatsAppCard: React.FC = () => {
  return (
    <section className="mb-7 px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="rounded-2xl bg-[#0a0a0a]/95 border border-[#34d399]/30 p-5 shadow-xl relative overflow-hidden group hover:border-[#34d399]/60 transition-all backdrop-blur-md"
      >
        {/* Soft background watermark */}
        <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 pointer-events-none text-[#34d399]">
          <MessageSquare className="w-36 h-36" />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-10 h-10 rounded-full bg-[#34d399]/15 border border-[#34d399]/30 flex items-center justify-center text-[#34d399] shrink-0">
              <MessageSquare className="w-5 h-5 fill-[#34d399]/20" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#34d399] uppercase">
                  WhatsApp Oficial
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-ping" />
              </div>
              <p className="text-xs font-semibold text-[#e2e8f0]">
                {BRAND_INFO.whatsappNumber}
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-white font-heading mt-1 mb-1">
            ATENDIMENTO & ORÇAMENTO RÁPIDO
          </h3>

          <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
            Fale direto com a Patricia Guimarães e nossa equipe para tirar dúvidas ou estruturar o aplicativo ideal para sua empresa.
          </p>

          {/* Action button */}
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#00f0ff] text-black font-bold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg shadow-emerald-950/40 group-hover:scale-[1.01]"
          >
            <span>Iniciar conversa no WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Micro badges */}
          <div className="mt-3 flex items-center justify-center gap-4 text-[10px] font-mono text-[#9ca3af] font-medium">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#34d399]" />
              Resposta Rápida
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#34d399]" />
              Sem Compromisso
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
