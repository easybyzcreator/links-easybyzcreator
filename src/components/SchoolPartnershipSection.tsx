import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import {
  GraduationCap,
  ArrowUpRight,
  Sparkles,
  Percent,
  Smartphone,
  Award,
  CheckCircle2,
} from 'lucide-react';

export const SchoolPartnershipSection: React.FC = () => {
  const partnershipUrl = 'https://easybyzparceriascomescolas.vercel.app/';
  const containerRef = useRef<HTMLDivElement>(null);

  // Efeito de scroll suave e dinâmico conectado ao viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Movimento de paralaxe e física suave via Spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  const translateY = useTransform(smoothProgress, [0, 1], [-16, 16]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.98, 1.015, 0.98]);

  return (
    <section className="mb-7 px-4" ref={containerRef}>
      {/* Container Principal com Estética Cyber / Neon Dark */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative rounded-3xl bg-gradient-to-b from-[#0c1622] via-[#080d14] to-[#04070b] border border-[#00f0ff]/30 p-4 sm:p-5 shadow-[0_0_35px_-10px_rgba(0,240,255,0.2)] overflow-hidden"
      >
        {/* Ambient Glows */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#00f0ff]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#00ddff]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header da Seção */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#00f0ff]/15 border border-[#00f0ff]/40 flex items-center justify-center">
              <GraduationCap className="w-3 h-3 text-[#00f0ff]" />
            </div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#00f0ff] uppercase">
              Novidade
            </span>
          </div>

          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-[9.5px] font-mono font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Exclusivo</span>
          </div>
        </div>

        {/* 1. Título Principal (fonte reduzida e equilibrada) */}
        <h2 className="text-[12.5px] sm:text-[14px] font-extrabold uppercase tracking-wide text-white font-heading leading-snug mb-2.5">
          PARCERIAS <span className="text-[#00f0ff]">(ESCOLAS E MENTORES: GASTRONOMIA E CONFEITARIA)</span>
        </h2>

        {/* 2. Subtítulo Explicativo posicionado logo abaixo do título */}
        <p className="text-xs sm:text-[13px] font-sans text-[#cbd5e1] leading-relaxed mb-4 bg-white/[0.03] p-3 rounded-xl border border-white/5">
          Transforme o aprendizado dos seus alunos em um negócio real, profissional e lucrativo. Ofereça aos seus alunos o ecossistema digital definitivo para gerenciar pedidos, produção e finanças — tudo com a identidade visual deles e a chancela oficial da sua escola.
        </p>

        {/* 3. Imagem da mulher com movimento de scroll + 4 tags flutuantes ao redor (sem o botão "acessar parceria") */}
        <div className="relative mb-5 pt-3 pb-2">
          {/* Fundo com iluminação gradiente focal */}
          <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-tr from-[#00cfff]/20 via-transparent to-[#00e6a8]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Container animado com paralaxe suave no scroll */}
          <motion.div
            style={{
              y: translateY,
              scale,
            }}
            className="relative will-change-transform flex justify-center items-center"
          >
            <a
              href={partnershipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full rounded-2xl overflow-visible group cursor-pointer"
              title="Easy Byz - Parceria com Escolas e Mentores"
            >
              {/* Imagem da mulher com sombra de profundidade */}
              <div className="relative z-10 flex justify-center items-center px-1">
                <img
                  src="/images/sections/school-partnership.png"
                  alt="Aluna e aplicativo Web App Easy Byz de confeitaria e gastronomia"
                  className="w-auto h-auto max-h-[460px] sm:max-h-[520px] max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* TAG 1: 10% Comissão (Superior Direita) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="absolute top-2 sm:top-5 right-0 sm:right-1 z-20 pointer-events-auto"
              >
                <div className="bg-[#07161f]/95 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.65)] flex items-center gap-2 sm:gap-2.5 max-w-[155px] sm:max-w-[215px] hover:border-[#00e6a8]/60 transition-all">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#00e6a8]/20 text-[#00e6a8] flex items-center justify-center shrink-0 border border-[#00e6a8]/30">
                    <Percent className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-extrabold text-white leading-tight block">
                      10% Comissão
                    </span>
                    <p className="text-[8px] sm:text-[10px] text-gray-300 leading-tight mt-0.5">
                      Recorrente para sua escola
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* TAG 2: Web App PWA (Superior Esquerda - reposicionada acima do celular) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                className="absolute top-2 sm:top-5 left-0 sm:left-1 z-20 pointer-events-auto"
              >
                <div className="bg-[#07161f]/95 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.65)] flex items-center gap-2 sm:gap-2.5 max-w-[155px] sm:max-w-[220px] hover:border-[#00cfff]/60 transition-all">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#00cfff]/20 text-[#00cfff] flex items-center justify-center shrink-0 border border-[#00cfff]/30">
                    <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-extrabold text-white leading-tight block">
                      Web App PWA
                    </span>
                    <p className="text-[8px] sm:text-[10px] text-gray-300 leading-tight mt-0.5">
                      Direto no celular do cliente
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* TAG 3: Chancela Oficial (Inferior Esquerda) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
                className="absolute bottom-24 sm:bottom-28 left-0 sm:left-1 z-20 pointer-events-auto"
              >
                <div className="bg-[#07161f]/95 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.65)] flex items-center gap-2 sm:gap-2.5 max-w-[155px] sm:max-w-[215px] hover:border-amber-400/60 transition-all">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-extrabold text-white leading-tight block">
                      Chancela Oficial
                    </span>
                    <p className="text-[8px] sm:text-[10px] text-gray-300 leading-tight mt-0.5">
                      A autoridade da sua escola
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* TAG 4: 0% Taxa Abusiva (Inferior Direita) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
                className="absolute bottom-2 sm:bottom-5 right-0 sm:right-1 z-20 pointer-events-auto"
              >
                <div className="bg-[#07161f]/95 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.65)] flex items-center gap-2 sm:gap-2.5 max-w-[185px] sm:max-w-[260px] hover:border-[#00e6a8]/60 transition-all">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#004d40]/80 border border-[#00e6a8]/40 text-[#00e6a8] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-extrabold text-white leading-tight block">
                      0% Taxa Abusiva
                    </span>
                    <p className="text-[8px] sm:text-[10px] text-gray-200 leading-tight mt-0.5 font-medium">
                      Lucro integral para o aluno
                    </p>
                    <p className="text-[7.5px] sm:text-[9.5px] text-[#00e6a8] font-bold leading-tight mt-0.5">
                      sem taxas extras e com mensalidade fixa
                    </p>
                  </div>
                </div>
              </motion.div>
            </a>
          </motion.div>
        </div>

        {/* 4. Botão de Direcionamento Principal para a Parceria */}
        <a
          href={partnershipUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-heading font-extrabold text-xs text-black uppercase tracking-wider bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#00ddff] hover:from-[#38bdf8] hover:to-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 transform active:scale-95"
        >
          <span>SAIBA MAIS COMO FUNCIONA A PARCERIA</span>
          <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};
