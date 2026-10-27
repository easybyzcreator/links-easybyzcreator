import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle2, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export const BusinessRulesComparison: React.FC = () => {
  const comparisonItems = [
    {
      number: '01',
      title: 'Identidade Visual',
      generic: 'O cliente vê o logotipo, as cores e os anúncios de outros concorrentes enquanto tenta agendar com você.',
      premium: 'Experiência 100% exclusiva e limpa com a sua marca, suas cores e seu logotipo. Posicionamento de alto valor para o seu cliente.',
    },
    {
      number: '02',
      title: 'Modelo de Cobrança',
      generic: 'Cobram taxas por agendamento ou comissões disfarçadas sobre o seu faturamento à medida que você cresce.',
      premium: 'Mensalidade fixa justa. Todo o lucro do seu trabalho vai direto para o seu bolso, sem taxas surpresas ou comissões.',
    },
    {
      number: '03',
      title: 'Retenção de Clientes',
      generic: 'Sua lista de clientes fica presa na base deles, facilitando que o usuário encontre outros profissionais na mesma região.',
      premium: 'O banco de dados é totalmente seu. Um canal direto e exclusivo entre o seu negócio e o seu cliente fiel.',
    },
    {
      number: '04',
      title: 'Suporte e Ajustes',
      generic: 'Atendimento automatizado por robôs e layouts estáticos que você não pode customizar se a sua rotina mudar.',
      premium: 'Assessoria e acompanhamento humano direto para configurar o sistema exatamente para as necessidades da sua rotina.',
    },
  ];

  return (
    <section className="mb-8 px-4" id="comparativo-regras">
      {/* Title & Subtitle */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-[10px] font-mono font-bold uppercase tracking-wider mb-2.5"
        >
          <Sparkles className="w-3 h-3" />
          <span>Comparativo de Valor</span>
        </motion.div>
        
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
          Seu Negócio, Suas Regras
        </h2>
        <p className="text-xs sm:text-sm text-[#9ca3af] max-w-md mx-auto mt-1.5 leading-relaxed">
          Descubra por que ter um aplicativo personalizado com a sua marca é o próximo nível para a sua operação profissional.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        
        {/* Left Column: Generic / 3rd Party Apps */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-[#080808]/90 border border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-xl relative overflow-hidden backdrop-blur-md"
        >
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/5">
              <div className="w-8 h-8 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <XCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold text-red-400 uppercase tracking-wider block">
                  Plataformas Terceirizadas
                </span>
                <h3 className="text-sm sm:text-base font-extrabold text-white font-heading tracking-wide">
                  APLICATIVOS GENÉRICOS
                </h3>
              </div>
            </div>

            {/* List */}
            <div className="space-y-4">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-[#6b7280] flex items-center justify-center shrink-0 mt-0.5">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#9ca3af] leading-relaxed mt-0.5">
                      {item.generic}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer warning */}
          <div className="mt-5 pt-3 border-t border-white/5 text-center">
            <span className="text-[10px] font-mono text-[#6b7280]">
              Limita o seu crescimento e esvazia sua margem de lucro.
            </span>
          </div>
        </motion.div>

        {/* Right Column: Premium Custom App (EASY BYZ) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-3xl bg-gradient-to-b from-[#051119] to-[#03090e] border-2 border-[#00f0ff]/50 p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-md shadow-[#00f0ff]/10"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#00f0ff]/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#00f0ff]/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#00f0ff]/20 border border-[#00f0ff]/50 flex items-center justify-center text-[#00f0ff] shrink-0 shadow-sm shadow-[#00f0ff]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold text-[#00f0ff] uppercase tracking-wider block">
                    100% Exclusivo
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-white font-heading tracking-wide">
                    SEU APLICATIVO PREMIUM
                  </h3>
                </div>
              </div>

              <span className="text-[9px] font-mono font-black px-2 py-0.5 rounded-full bg-[#00f0ff] text-black uppercase tracking-wider shadow">
                EASY BYZ
              </span>
            </div>

            {/* List */}
            <div className="space-y-4">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-[#00f0ff]/15 border border-[#00f0ff]/40 text-[10px] font-mono font-bold text-[#00f0ff] flex items-center justify-center shrink-0 mt-0.5">
                    {item.number}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight flex items-center gap-1.5">
                      {item.title}
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                    </h4>
                    <p className="text-[11px] text-[#cbd5e1] leading-relaxed mt-0.5">
                      {item.premium}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer highlighted benefit */}
          <div className="mt-5 pt-3 border-t border-[#00f0ff]/20 text-center">
            <span className="text-[10px] font-mono font-bold text-[#00f0ff] tracking-wide">
              Acelera o seu crescimento com total controle e independência.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
