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
          className="fixed bottom-10 left-1/2 z-[100] bg-c3gold text-c3dark px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-bold border border-white/20"
        >
          <CheckCircle2 size={20} />
          <span>{message}</span>
          <button onClick={onClose} className="ml-4 opacity-50 hover:opacity-100"><X size={18} /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
