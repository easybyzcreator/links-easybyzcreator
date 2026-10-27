import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, Globe, Share2, Check, Sparkles, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface HeaderProps {
  onOpenAbout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAbout }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Easy Byz Creator | Links & Aplicativos',
          text: 'Descubra os aplicativos personalizados e soluções da Easy Byz Creator',
          url: window.location.href,
        });
      } catch {
        // User cancelled or share not supported
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <header className="relative flex flex-col items-center text-center pt-6 pb-6 px-4">
      {/* Top Left Tag: Sobre nós */}
      <div className="w-full flex items-center justify-between mb-4">
        {onOpenAbout ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenAbout}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-[#00f0ff]/50 text-xs font-mono text-[#e2e8f0] transition-all cursor-pointer shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
            <span className="font-semibold text-[11px]">Sobre nós</span>
          </motion.button>
        ) : <div />}

        <div className="flex items-center gap-1 text-[10px] font-mono text-[#9ca3af] bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/5">
          <Sparkles className="w-3 h-3 text-[#00f0ff]" />
          <span>EBC Oficial</span>
        </div>
      </div>

      {/* Brand Avatar / Logo - Increased by 40% without sparkle badge */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#00f0ff] via-[#00ddff] to-[#38bdf8] opacity-75 blur-lg group-hover:opacity-100 transition duration-500" />
        
        {/* Dark Circle Container (matches brand dark blue/black theme, +40% size) */}
        <div className="relative w-[135px] h-[135px] sm:w-[158px] sm:h-[158px] rounded-full bg-[#030303] p-1 border-2 border-[#00f0ff]/50 shadow-2xl flex items-center justify-center overflow-hidden">
          <img
            src={BRAND_INFO.logoUrl}
            alt="Easy Byz Creator Logo"
            className="w-full h-full object-contain scale-110 filter drop-shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      {/* Brand Title & Tagline */}
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mt-4 max-w-sm"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-[#00f0ff]/30 text-[#00f0ff] text-[11px] font-mono font-medium tracking-wider uppercase mb-2">
          <span>Soluções Digitais & Apps</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
          EASY BYZ <span className="text-[#00f0ff]">CREATOR</span>
        </h1>
        
        <p className="text-[#e2e8f0] text-sm mt-1.5 font-medium leading-relaxed">
          {BRAND_INFO.tagline}
        </p>
        <p className="text-[#9ca3af] text-xs mt-1 leading-snug">
          Aplicativos e sistemas sob medida para o seu negócio.
        </p>
      </motion.div>

      {/* Quick Social Buttons Bar */}
      <motion.div
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex items-center justify-center gap-3 mt-5 flex-wrap"
      >
        <a
          href={BRAND_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Easy Byz"
          className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-[#00f0ff]/50 hover:bg-white/[0.1] transition-all shadow-md group"
        >
          <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>

        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Easy Byz"
          className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#34d399] hover:text-white hover:border-[#34d399]/60 hover:bg-[#34d399]/15 transition-all shadow-md group"
        >
          <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>

        <a
          href={BRAND_INFO.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Easy Byz"
          className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-[#00ddff]/50 hover:bg-white/[0.1] transition-all shadow-md group"
        >
          <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>

        <a
          href={BRAND_INFO.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Site Oficial"
          className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-[#00f0ff]/50 hover:bg-white/[0.1] transition-all shadow-md group"
        >
          <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </a>

        <button
          onClick={handleShare}
          aria-label="Compartilhar Link"
          className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-[#00f0ff]/50 hover:bg-white/[0.1] transition-all shadow-md group relative cursor-pointer"
        >
          {copied ? (
            <Check className="w-4 h-4 text-[#00f0ff]" />
          ) : (
            <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </motion.div>

      {/* Feedback Toast for copied link */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 text-xs font-mono font-semibold text-[#00f0ff] bg-[#0a0a0a] border border-[#00f0ff]/40 px-3.5 py-1 rounded-full shadow"
          >
            Link copiado com sucesso!
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
