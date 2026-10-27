import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  CheckCircle2, 
  Globe, 
  UserCheck, 
  ExternalLink,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { FEATURED_RESOURCES } from '../data/content';
import { FeaturedLink } from '../types';

export const FeaturedLinks: React.FC = () => {
  const getIcon = (type?: string) => {
    switch (type) {
      case 'ebook':
        return <BookOpen className="w-5 h-5 text-[#00f0ff]" />;
      case 'consultancy':
        return <CheckCircle2 className="w-5 h-5 text-[#34d399]" />;
      case 'site':
        return <Globe className="w-5 h-5 text-[#00ddff]" />;
      case 'founder':
        return <UserCheck className="w-5 h-5 text-[#c084fc]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#00f0ff]" />;
    }
  };

  return (
    <section className="mb-7 px-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading">
          DESTAQUES & RECURSOS:
        </h2>
      </div>

      <div className="space-y-3">
        {FEATURED_RESOURCES.map((item: FeaturedLink, index: number) => {
          const isPrimary = item.isPrimary;

          return (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.35 }}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.985 }}
              className={`block w-full rounded-2xl p-4 transition-all duration-300 relative overflow-hidden group shadow-md backdrop-blur-md ${
                isPrimary
                  ? 'bg-[#0a0a0a]/90 hover:bg-[#111111]/90 border border-[#00f0ff]/50 hover:border-[#00f0ff] glow-cyan-sm'
                  : 'bg-[#0a0a0a]/90 hover:bg-[#111111]/90 border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Subtle hover backlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/5 via-transparent to-[#00ddff]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-center gap-3.5 relative z-10">
                {/* Icon box */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                  isPrimary 
                    ? 'bg-white/[0.05] border border-[#00f0ff]/40 shadow-inner'
                    : 'bg-white/[0.05] border border-white/10'
                }`}>
                  {getIcon(item.type)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <h3 className="text-sm font-bold text-white tracking-wide font-heading group-hover:text-[#00f0ff] transition-colors truncate">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className={`text-[9px] font-mono font-semibold uppercase px-2 py-0.5 rounded-full ${
                        isPrimary
                          ? 'bg-[#00f0ff] text-black font-bold'
                          : item.type === 'consultancy'
                            ? 'bg-[#34d399]/15 text-[#34d399] border border-[#34d399]/30'
                            : 'bg-white/[0.05] text-[#00ddff] border border-[#00ddff]/30'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#e2e8f0] leading-relaxed line-clamp-2 mt-0.5 group-hover:text-white transition-colors">
                    {item.subtitle}
                  </p>
                </div>

                {/* Action arrow */}
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/5 group-hover:bg-[#00f0ff] group-hover:text-black flex items-center justify-center text-[#9ca3af] transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
