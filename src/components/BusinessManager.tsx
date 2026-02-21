import React from 'react';
import { DollarSign, TrendingUp, Users, Briefcase } from 'lucide-react';

export function BusinessManager() {
  const kpis = [
    { label: 'Faturamento', value: 'R$ 45.200', icon: DollarSign },
    { label: 'Margem', value: '32%', icon: TrendingUp },
    { label: 'LTV', value: 'R$ 1.200', icon: Users },
    { label: 'CAC', value: 'R$ 150', icon: Briefcase },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5">
            <kpi.icon className="text-[#D4AF37] mb-4" size={24} />
            <p className="text-2xl font-bold text-white">{kpi.value}</p>
            <p className="text-[10px] text-white/40 uppercase tracking-widest">{kpi.label}</p>
          </div>
        ))}
      </div>
      <div className="glass-panel p-8 rounded-[2rem] border border-white/10">
        <h3 className="text-lg font-serif mb-6">Pipeline de Vendas</h3>
        <div className="h-32 flex items-end gap-2">
          {[60, 80, 45, 90, 100].map((h, i) => (
            <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#D4AF37]/20 border-t-2 border-[#D4AF37] rounded-t-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
