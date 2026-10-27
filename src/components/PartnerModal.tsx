import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2, Sparkles, ExternalLink, MessageCircle } from 'lucide-react';
import { Partner } from '../types';

interface PartnerModalProps {
  partner: Partner | null;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ partner, onClose }) => {
  if (!partner) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-sm rounded-3xl bg-[#09090b] border border-[#00f0ff]/40 p-5 sm:p-6 shadow-2xl shadow-[#00f0ff]/15 z-10 overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00f0ff]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#9ca3af] hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          {/* VIP Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-[10px] font-mono font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Parceiro Oficial VIP</span>
          </div>

          {/* Large Logo Poster Container */}
          <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-2xl bg-white p-4 flex items-center justify-center shadow-lg mb-4">
            <img
              src={partner.logoUrl}
              alt={`${partner.name} logo`}
              className="w-full h-full object-contain filter drop-shadow-md"
            />
            <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#030303] border border-[#00f0ff]/80 flex items-center justify-center shadow">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff] fill-[#00f0ff]/20" />
            </div>
          </div>

          {/* Content: Title & Full Category Subtitle */}
          <div className="text-center mb-5">
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight leading-snug">
              {partner.name}
            </h3>
            
            <p className="text-xs sm:text-sm font-mono text-[#00f0ff] font-semibold mt-1.5 leading-relaxed">
              {partner.category}
            </p>

            {partner.tagline && (
              <p className="text-xs text-[#9ca3af] mt-2 leading-relaxed whitespace-pre-line">
                {partner.tagline}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#00c8e0] hover:from-[#38bdf8] hover:to-[#00f0ff] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase font-mono flex items-center justify-center gap-2 shadow-lg shadow-[#00f0ff]/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
            >
              <span>{partner.buttonText || (partner.url.includes('wa.me') || partner.url.includes('whatsapp') ? 'Falar no WhatsApp' : 'Acessar Link Oficial')}</span>
              {partner.url.includes('wa.me') || partner.url.includes('whatsapp') ? (
                <MessageCircle className="w-4 h-4 shrink-0 fill-black/20" />
              ) : (
                <ExternalLink className="w-4 h-4 shrink-0" />
              )}
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-[#9ca3af] hover:text-white font-mono text-xs transition-colors cursor-pointer"
            >
              Voltar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
