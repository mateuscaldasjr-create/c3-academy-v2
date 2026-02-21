import React from 'react';
import { Calendar, CheckCircle2, Flame, Book } from 'lucide-react';
import { cn } from '../utils'; // <--- ESTA LINHA FOI CORRIGIDA

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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {habits.map((habit) => (
          <div key={habit.id} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-c3-gold/20 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-white font-medium mb-1">{habit.name}</h4>
                <div className="flex items-center gap-2">
                  <Flame className="w-3 h-3 text-c3-gold" />
                  <span className="text-[10px] text-c3-gold font-mono uppercase tracking-tighter">{habit.streak} dias de streak</span>
                </div>
              </div>
              <button className="p-2 bg-c3-gold/10 text-c3-gold rounded-lg hover:bg-c3-gold hover:text-[#0A0F1D] transition-colors">
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
    </div>
  );
}
