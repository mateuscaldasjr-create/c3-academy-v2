import React from 'react';
import { User, Key, Bell, Shield } from 'lucide-react';

export function Settings() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="glass-panel p-8 rounded-3xl border border-white/10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
            <User size={32} />
          </div>
          <div>
            <h3 className="text-white font-bold">Perfil do Mordomo</h3>
            <p className="text-white/40 text-xs tracking-tight">Gerencie suas credenciais de acesso.</p>
          </div>
        </div>
        <div className="space-y-4">
          <button className="w-full bg-white/5 py-4 rounded-xl border border-white/5 text-sm text-left px-6 hover:bg-white/10 transition-all flex justify-between items-center text-white/60">
            Alterar Senha <Key size={16} />
          </button>
          <button className="w-full bg-white/5 py-4 rounded-xl border border-white/5 text-sm text-left px-6 hover:bg-white/10 transition-all flex justify-between items-center text-white/60">
            Segurança da Conta <Shield size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
