import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { cn } from '../utils'; // <--- ESTA LINHA FOI CORRIGIDA

const leaderboard = [
  { rank: 1, name: 'Ricardo S.', score: 9850, role: 'CEO', avatar: 'https://picsum.photos/seed/1/100' },
  { rank: 2, name: 'Amanda L.', score: 9200, role: 'CMO', avatar: 'https://picsum.photos/seed/2/100' },
  { rank: 3, name: 'Carlos M.', score: 8900, role: 'CTO', avatar: 'https://picsum.photos/seed/3/100' },
];

export function Community() {
  return (
    <div className="h-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-white mb-2">Hall da Mordomia</h2>
        <p className="text-white/40">Reconhecimento àqueles que multiplicam seus talentos.</p>
      </div>

      <div className="glass-panel rounded-[2.5rem] overflow-hidden border border-white/10">
        <div className="p-8 border-b border-white/5 bg-white/[0.02]">
           <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl text-white">Ranking de Performance</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-c3-gold/10 text-c3-gold text-[10px] font-bold rounded-full uppercase tracking-widest">Global</span>
              </div>
           </div>
        </div>
        
        <div className="divide-y divide-white/5">
          {leaderboard.map((user) => (
            <div key={user.rank} className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <span className="font-mono text-white/40 w-8 text-center">#{user.rank}</span>
                <img src={user.avatar} className="w-10 h-10 rounded-full grayscale opacity-60" />
                <div>
                  <p className="font-medium text-white">{user.name}</p>
                  <p className="text-xs text-white/40">{user.role}</p>
                </div>
              </div>
              <div className="font-mono text-c3-gold font-bold">{user.score} XP</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
