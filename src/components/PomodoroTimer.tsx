import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';
import { cn } from '../utils'; 
import { motion } from 'framer-motion';

export function PomodoroTimer() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [mode, setMode] = useState<'focus' | 'break'>('focus');

  useEffect(() => {
    let interval: any;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'focus' ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = mode === 'focus' ? ((25 * 60 - timeLeft) / (25 * 60)) * 100 : ((5 * 60 - timeLeft) / (5 * 60)) * 100;

  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden h-full flex flex-col justify-between">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="flex justify-between items-start relative z-10">
        <div>
          <h3 className="text-[#D4AF37] font-serif text-lg font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            O Coração da Caverna
          </h3>
          <p className="text-white/40 text-xs mt-1">Deep Work Session</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-8 relative z-10">
        <div className="relative">
          <svg className="w-48 h-48 -rotate-90">
            <circle cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/5"/>
            <motion.circle cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="4" className="text-[#D4AF37]" strokeDasharray="553" strokeDashoffset={553 - (553 * progress) / 100} animate={{ strokeDashoffset: 553 - (553 * progress) / 100 }} transition={{ duration: 0.5 }} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-mono font-bold text-white tracking-tighter">{formatTime(timeLeft)}</span>
            <span className="text-xs text-white/40 uppercase tracking-widest mt-2">{isActive ? 'Em Progresso' : 'Pausado'}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 relative z-10">
        <button onClick={toggleTimer} className="flex-1 bg-[#D4AF37] text-[#0A0F1D] font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
          {isActive ? <Pause size={16} /> : <Play size={16} />} {isActive ? 'Pausar' : 'Entrar em Profundidade'}
        </button>
        <button onClick={resetTimer} className="p-3 rounded-lg border border-white/10 text-white/40 hover:text-white transition-colors"><RefreshCw size={20} /></button>
      </div>
    </div>
  );
}
