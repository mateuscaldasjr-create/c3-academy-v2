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

function App() {
  const [session, setSession] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="min-h-screen bg-[#0A0F1D] flex items-center justify-center p-6 text-white font-sans">
        <div className="w-full max-w-md bg-white/5 p-10 rounded-[2.5rem] border border-white/10 text-center backdrop-blur-xl">
          <div className="w-20 h-20 bg-[#D4AF37] rounded-3xl mx-auto flex items-center justify-center text-[#0A0F1D] font-black text-4xl mb-6 shadow-lg shadow-[#D4AF37]/20">C3</div>
          <h1 className="text-3xl font-bold mb-8">C3 Academy</h1>
          <div className="space-y-4">
             <p className="text-white/60 text-sm">Bem-vindo ao Portal da Mordomia.</p>
             <button 
               onClick={() => alert("Acesse o painel do Supabase para configurar seu login.")}
               className="w-full bg-[#D4AF37] text-[#0A0F1D] py-4 rounded-xl font-bold hover:brightness-110 transition-all"
             >
               ENTRAR NA CAVERNA
             </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#0A0F1D] text-white overflow-hidden font-sans">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      
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
              {activeTab === 'cave' && <CaveMode />}
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
