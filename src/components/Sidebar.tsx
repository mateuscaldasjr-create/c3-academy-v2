import React from 'react';
import { LayoutDashboard, Flame, BookOpen, Briefcase, Users, Settings, LogOut, X } from 'lucide-react';
import { cn } from '../utils';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ isOpen, setIsOpen, activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'cave', icon: Flame, label: 'Iniciar Caverna' },
    { id: 'rituals', icon: BookOpen, label: 'Rituais de Fé' },
    { id: 'business', icon: Briefcase, label: 'Gestão de Negócios' },
    { id: 'community', icon: Users, label: 'Comunidade' },
    { id: 'settings', icon: Settings, label: 'Configurações' },
  ];

  return (
    <>
      <div className={cn("fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")} onClick={() => setIsOpen(false)} />
      <aside className={cn("fixed top-0 left-0 z-50 h-full w-64 bg-[#0A0F1D] border-r border-white/5 transition-transform lg:translate-x-0", isOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20"><span className="font-serif text-[#0A0F1D] font-bold text-xl">C3</span></div>
              <div><h1 className="font-serif text-lg font-bold text-white">ACADEMY</h1></div>
            </div>
          </div>
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button key={item.id} onClick={() => { setActiveTab(item.id); setIsOpen(false); }} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all", activeTab === item.id ? "bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20" : "text-white/60 hover:bg-white/5 hover:text-white")}>
                <item.icon className="w-5 h-5" /><span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
