import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Flame, 
  BookOpen, 
  Briefcase, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ isOpen, setIsOpen, activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'cave-mode', icon: Flame, label: 'Iniciar Caverna' },
    { id: 'rituals', icon: BookOpen, label: 'Rituais de Fé' },
    { id: 'business', icon: Briefcase, label: 'Gestão de Negócios' },
    { id: 'community', icon: Users, label: 'Comunidade' },
    { id: 'settings', icon: Settings, label: 'Configurações' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-[#0A0F1D] border-r border-white/5 transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-c3-gold flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <span className="font-serif text-[#0A0F1D] font-bold text-xl">C3</span>
              </div>
              <div>
                <h1 className="font-serif text-lg font-bold tracking-wider text-white">ACADEMY</h1>
                <p className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Modo Caverna</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden",
                  activeTab === item.id 
                    ? "bg-c3-gold/10 text-c3-gold border border-c3-gold/20" 
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("w-5 h-5 transition-colors", activeTab === item.id ? "text-c3-gold" : "text-white/40 group-hover:text-white")} />
                <span className="font-medium text-sm relative z-10">{item.label}</span>
                
                {/* Active Indicator */}
                {activeTab === item.id && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-c3-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                )}
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="pt-6 border-t border-white/5">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5 group">
              <LogOut className="w-5 h-5 group-hover:text-red-400 transition-colors" />
              <span className="font-medium text-sm">Sair da Caverna</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
