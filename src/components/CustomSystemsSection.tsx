import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Sparkles, 
  Cpu, 
  Database, 
  Smartphone, 
  Workflow, 
  ArrowRight, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const CustomSystemsSection: React.FC = () => {
  const whatsappCustomUrl = `https://wa.me/${BRAND_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá Pati! Tenho interesse em desenvolver um *Sistema/Aplicativo Personalizado Sob Medida* para o meu negócio. Gostaria de entender como funciona o projeto!'
  )}`;

  const pillars = [
    {
      icon: Cpu,
      title: 'Arquitetura Sob Medida',
      desc: 'Desenvolvemos fluxos e lógicas exclusivas, sem as amarras ou limitações de sistemas prontos genéricos.',
    },
    {
      icon: Database,
      title: 'Banco de Dados & Autonomia',
      desc: 'Seus dados e clientes são 100% seus, em infraestrutura em nuvem segura, escalável e de alta performance.',
    },
    {
      icon: Smartphone,
      title: 'Responsivo & PWA',
      desc: 'Acesso fluido em qualquer celular, tablet ou computador, sem necessidade de download obrigatório em lojas.',
    },
    {
      icon: Workflow,
      title: 'Integrações Inteligentes',
      desc: 'Conecte seu sistema a pagamentos automáticos, WhatsApp, formulários e painéis administrativos.',
    },
  ];

  return (
    <section className="mb-7 px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl bg-gradient-to-b from-[#0a0a0a] to-[#04090d] border border-[#00f0ff]/30 p-5 sm:p-6 shadow-2xl relative overflow-hidden group"
      >
        {/* Top ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#00ddff]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Tag */}
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-[10px] font-mono font-bold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Engenharia Sob Medida</span>
          </div>

          <div className="flex items-center gap-1 text-[10px] font-mono text-[#34d399] font-semibold bg-[#34d399]/10 px-2.5 py-0.5 rounded-full border border-[#34d399]/30">
            <ShieldCheck className="w-3 h-3" />
            <span>Projetos Exclusivos</span>
          </div>
        </div>

        {/* Title and Intro */}
        <h2 className="text-lg sm:text-xl font-bold font-heading text-white leading-tight mb-2">
          Sistemas e Aplicativos <span className="text-[#00f0ff]">Personalizados</span>
        </h2>

        <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
          Sua empresa possui processos únicos ou quer uma solução tecnológica desenhada do zero? Criamos plataformas completas, portais de clientes e aplicativos corporativos adaptados perfeitamente à sua rotina.
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#00f0ff]/40 transition-all duration-300 flex items-start gap-2.5"
              >
                <div className="w-7 h-7 rounded-lg bg-[#00f0ff]/15 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] shrink-0 mt-0.5">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-[#9ca3af] leading-tight mt-0.5">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action button */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={whatsappCustomUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#00f0ff] via-[#00ddff] to-[#38bdf8] text-black font-bold font-heading text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#00f0ff]/25 hover:shadow-[#00f0ff]/40 transition-all duration-300 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-black fill-black" />
          <span>Fale Conosco sobre Seu Projeto Personalizado</span>
          <ArrowRight className="w-4 h-4 text-black" />
        </motion.a>
      </motion.div>
    </section>
  );
};
