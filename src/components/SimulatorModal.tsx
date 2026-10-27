import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  Target, 
  Layers 
} from 'lucide-react';
import { SimulationApp } from '../types';
import { BRAND_INFO } from '../data/content';

interface SimulatorModalProps {
  app: SimulationApp | null;
  onClose: () => void;
}

export const SimulatorModal: React.FC<SimulatorModalProps> = ({ app, onClose }) => {
  if (!app) return null;

  const whatsappInquiryUrl = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
    `Olá! Estive testando o simulador do *${app.name}* no Link da Bio e gostaria de saber como criar um aplicativo exclusivo com a minha marca.`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg max-h-[90vh] rounded-3xl bg-[#0a0a0a] border border-white/15 p-5 sm:p-6 shadow-2xl overflow-y-auto z-10 custom-scrollbar"
        >
          {/* Top colored accent line */}
          <div 
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{ backgroundColor: app.accentColor }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.05] text-[#9ca3af] hover:text-white hover:bg-white/[0.1] border border-white/5 flex items-center justify-center transition-colors cursor-pointer z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mt-1 mb-3">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0"
              style={{ backgroundColor: `${app.accentColor}25`, border: `1px solid ${app.accentColor}50` }}
            >
              <Sparkles className="w-6 h-6" style={{ color: app.accentColor }} />
            </div>

            <div className="min-w-0 pr-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span 
                  className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                  style={{ backgroundColor: `${app.accentColor}20`, color: app.accentColor }}
                >
                  {app.tag}
                </span>
                <span className="text-[10px] font-mono text-[#9ca3af] font-medium">Simulador Oficial</span>
              </div>
              <h3 className="text-xl font-bold text-white font-heading mt-0.5">
                {app.name}
              </h3>
            </div>
          </div>

          {/* Full Title (if present) */}
          {app.fullTitle && (
            <h4 className="text-sm font-heading font-extrabold text-[#00f0ff] mb-3 leading-snug">
              {app.fullTitle}
            </h4>
          )}

          {/* Target Audience */}
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-[#00f0ff]/30 mb-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#00f0ff] mb-1 font-heading">
              <Target className="w-3.5 h-3.5" />
              <span>PÚBLICO-ALVO IDEAL:</span>
            </div>
            <p className="text-xs text-[#e2e8f0] font-medium leading-relaxed">
              {app.idealFor}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
            {app.shortDesc}
          </p>

          {/* Highlight Badge (if present) */}
          {app.highlightBadge && (
            <div className="p-3 rounded-xl bg-gradient-to-r from-[#00f0ff]/15 to-transparent border border-[#00f0ff]/40 mb-4">
              <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider mb-0.5">
                ✦ {app.highlightBadge.title}
              </div>
              <div className="text-[10px] font-mono text-[#00ddff] font-semibold leading-relaxed">
                {app.highlightBadge.desc}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="mb-4">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9ca3af] mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#00f0ff]" />
              Principais Funcionalidades:
            </h4>
            <div className="space-y-1.5">
              {app.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#e2e8f0]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#00f0ff] shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Real World Examples (if present) */}
          {app.realWorldExamples && app.realWorldExamples.length > 0 && (
            <div className="mb-5">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9ca3af] mb-2">
                Exemplos Práticos de Aplicação:
              </h4>
              <div className="space-y-2">
                {app.realWorldExamples.map((ex, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="block text-xs font-bold text-white mb-0.5">
                      • {ex.title}
                    </span>
                    <p className="text-[11px] text-[#9ca3af] leading-relaxed">
                      {ex.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="space-y-2.5 pt-2 border-t border-white/10">
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#00f0ff] hover:bg-[#00ddff] text-black font-bold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg glow-cyan-sm"
            >
              <span>Abrir Simulador Interativo</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#34d399]" />
              <span>Solicitar Orçamento deste App no WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
