import React from 'react';
import { Play, Pause, SkipForward, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion'; 
import { PomodoroTimer } from './PomodoroTimer';

export function CaveMode() {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden rounded-3xl glass-panel p-8">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D] to-[#05080F] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-12">
        <div className="scale-125">
          <PomodoroTimer />
        </div>

        <div className="text-center space-y-4 max-w-lg">
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-serif text-2xl text-white/90 leading-relaxed"
          >
            "Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens."
          </motion.blockquote>
          <motion.cite 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="block text-[#D4AF37] font-mono text-sm tracking-widest uppercase"
          >
            Colossenses 3:23
          </motion.cite>
        </div>

        <div className="w-full bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-6">
          <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
            <div className="flex gap-1 items-end h-6">
              {[1,2,3,4].map(i => (
                <motion.div 
                  key={i}
                  className="w-1 bg-[#D4AF37] rounded-full"
                  animate={{ height: [10, 24, 10] }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-white font-medium text-sm">Deep Focus Instrumental</h4>
            <p className="text-white/40 text-xs">Worship & Flow State</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-white/60 hover:text-white transition-colors"><Volume2 className="w-5 h-5" /></button>
            <button className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"><Play className="w-5 h-5 fill-current" /></button>
            <button className="p-2 text-white/60 hover:text-white transition-colors"><SkipForward className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
