import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Scissors, 
  HeartHandshake, 
  Feather, 
  Utensils, 
  Cake, 
  Home, 
  Compass, 
  ExternalLink,
  ChevronRight,
  Info,
  Layers,
  LayoutGrid
} from 'lucide-react';
import { SimulationApp, AppCategory } from '../types';
import { SIMULATION_APPS } from '../data/content';

interface AppSimulatorSectionProps {
  onSelectApp: (app: SimulationApp) => void;
}

export const AppSimulatorSection: React.FC<AppSimulatorSectionProps> = ({ onSelectApp }) => {
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('gastronomy');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  const filteredApps = selectedCategory === 'all'
    ? SIMULATION_APPS
    : SIMULATION_APPS.filter((app) => {
        if (selectedCategory === 'beauty') return app.category === 'beauty';
        if (selectedCategory === 'gastronomy') return app.category === 'gastronomy';
        if (selectedCategory === 'realestate_travel') return app.category === 'realestate_travel';
        return true;
      });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Feather': return <Feather className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Cake': return <Cake className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="simuladores-section" className="mb-7 px-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading">
            COMO POSSO TE AJUDAR HOJE:
          </h2>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center bg-white/[0.05] border border-white/10 rounded-lg p-0.5 text-xs text-[#9ca3af]">
          <button
            onClick={() => setViewMode('carousel')}
            className={`p-1.5 rounded transition-colors cursor-pointer ${viewMode === 'carousel' ? 'bg-white/[0.1] text-[#00f0ff]' : 'hover:text-white'}`}
            title="Visualização em Carrossel"
          >
            <Layers className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded transition-colors cursor-pointer ${viewMode === 'grid' ? 'bg-white/[0.1] text-[#00f0ff]' : 'hover:text-white'}`}
            title="Visualização em Grade"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <p className="text-xs text-[#9ca3af] mb-3.5">
        Toque nos simuladores abaixo para testar na prática a experiência dos nossos apps:
      </p>

      {/* Category Pills - 2 Rows Grid / Wrap */}
      <div className="grid grid-cols-2 gap-2 mb-4 text-xs font-medium">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`py-2 px-3 rounded-xl transition-all flex items-center justify-center text-center cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-[#00f0ff] text-black font-bold shadow-md glow-cyan-sm'
              : 'bg-white/[0.05] text-[#9ca3af] border border-white/5 hover:border-white/10 hover:text-white'
          }`}
        >
          Todos ({SIMULATION_APPS.length})
        </button>

        <button
          onClick={() => setSelectedCategory('beauty')}
          className={`py-2 px-3 rounded-xl transition-all flex items-center justify-center text-center cursor-pointer ${
            selectedCategory === 'beauty'
              ? 'bg-[#00f0ff] text-black font-bold shadow-md glow-cyan-sm'
              : 'bg-white/[0.05] text-[#9ca3af] border border-white/5 hover:border-white/10 hover:text-white'
          }`}
        >
          Beleza & Estética (4)
        </button>

        <button
          onClick={() => setSelectedCategory('gastronomy')}
          className={`py-2 px-3 rounded-xl transition-all flex items-center justify-center text-center cursor-pointer ${
            selectedCategory === 'gastronomy'
              ? 'bg-[#00f0ff] text-black font-bold shadow-md glow-cyan-sm'
              : 'bg-white/[0.05] text-[#9ca3af] border border-white/5 hover:border-white/10 hover:text-white'
          }`}
        >
          Cardápios Digitais (2)
        </button>

        <button
          onClick={() => setSelectedCategory('realestate_travel')}
          className={`py-2 px-3 rounded-xl transition-all flex items-center justify-center text-center cursor-pointer ${
            selectedCategory === 'realestate_travel'
              ? 'bg-[#00f0ff] text-black font-bold shadow-md glow-cyan-sm'
              : 'bg-white/[0.05] text-[#9ca3af] border border-white/5 hover:border-white/10 hover:text-white'
          }`}
        >
          Locação & Turismo (2)
        </button>
      </div>

      {/* Grid of Apps (always displays all filtered apps with responsive layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filteredApps.map((app) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="rounded-2xl bg-[#0a0a0a]/90 hover:bg-[#111111]/90 border border-white/10 hover:border-[#00f0ff]/50 p-4 flex flex-col justify-between shadow-xl relative group transition-all backdrop-blur-md"
          >
            <div>
              {/* Card Top: Icon & Full App Name */}
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-inner shrink-0"
                  style={{ backgroundColor: `${app.accentColor}18`, color: app.accentColor, borderColor: `${app.accentColor}35`, borderWidth: 1 }}
                >
                  {getIconComponent(app.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-base text-white leading-tight font-heading group-hover:text-[#00f0ff] transition-colors">
                    {app.name}
                  </h3>
                  <span className="text-[10px] font-mono text-[#9ca3af] font-medium block">{app.categoryLabel}</span>
                </div>
              </div>

              {/* Tag placed on its own line below */}
              <div className="mb-2.5">
                <span 
                  className="inline-block text-[9px] font-mono font-bold px-2 py-0.5 rounded-md uppercase tracking-wider"
                  style={{ backgroundColor: `${app.accentColor}18`, color: app.accentColor, border: `1px solid ${app.accentColor}35` }}
                >
                  {app.tag}
                </span>
              </div>

              <p className="text-xs text-[#00ddff] font-semibold mt-1 leading-snug">
                {app.idealFor}
              </p>
              <p className="text-xs text-[#9ca3af] mt-1.5 leading-relaxed">
                {app.shortDesc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
              <button
                onClick={() => onSelectApp(app)}
                className="flex-1 text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-[#e2e8f0] border border-white/5 py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Info className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>Detalhes</span>
              </button>

              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-xs font-bold bg-[#00f0ff] hover:bg-[#00ddff] text-black py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all glow-cyan-sm"
              >
                <span>Testar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
