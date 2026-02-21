import React, { useState, useEffect } from 'react';
import { Plus, Flame, CheckCircle2, X, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { cn } from '../utils';
import { Toast } from './Toast';

export function FaithRituals() {
  const [habits, setHabits] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newHabit, setNewHabit] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(true);

  // Buscar rituais do Banco de Dados
  useEffect(() => {
    fetchRituals();
  }, []);

  async function fetchRituals() {
    const { data, error } = await supabase.from('rituals').select('*').order('created_at', { ascending: true });
    if (!error) setHabits(data || []);
    setLoading(false);
  }

  async function addRitual() {
    if (!newHabit) return;
    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase.from('rituals').insert([{ title: newHabit, user_id: user?.id }]);
    
    if (!error) {
      setNewHabit('');
      setIsModalOpen(false);
      fetchRituals();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }

  return (
    <div className="space-y-6">
      <Toast message="Ritual guardado com sucesso!" isVisible={showToast} onClose={() => setShowToast(false)} />

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif text-white">Rituais de Consagração</h2>
          <p className="text-white/40 text-sm">A disciplina é a base da autoridade.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-c3gold text-c3dark rounded-2xl font-black hover:scale-105 transition-all shadow-lg shadow-c3gold/20"
        >
          <Plus size={20} /> ADICIONAR RITUAL
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin text-c3gold" size={40} /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {habits.map((habit) => (
            <div key={habit.id} className="glass-panel p-8 rounded-[2.5rem] border border-white/5 hover:border-c3gold/30 transition-all group relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Flame size={60} /></div>
               <h3 className="text-xl font-bold text-white mb-4">{habit.title}</h3>
               <button className="w-full py-3 rounded-xl border border-white/10 text-white/40 group-hover:border-c3gold group-hover:text-c3gold transition-all flex items-center justify-center gap-2">
                 <CheckCircle2 size={18} /> MARCAR COMO FEITO
               </button>
            </div>
          ))}
        </div>
      )}

      {/* MODAL DE ADIÇÃO (DESIGN PREMIUM) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 backdrop-blur-md bg-black/60">
          <div className="w-full max-w-md bg-[#0D1224] border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif text-white">Novo Compromisso</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-white/20 hover:text-white"><X /></button>
            </div>
            <input 
              autoFocus
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
              placeholder="Ex: Leitura Bíblica (1h)"
              className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 text-white outline-none focus:border-c3gold/50 mb-6"
            />
            <button 
              onClick={addRitual}
              className="w-full bg-c3gold text-c3dark font-black py-4 rounded-2xl shadow-lg"
            >
              CONFIRMAR RITUAL
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
