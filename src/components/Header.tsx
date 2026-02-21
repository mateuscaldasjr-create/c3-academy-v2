import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full glass-panel border-b-0 border-x-0 border-t-0 border-b-white/5 bg-[#0A0F1D]/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div>
            <h2 className="text-xl font-serif text-white">
              Bom dia, <span className="text-c3-gold">Ricardo</span>.
            </h2>
            <p className="text-xs text-white/40 font-light tracking-wide">
              Pronto para a Mordomia de hoje?
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Stewardship Score */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-white/40 uppercase tracking-wider">Stewardship Score</span>
              <span className="text-sm font-bold text-c3-gold font-mono">LEVEL 42</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-c3-gold/30 flex items-center justify-center relative">
              <span className="text-xs font-bold text-white">98%</span>
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle 
                  cx="18" cy="18" r="17" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="text-c3-gold"
                  strokeDasharray="106"
                  strokeDashoffset="10" // 98% filled roughly
                />
              </svg>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-white/40 hover:text-white transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0A0F1D]" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-c3-gold to-c3-gold-dim p-[1px]">
              <div className="w-full h-full rounded-full bg-[#0A0F1D] flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/user/100/100" alt="User" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
