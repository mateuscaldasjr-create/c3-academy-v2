import React from 'react';
import { User, LogOut, Shield, Bell, ChevronRight } from 'lucide-react';
import { supabase } from '../supabaseClient';

export function Settings() {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="glass-panel p-10 rounded-[3rem] border border-white/10">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-[2rem] bg-c3gold/10 border border-c3gold/20 flex items-center justify-center">
            <User size={40} className="text-c3gold" />
          </div>
          <div>
            <h3 className="text-2xl font-serif text-white">Perfil do Steward</h3>
            <p className="text-white/40">Gerencie sua identidade na C3 Academy.</p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: 'Segurança da Conta', icon: Shield },
            { label: 'Notificações Push', icon: Bell },
          ].map((item, i) => (
            <button key={i} className="w-full flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-4">
                <item.icon className="text-white/20 group-hover:text-c3gold" size={20} />
                <span className="text-white/80 font-medium">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-white/10 group-hover:text-white" />
            </button>
          ))}

          <button 
            onClick={handleSignOut}
            className="w-full flex items-center gap-4 p-6 bg-red-500/5 rounded-2xl border border-red-500/10 text-red-400 hover:bg-red-500/10 transition-all font-bold mt-6"
          >
            <LogOut size={20} /> SAIR DO SISTEMA
          </button>
        </div>
      </div>
    </div>
  );
}
