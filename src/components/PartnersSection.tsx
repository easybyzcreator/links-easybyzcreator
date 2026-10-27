import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Handshake, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PARTNERS } from '../data/content';
import { Partner } from '../types';
import { PartnerModal } from './PartnerModal';

export const PartnersSection: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const handleCardClick = (partner: Partner) => {
    setSelectedPartner(partner);
  };

  return (
    <section className="mb-7 px-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center">
            <Handshake className="w-3 h-3 text-[#00f0ff]" />
          </div>
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-white font-heading">
            PARCEIROS EM DESTAQUE:
          </h2>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-[10px] font-mono font-semibold">
          <Sparkles className="w-3 h-3" />
          <span>Ecossistema VIP</span>
        </div>
      </div>

      {/* Unified 3-Column Responsive Grid (Ensures all cards have 100% identical size) */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
        {PARTNERS.map((partner, index) => (
          <motion.div
            key={partner.id}
            onClick={() => handleCardClick(partner)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index, duration: 0.35 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="group flex flex-col justify-between p-2.5 rounded-2xl bg-[#0a0a0a]/90 hover:bg-[#111111]/95 border border-white/10 hover:border-[#00f0ff]/60 transition-all duration-300 shadow-xl relative overflow-hidden backdrop-blur-md cursor-pointer"
          >
            {/* Top Image / Logo Poster Container */}
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-white p-1.5 flex items-center justify-center shadow-inner mb-2.5">
              <img
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                className={`w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300 ${
                  partner.id === 'miria-paula'
                    ? 'scale-125'
                    : partner.id === 'geeprint'
                    ? 'scale-115'
                    : partner.id === 'andreia-cakes'
                    ? 'scale-110'
                    : partner.id === 'alem-da-marca'
                    ? 'scale-110'
                    : partner.id === 'astrine'
                    ? 'scale-110'
                    : partner.id === 'l3-marketing'
                    ? 'scale-110'
                    : partner.id === 'simpmais'
                    ? 'scale-110'
                    : partner.id === 'grafike'
                    ? 'scale-110'
                    : partner.id === 'fabrine-fernandes'
                    ? 'scale-110'
                    : 'scale-105'
                }`}
              />
              <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#030303] border border-[#00f0ff]/60 flex items-center justify-center shadow">
                <CheckCircle2 className="w-3 h-3 text-[#00f0ff] fill-[#00f0ff]/20" />
              </div>
            </div>

            {/* Title and 3-line Subtitle (Centered) */}
            <div className="w-full text-center mb-2.5 flex-1 flex flex-col justify-start items-center">
              <h3 className="font-heading font-extrabold text-[11px] sm:text-xs text-white group-hover:text-[#00f0ff] transition-colors leading-tight line-clamp-1 w-full text-center">
                {partner.name}
              </h3>
              
              <p className="text-[9px] sm:text-[9.5px] font-mono text-[#00ddff] font-medium mt-1 leading-snug line-clamp-3 min-h-[38px] w-full text-center">
                {partner.category}
              </p>
            </div>

            {/* Black Pill Button 'VER DETALHES' -> Opens Partner Modal */}
            <div
              className="w-full py-1.5 px-2 rounded-full bg-[#030303] border border-white/15 group-hover:border-[#00f0ff]/70 group-hover:bg-[#00f0ff] group-hover:text-black flex items-center justify-center gap-1 text-[9px] font-mono font-bold text-[#e2e8f0] transition-all"
            >
              <span>VER DETALHES</span>
              <ArrowUpRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Partner Details Modal */}
      <PartnerModal
        partner={selectedPartner}
        onClose={() => setSelectedPartner(null)}
      />
    </section>
  );
};

