import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Seg', hours: 4.5 },
  { name: 'Ter', hours: 6.2 },
  { name: 'Qua', hours: 5.8 },
  { name: 'Qui', hours: 7.5 },
  { name: 'Sex', hours: 3.5 },
  { name: 'Sáb', hours: 2.0 },
  { name: 'Dom', hours: 1.0 },
];

export function StatsChart() {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h3 className="text-white font-serif text-lg font-semibold">Foco Semanal</h3>
          <p className="text-white/40 text-xs mt-1">Horas de Deep Work</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-mono font-bold text-c3-gold">30.5h</p>
          <p className="text-[10px] text-green-400">+12% vs semana anterior</p>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke="#ffffff40" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ 
                backgroundColor: '#0A0F1D', 
                borderColor: 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: '12px'
              }}
            />
            <Bar dataKey="hours" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.hours > 6 ? '#D4AF37' : 'rgba(255, 255, 255, 0.2)'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
