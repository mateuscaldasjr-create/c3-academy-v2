import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const rituals = [
  { id: '1', label: 'Oração Matinal', time: '06:00', completed: true },
  { id: '2', label: 'Leitura Bíblica', time: '06:30', completed: true },
  { id: '3', label: 'Exercício Físico', time: '07:00', completed: false },
  { id: '4', label: 'Jejum (Até 12h)', time: '12:00', completed: false },
];

export function RitualsTracker() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full">
      <div className="mb-6">
        <h3 className="text-white font-serif text-lg font-semibold">Rituais de Consagração</h3>
        <p className="text-white/40 text-xs mt-1">Checklist Diário</p>
      </div>

      <div className="space-y-4">
        {rituals.map((ritual) => (
          <div key={ritual.id} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-6 h-6 rounded border flex items-center justify-center transition-all cursor-pointer",
                ritual.completed 
                  ? "bg-c3-gold border-c3-gold text-[#0A0F1D]" 
                  : "border-white/20 bg-transparent group-hover:border-c3-gold/50"
              )}>
                {ritual.completed && <Check className="w-4 h-4" />}
              </div>
              <div>
                <p className={cn(
                  "text-sm font-medium",
                  ritual.completed ? "text-white/40" : "text-white/90"
                )}>{ritual.label}</p>
                <p className="text-[10px] text-white/30 font-mono">{ritual.time}</p>
              </div>
            </div>
            <div className={cn(
              "h-px flex-1 mx-4 transition-colors",
              ritual.completed ? "bg-c3-gold/20" : "bg-white/5"
            )} />
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/5">
        <div className="flex justify-between items-center text-xs text-white/40">
          <span>Progresso Diário</span>
          <span>50%</span>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
          <div className="h-full bg-c3-gold w-1/2 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
        </div>
      </div>
    </div>
  );
}
