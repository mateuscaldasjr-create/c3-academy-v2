import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CaveMode } from './components/CaveMode';
import { RitualsTracker } from './components/RitualsTracker';
import { BusinessManager } from './components/BusinessManager';
import { Community } from './components/Community';
import { Settings } from './components/Settings';
import { FaithRituals } from './components/FaithRituals';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ChevronRight, Loader2 } from 'lucide-react';

function App() {
  const [session, setSession] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert("Erro ao entrar: " + error.message);
    }
    setLoading(false);
  };

  // TELA DE LOGIN (O QUE APARECE AGORA)
  if (!session) {
    return (
      <div className="min-h-screen bg-[#0A0F1D] flex items-center justify-center p-6 text-white font-sans relative overflow-hidden">
        {/* Luz de fundo dourada */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md bg-white/5 p-10 rounded-[2.5rem] border border-white/10 text-center backdrop-blur-xl z-10">
          <div className="w-20 h-20 bg-[#D4AF37] rounded-3xl mx-auto flex items-center justify-center text-[#0A0F1D] font-black text-4xl mb-6 shadow-lg shadow-[#D4AF37]/20">C3</div>
          <h1 className="text-3xl font-bold mb-2">C3 Academy</h1>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-10">The Steward's Path</p>
          
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 text-sm outline-none focus:border-[#D4AF37]/40 transition-all" 
                required
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#D4AF37] transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="Sua senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 text-sm outline-none focus:border-[#D4AF37]/40 transition-all" 
                required
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#D4AF37] text-[#0A0F1D] font-black py-5 rounded-2xl mt-4 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/10"
            >
              {loading ? <Loader2 className="animate-spin" /> : "ENTRAR NA CAVERNA"} <ChevronRight size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // DASHBOARD (O QUE APARECE APÓS LOGAR)
  return (
    <div className="flex h-screen bg-[#0A0F1D] text-white overflow-hidden font-sans">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden lg:ml-64">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'dashboard' && <BusinessManager />}
              {activeTab === 'cave-mode' && <CaveMode />}
              {activeTab === 'rituals' && <RitualsTracker />}
              {activeTab === 'faith' && <FaithRituals />}
              {activeTab === 'business' && <BusinessManager />}
              {activeTab === 'community' && <Community />}
              {activeTab === 'settings' && <Settings />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
