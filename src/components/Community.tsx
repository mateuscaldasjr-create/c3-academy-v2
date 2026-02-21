import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const leaderboard = [
  { rank: 1, name: 'Ricardo S.', score: 9850, role: 'CEO', avatar: 'https://picsum.photos/seed/1/100' },
  { rank: 2, name: 'Amanda L.', score: 9200, role: 'CMO', avatar: 'https://picsum.photos/seed/2/100' },
  { rank: 3, name: 'Carlos M.', score: 8900, role: 'CTO', avatar: 'https://picsum.photos/seed/3/100' },
  { rank: 4, name: 'Beatriz F.', score: 8500, role: 'Sales', avatar: 'https://picsum.photos/seed/4/100' },
  { rank: 5, name: 'João P.', score: 8100, role: 'Dev', avatar: 'https://picsum.photos/seed/5/100' },
];

export function Community() {
  return (
    <div className="h-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-white mb-2">Hall da Mordomia</h2>
        <p className="text-white/40">Reconhecimento àqueles que multiplicam seus talentos.</p>
      </div>

      <div className="glass-panel rounded-3xl overflow-hidden">
        {/* Top 3 Podium */}
        <div className="bg-gradient-to-b from-c3-gold/10 to-transparent p-8 border-b border-white/5">
          <div className="flex justify-center items-end gap-8">
            {/* 2nd Place */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-white/20 p-1">
                  <img src={leaderboard[1].avatar} className="w-full h-full rounded-full object-cover grayscale" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0A0F1D] border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white/60">
                  #2
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold text-white">{leaderboard[1].name}</p>
                <p className="text-xs text-white/40">{leaderboard[1].score} XP</p>
              </div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center gap-4 -mt-8">
              <div className="relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-c3-gold animate-bounce">
                  <Trophy className="w-8 h-8 fill-current" />
                </div>
                <div className="w-28 h-28 rounded-full border-4 border-c3-gold p-1 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  <img src={leaderboard[0].avatar} className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-c3-gold px-4 py-1 rounded-full text-xs font-bold text-[#0A0F1D]">
                  #1
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold text-xl text-c3-gold">{leaderboard[0].name}</p>
                <p className="text-sm text-white/60">{leaderboard[0].score} XP</p>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-white/20 p-1">
                  <img src={leaderboard[2].avatar} className="w-full h-full rounded-full object-cover grayscale" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0A0F1D] border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white/60">
                  #3
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold text-white">{leaderboard[2].name}</p>
                <p className="text-xs text-white/40">{leaderboard[2].score} XP</p>
              </div>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-white/5">
          {leaderboard.slice(3).map((user) => (
            <div key={user.rank} className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <span className="font-mono text-white/40 w-8 text-center">#{user.rank}</span>
                <img src={user.avatar} className="w-10 h-10 rounded-full grayscale opacity-60" />
                <div>
                  <p className="font-medium text-white">{user.name}</p>
                  <p className="text-xs text-white/40">{user.role}</p>
                </div>
              </div>
              <div className="font-mono text-c3-gold/60">{user.score} XP</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
