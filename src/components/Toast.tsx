import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

export function Toast({ message, isVisible, onClose }: { message: string, isVisible: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-10 left-1/2 z-[100] bg-[#D4AF37] text-[#0A0F1D] px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-black border border-white/20 min-w-[300px]"
        >
          <CheckCircle2 size={24} />
          <span className="flex-1">{message}</span>
          <button onClick={onClose} className="opacity-50 hover:opacity-100 transition-opacity"><X size={20} /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
