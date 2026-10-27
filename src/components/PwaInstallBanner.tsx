import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, Smartphone, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const PwaInstallBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState<boolean>(false);
  const [isIos, setIsIos] = useState<boolean>(false);
  const [showIosGuide, setShowIosGuide] = useState<boolean>(false);

  useEffect(() => {
    // Check if running on iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isIosDevice);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // If dismissed before, don't show right away
    const dismissed = localStorage.getItem('easybyz_pwa_dismissed');
    if (!dismissed) {
      // Show subtle banner after a few seconds if mobile
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 4000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    } else if (isIos) {
      setShowIosGuide(true);
    } else {
      setShowIosGuide(true);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('easybyz_pwa_dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          className="rounded-2xl bg-[#0a0a0a]/95 border border-[#00f0ff]/40 p-3.5 shadow-2xl backdrop-blur-md flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#030303] border border-white/10 p-1 flex items-center justify-center shrink-0 shadow-md">
              <img
                src={BRAND_INFO.footerLogoUrl}
                alt="EasyByz App Icon"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs font-bold text-white tracking-wide font-heading">
                  Instalar <span className="text-[#00f0ff]">EasyByz</span>
                </h4>
                <span className="text-[9px] font-mono bg-white/[0.05] text-[#00f0ff] px-1.5 py-0.5 rounded border border-[#00f0ff]/30 font-semibold">
                  App PWA
                </span>
              </div>
              <p className="text-[10px] text-[#9ca3af] truncate">
                Adicione à tela inicial para acesso rápido aos simuladores
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 rounded-lg bg-[#00f0ff] hover:bg-[#00ddff] text-black font-bold text-xs flex items-center gap-1 shadow-sm transition-all cursor-pointer glow-cyan-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Instalar</span>
            </button>

            <button
              onClick={handleDismiss}
              aria-label="Fechar"
              className="w-7 h-7 rounded-lg text-[#9ca3af] hover:text-white hover:bg-white/[0.05] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* iOS / General installation instructions modal */}
      {showIosGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="relative w-full max-w-xs rounded-2xl bg-[#0a0a0a] border border-white/10 p-5 text-center text-white">
            <button
              onClick={() => setShowIosGuide(false)}
              className="absolute top-3 right-3 text-[#9ca3af] hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-[#00f0ff]/30 flex items-center justify-center mx-auto mb-3 text-[#00f0ff]">
              <Smartphone className="w-6 h-6" />
            </div>

            <h4 className="font-bold text-sm mb-1 font-heading">
              Como instalar o app EasyByz:
            </h4>
            
            <p className="text-xs text-[#e2e8f0] mb-3 text-left">
              1. Toque no botão de <strong>Compartilhar</strong> (ícone do quadrado com a seta para cima no Safari ou 3 pontinhos no Chrome).
            </p>
            <p className="text-xs text-[#e2e8f0] mb-4 text-left">
              2. Selecione <strong>"Adicionar à Tela de Início"</strong>.
            </p>

            <button
              onClick={() => setShowIosGuide(false)}
              className="w-full py-2 bg-[#00f0ff] hover:bg-[#00ddff] text-black font-bold text-xs rounded-xl cursor-pointer"
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
