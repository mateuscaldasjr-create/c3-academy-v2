import React from 'react';
import { Calendar, CheckCircle2, Flame, Book } from 'lucide-react';
import { cn } from '@/lib/utils';

const habits = [
  { id: 1, name: 'Oração (30min)', streak: 12, history: [true, true, true, true, true, false, true] },
  { id: 2, name: 'Leitura Bíblica', streak: 45, history: [true, true, true, true, true, true, true] },
  { id: 3, name: 'Jejum Intermitente', streak: 5, history: [false, true, true, true, true, true, false] },
  { id: 4, name: 'Exercício Físico', streak: 8, history: [true, false, true, true, true, true, true] },
];

const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export function FaithRituals() {
  return (
    <div className="space-y-6 h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif text-white">Rituais de Fé</h2>
          <p className="text-white/40 text-sm">Consistência gera autoridade espiritual.</p>
        </div>
        <button className="px-4 py-2 bg-c3-gold text-[#0A0F1D] rounded-lg font-medium hover:bg-c3-gold-dim transition-colors">
          Novo Registro
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {habits.map((habit) => (
          <div key={habit.id} className="glass-panel p-6 rounded-2xl hover:border-c3-gold/30 transition-colors group">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-c3-gold group-hover:bg-c3-gold/10 transition-colors">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">{habit.name}</h3>
                  <p className="text-xs text-white/40 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-500" />
                    {habit.streak} dias seguidos
                  </p>
                </div>
              </div>
              <button className="text-white/20 hover:text-white transition-colors">
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-between items-end gap-2">
              {habit.history.map((completed, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-1">
                  <div className={cn(
                    "w-full aspect-square rounded-md transition-all",
                    completed 
                      ? "bg-c3-gold shadow-[0_0_10px_rgba(212,175,55,0.2)]" 
                      : "bg-white/5 border border-white/5"
                  )} />
                  <span className="text-[10px] text-white/20 font-mono">{days[i]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Devotional */}
      <div className="glass-panel p-8 rounded-2xl mt-6">
        <div className="flex items-center gap-4 mb-6">
          <Book className="w-6 h-6 text-c3-gold" />
          <h3 className="text-lg font-serif text-white">Leitura da Semana: Neemias</h3>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-white/60 leading-relaxed">
            "A reconstrução dos muros de Jerusalém nos ensina sobre foco, liderança e resistência à oposição. 
            Assim como Neemias, devemos estar com uma mão na obra e outra na espada (oração e trabalho)."
          </p>
        </div>
      </div>
    </div>
  );
}
