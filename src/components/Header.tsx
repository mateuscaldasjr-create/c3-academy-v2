import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="glass-panel border-b-white/5 bg-[#0A0F1D]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-2 text-white/60 hover:text-white">
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <h2 className="text-xl font-serif text-white">Bom dia, <span className="text-[#D4AF37]">Steward</span></h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] text-[#D4AF37] font-bold">
          SCORE: 98%
        </div>
        <button className="text-white/40 hover:text-white"><Bell size={20} /></button>
        <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0A0F1D] font-bold text-xs">RS</div>
      </div>
    </header>
  );
}
