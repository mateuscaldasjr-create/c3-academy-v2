import React, { useState } from 'react';
import { CheckCircle2, Flame, Plus, Trophy } from 'lucide-react';
import { cn } from '../utils';

export function FaithRituals() {
  // Estado local para simular o banco de dados enquanto você não cria as tabelas
  const [habits, setHabits] = useState([
    { id: 1, name: 'Oração Matinal', streak: 12, completed: true },
    { id: 2, name: 'Leitura Bíblica', streak: 45, completed: false },
    { id: 3, name: 'Jejum Intermitente', streak: 5, completed: false },
  ]);

  const toggleHabit = (id: number) => {
    setHabits(habits.map(h => 
      h.id === id ? { ...h, completed: !h.completed, streak: !h.completed ? h.streak + 1 : h.streak - 1 } : h
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif text-white">Rituais de Consagração</h2>
          <p className="text-white/40 text-sm">A disciplina é a forma mais alta de adoração.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-c3gold text-c3dark rounded-xl font-bold hover:scale-105 transition-all">
          <Plus size={18} /> NOVO RITUAL
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <div key={habit.id} 
            onClick={() => toggleHabit(habit.id)}
            className={cn(
              "glass-panel p-6 rounded-[2rem] border transition-all cursor-pointer group",
              habit.completed ? "border-c3gold/50 bg-c3gold/5" : "border-white/5 hover:border-white/20"
            )}>
            <div className="flex justify-between items-start mb-6">
              <div className={cn(
                "p-3 rounded-2xl transition-colors",
                habit.completed ? "bg-c3gold text-c3dark" : "bg-white/5 text-white/20"
              )}>
                <Flame size={24} />
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-white">{habit.streak}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Dias</p>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{habit.name}</h3>
            <p className="text-xs text-white/40 mb-4">{habit.completed ? "Concluído hoje" : "Pendente"}</p>
            
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-c3gold transition-all duration-500" style={{ width: habit.completed ? '100%' : '30%' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
