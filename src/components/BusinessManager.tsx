import React from 'react';
import { DollarSign, TrendingUp, Users, Target } from 'lucide-react';

export function BusinessManager() {
  const stats = [
    { label: 'Faturamento Real', value: 'R$ 185.400', color: 'text-green-400' },
    { label: 'Projeção', value: 'R$ 250.000', color: 'text-c3gold' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="glass-panel p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><DollarSign size={80} /></div>
            <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">{s.label}</p>
            <p className={`text-4xl font-black ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="glass-panel p-8 rounded-[2.5rem] border border-white/5">
        <h3 className="text-xl font-serif text-white mb-8 flex items-center gap-3">
          <Target className="text-c3gold" /> Funil de Conversão
        </h3>
        <div className="space-y-6">
          {['Prospecção', 'Qualificação', 'Proposta', 'Fechamento'].map((step, i) => (
            <div key={i} className="relative">
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-white/60">{step}</span>
                <span className="text-c3gold font-mono">R$ {100 - (i * 20)}k</span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-c3gold/20 to-c3gold transition-all duration-1000" 
                  style={{ width: `${100 - (i * 20)}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
