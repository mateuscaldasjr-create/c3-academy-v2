import React from 'react';
import { DollarSign, TrendingUp, Users, Briefcase } from 'lucide-react';

const pipeline = [
  { stage: 'Prospecção', count: 12, value: 'R$ 120k' },
  { stage: 'Qualificação', count: 5, value: 'R$ 50k' },
  { stage: 'Proposta', count: 3, value: 'R$ 30k' },
  { stage: 'Fechamento', count: 2, value: 'R$ 20k' },
];

export function BusinessManager() {
  return (
    <div className="space-y-8 h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif text-white">Gestão de Negócios</h2>
          <p className="text-white/40 text-sm">Mordomia dos recursos e talentos.</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
            <span className="text-xs text-white/40 uppercase">Meta Mensal</span>
            <span className="font-mono font-bold text-c3-gold">R$ 250.000</span>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Faturamento', value: 'R$ 185.4k', icon: DollarSign, trend: '+12%' },
          { label: 'Novos Leads', value: '42', icon: Users, trend: '+5%' },
          { label: 'Taxa de Conversão', value: '18%', icon: TrendingUp, trend: '-2%' },
          { label: 'Projetos Ativos', value: '8', icon: Briefcase, trend: '0%' },
        ].map((kpi, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-c3-gold/10 text-c3-gold">
                <kpi.icon className="w-5 h-5" />
              </div>
              <span className={kpi.trend.startsWith('+') ? 'text-green-400 text-xs' : 'text-red-400 text-xs'}>
                {kpi.trend}
              </span>
            </div>
            <h3 className="text-2xl font-mono font-bold text-white mb-1">{kpi.value}</h3>
            <p className="text-xs text-white/40 uppercase tracking-wider">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* Sales Pipeline */}
      <div className="glass-panel p-8 rounded-2xl">
        <h3 className="text-lg font-serif text-white mb-6">Pipeline de Vendas</h3>
        <div className="grid grid-cols-4 gap-4">
          {pipeline.map((stage, i) => (
            <div key={i} className="relative">
              <div className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-c3-gold/30 transition-colors h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-white/60 uppercase">{stage.stage}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/40">{stage.count}</span>
                </div>
                <p className="text-xl font-mono text-c3-gold">{stage.value}</p>
                
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
                  <div 
                    className="h-full bg-c3-gold opacity-50" 
                    style={{ width: `${(4 - i) * 25}%` }} 
                  />
                </div>
              </div>
              {i < 3 && (
                <div className="absolute top-1/2 -right-2 w-4 h-[1px] bg-white/10 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
