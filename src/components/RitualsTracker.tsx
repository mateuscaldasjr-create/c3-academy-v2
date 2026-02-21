import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../utils';

const rituals = [
  { id: '1', label: 'Oração Matinal', time: '06:00', completed: true },
  { id: '2', label: 'Leitura Bíblica', time: '06:30', completed: true },
];

export function RitualsTracker() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full">
      <div className="mb-6"><h3 className="text-white font-serif text-lg font-semibold">Rituais</h3></div>
      <div className="space-y-4">
        {rituals.map((ritual) => (
          <div key={ritual.id} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <div className={cn("w-6 h-6 rounded border flex items-center justify-center", ritual.completed ? "bg-[#D4AF37] border-[#D4AF37] text-[#0A0F1D]" : "border-white/20")}>
                {ritual.completed && <Check size={14} />}
              </div>
              <p className="text-sm text-white/90">{ritual.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
