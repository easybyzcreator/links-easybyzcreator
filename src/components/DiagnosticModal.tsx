import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Check, 
  ExternalLink, 
  MessageSquare,
  Scissors,
  Utensils,
  Home,
  Compass,
  Briefcase
} from 'lucide-react';
import { SIMULATION_APPS, BRAND_INFO } from '../data/content';
import { SimulationApp } from '../types';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectApp: (app: SimulationApp) => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  onSelectApp,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedNiche, setSelectedNiche] = useState<string>('');
  const [selectedGoal, setSelectedGoal] = useState<string>('');

  if (!isOpen) return null;

  const niches = [
    {
      id: 'beauty',
      label: 'Beleza & Estética',
      desc: 'Salão, barbearia, manicure ou depilação',
      icon: Scissors,
      recommendedAppId: 'easy-beauty',
    },
    {
      id: 'gastronomy',
      label: 'Gastronomia & Eventos',
      desc: 'Marmitas, bolos decorados ou confeitaria',
      icon: Utensils,
      recommendedAppId: 'easy-plate-menu',
    },
    {
      id: 'rentals',
      label: 'Locação de Temporada',
      desc: 'Chácaras, sítios, casas e imóveis',
      icon: Home,
      recommendedAppId: 'easy-booking',
    },
    {
      id: 'travel',
      label: 'Turismo & Viagens',
      desc: 'Agências de viagem, guias e roteiros',
      icon: Compass,
      recommendedAppId: 'easy-travel-guide',
    },
    {
      id: 'custom',
      label: 'Outro Modelo de Negócio',
      desc: 'Soluções e sistemas sob medida',
      icon: Briefcase,
      recommendedAppId: 'consultancy',
    },
  ];

  const goals = [
    {
      id: 'stop_manual',
      label: 'Acabar com o atendimento manual repetitivo',
      desc: 'Quero agendamento e pedidos automáticos 24 horas por dia.',
    },
    {
      id: 'brand_elevation',
      label: 'Valorizar a minha própria marca',
      desc: 'Sair de apps concorrentes e ter meu próprio aplicativo exclusivo.',
    },
    {
      id: 'no_commissions',
      label: 'Parar de pagar comissões por agendamento',
      desc: 'Quero controle total dos meus lucros e clientes.',
    },
  ];

  const handleNicheSelect = (nicheId: string) => {
    setSelectedNiche(nicheId);
    setStep(2);
  };

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
    setStep(3);
  };

  const resetQuiz = () => {
    setStep(1);
    setSelectedNiche('');
    setSelectedGoal('');
  };

  // Find recommendation
  const recommendedApp = SIMULATION_APPS.find((app) => {
    if (selectedNiche === 'beauty') return app.id === 'easy-beauty';
    if (selectedNiche === 'gastronomy') return app.id === 'easy-plate-menu';
    if (selectedNiche === 'rentals') return app.id === 'easy-booking';
    if (selectedNiche === 'travel') return app.id === 'easy-travel-guide';
    return app.id === 'easy-beauty';
  });

  const whatsappMessage = encodeURIComponent(
    `Olá! Fiz o diagnóstico no Link da Bio da Easy Byz Creator para meu negócio no nicho *${
      niches.find((n) => n.id === selectedNiche)?.label || 'Geral'
    }* e gostaria de agendar uma consultoria gratuita.`
  );

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
          className="relative w-full max-w-md rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 shadow-2xl overflow-hidden z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.05] text-[#9ca3af] hover:text-white hover:bg-white/[0.1] border border-white/5 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Progress bar */}
          <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden mb-5">
            <div
              className="bg-[#00f0ff] h-full transition-all duration-300 rounded-full"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#00f0ff] uppercase">
                Passo 1 de 2
              </span>
              <h3 className="text-lg font-bold text-white font-heading mt-0.5 mb-1">
                Qual é o segmento da sua empresa?
              </h3>
              <p className="text-xs text-[#9ca3af] mb-4">
                Selecione a opção que melhor descreve sua rotina:
              </p>

              <div className="space-y-2">
                {niches.map((niche) => {
                  const Icon = niche.icon;
                  return (
                    <button
                      key={niche.id}
                      onClick={() => handleNicheSelect(niche.id)}
                      className="w-full p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00f0ff]/50 text-left flex items-center gap-3 transition-all group cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#030303] border border-white/5 flex items-center justify-center text-[#00f0ff] group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                          {niche.label}
                        </h4>
                        <p className="text-[10px] text-[#9ca3af] truncate">
                          {niche.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#9ca3af] group-hover:text-[#00f0ff] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#00f0ff] uppercase">
                Passo 2 de 2
              </span>
              <h3 className="text-lg font-bold text-white font-heading mt-0.5 mb-1">
                Qual seu maior objetivo ou obstáculo atual?
              </h3>
              <p className="text-xs text-[#9ca3af] mb-4">
                Queremos apontar a automação exata para resolver isso:
              </p>

              <div className="space-y-2.5">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => handleGoalSelect(goal.id)}
                    className="w-full p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00f0ff]/50 text-left transition-all group cursor-pointer"
                  >
                    <h4 className="text-xs font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {goal.label}
                    </h4>
                    <p className="text-[10px] text-[#9ca3af] mt-0.5">
                      {goal.desc}
                    </p>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="mt-4 text-xs text-[#9ca3af] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
              >
                ← Voltar
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#00f0ff]/15 border border-[#00f0ff]/40 text-[#00f0ff] flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-[10px] font-mono font-bold tracking-widest text-[#00f0ff] uppercase">
                Diagnóstico Concluído!
              </span>
              <h3 className="text-lg font-bold text-white font-heading mt-0.5 mb-1">
                Solução Recomendada para Você:
              </h3>

              {recommendedApp ? (
                <div className="mt-3 p-4 rounded-2xl bg-[#030303] border border-[#00f0ff]/40 text-left mb-4 shadow-inner">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-bold text-sm text-[#00f0ff] font-heading">
                      {recommendedApp.name}
                    </h4>
                    <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/[0.05] text-[#00ddff] border border-[#00ddff]/30">
                      {recommendedApp.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#e2e8f0] leading-snug">
                    {recommendedApp.idealFor}
                  </p>
                  <p className="text-[11px] text-[#9ca3af] mt-2">
                    {recommendedApp.shortDesc}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-white/5 flex gap-2">
                    <a
                      href={recommendedApp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-[#00f0ff] hover:bg-[#00ddff] text-black font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                    >
                      <span>Abrir Simulador</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    
                    <button
                      onClick={() => {
                        onClose();
                        onSelectApp(recommendedApp);
                      }}
                      className="py-2 px-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-3 p-4 rounded-2xl bg-[#030303] border border-[#00f0ff]/40 text-left mb-4">
                  <h4 className="font-bold text-sm text-[#00f0ff] font-heading">
                    Sistema Customizado sob Medida
                  </h4>
                  <p className="text-xs text-[#9ca3af] mt-1">
                    Nossa equipe desenha um aplicativo personalizado exatamente para o fluxo exclusivo do seu negócio.
                  </p>
                </div>
              )}

              {/* Consultancy WhatsApp CTA */}
              <div className="space-y-2">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappRaw}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#10b981] to-[#34d399] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com Especialista no WhatsApp</span>
                </a>

                <a
                  href={BRAND_INFO.consultancyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Preencher Formulário de Consultoria</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={resetQuiz}
                  className="mt-2 text-xs text-[#9ca3af] hover:text-white flex items-center justify-center gap-1 mx-auto transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Refazer Teste</span>
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
