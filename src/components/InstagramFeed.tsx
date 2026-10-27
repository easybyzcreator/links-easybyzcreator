import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, Send, Bookmark, ExternalLink, Sparkles } from 'lucide-react';
import { BRAND_INFO, INSTAGRAM_POSTS } from '../data/content';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="mb-7 px-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-md">
            <Instagram className="w-3 h-3 text-white" />
          </div>
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-white font-heading">
            EASY BYZ NO INSTAGRAM
          </h2>
        </div>

        <a
          href={BRAND_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[10px] font-mono font-semibold text-[#00f0ff] hover:underline"
        >
          <span>{BRAND_INFO.instagramHandle}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Instagram Posts Carousel Container (Inspired by Reference Design) */}
      <div className="p-3.5 rounded-3xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl backdrop-blur-md">
        <div className="flex gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-1 snap-x snap-mandatory pr-4">
          {INSTAGRAM_POSTS.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="w-[44%] sm:w-[46%] min-w-[138px] sm:min-w-[170px] max-w-[185px] shrink-0 snap-start rounded-2xl bg-[#030303] border border-white/10 hover:border-[#00f0ff]/50 overflow-hidden shadow-lg group flex flex-col justify-between transition-all"
            >
              {/* Post Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Instagram badge */}
                <div className="absolute top-2 left-2">
                  <div className="w-6 h-6 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow">
                    <Instagram className="w-3.5 h-3.5 text-[#00f0ff]" />
                  </div>
                </div>

                {/* Overlay Title */}
                <div className="absolute bottom-2 left-2 right-2 text-left">
                  <h4 className="text-[11px] font-bold text-white font-heading leading-tight line-clamp-2 drop-shadow">
                    {post.title}
                  </h4>
                </div>
              </div>

              {/* Interaction Bar (Like, Comment, Share, Bookmark) */}
              <div className="p-2.5 flex items-center justify-between text-[#9ca3af] bg-[#0a0a0a]">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5 text-[10px] font-mono group-hover:text-red-400 transition-colors">
                    <Heart className="w-3.5 h-3.5 group-hover:fill-red-500" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] font-mono">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments}</span>
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Send className="w-3 h-3 hover:text-white transition-colors" />
                  <Bookmark className="w-3 h-3 hover:text-white transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to follow on Instagram */}
        <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
          <p className="text-[11px] text-[#9ca3af]">
            Dicas diárias de automação e tecnologia
          </p>
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-[#00f0ff] hover:text-[#00ddff] flex items-center gap-1 font-mono transition-colors"
          >
            <span>Seguir no Insta</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
