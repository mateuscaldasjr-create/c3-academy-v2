import React from 'react';
import { CheckCircle2, Circle, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  id: string;
  title: string;
  tag: 'Business' | 'Faith';
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
}

const tasks: Task[] = [
  { id: '1', title: 'Revisão Financeira Q3', tag: 'Business', completed: false, priority: 'High' },
  { id: '2', title: 'Leitura de Provérbios 18', tag: 'Faith', completed: true, priority: 'High' },
  { id: '3', title: 'Briefing Campanha Black Friday', tag: 'Business', completed: false, priority: 'Medium' },
  { id: '4', title: 'Mentoria com Equipe de Vendas', tag: 'Business', completed: false, priority: 'Medium' },
  { id: '5', title: 'Oração pelas Famílias', tag: 'Faith', completed: false, priority: 'Low' },
];

export function TaskList() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-serif text-lg font-semibold">Ordens do Dia</h3>
          <p className="text-white/40 text-xs mt-1">Priorizado por IA</p>
        </div>
        <button className="text-xs text-c3-gold hover:underline">Ver todas</button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className={cn(
              "group flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer",
              task.completed 
                ? "bg-white/[0.02] border-white/5 opacity-50" 
                : "bg-white/5 border-white/10 hover:border-c3-gold/30 hover:bg-white/[0.07]"
            )}
          >
            <button className={cn(
              "mt-0.5 transition-colors",
              task.completed ? "text-c3-gold" : "text-white/20 group-hover:text-c3-gold/50"
            )}>
              {task.completed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
            </button>
            
            <div className="flex-1">
              <p className={cn(
                "text-sm font-medium transition-all",
                task.completed ? "text-white/40 line-through" : "text-white/90"
              )}>
                {task.title}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className={cn(
                  "text-[10px] px-2 py-0.5 rounded-full border",
                  task.tag === 'Business' 
                    ? "border-blue-500/30 text-blue-400 bg-blue-500/10" 
                    : "border-purple-500/30 text-purple-400 bg-purple-500/10"
                )}>
                  {task.tag}
                </span>
                {task.priority === 'High' && (
                  <span className="text-[10px] text-red-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    Alta Prioridade
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
