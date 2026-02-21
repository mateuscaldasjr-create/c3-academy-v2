import React from 'react';
import { User, Key, Bell, Shield } from 'lucide-react';

export function Settings() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-serif text-white">Configurações</h2>
        <p className="text-white/40 text-sm">Gerencie seu perfil e integrações.</p>
      </div>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="glass-panel p-8 rounded-2xl">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <User className="w-8 h-8 text-white/40" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Perfil de Usuário</h3>
              <p className="text-white/40 text-sm">Atualize sua foto e dados pessoais.</p>
            </div>
            <button className="ml-auto px-4 py-2 border border-white/10 rounded-lg text-sm hover:bg-white/5 transition-colors">
              Editar
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs text-white/40 uppercase">Nome Completo</label>
              <input 
                type="text" 
                value="Ricardo Silva" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-c3-gold/50 outline-none transition-colors"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-white/40 uppercase">Email</label>
              <input 
                type="email" 
                value="ricardo@c3academy.com" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-c3-gold/50 outline-none transition-colors"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* API Keys */}
        <div className="glass-panel p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <Key className="w-5 h-5 text-c3-gold" />
            <h3 className="text-lg font-medium text-white">Integrações & Chaves de API</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                <span className="text-sm font-mono text-white/80">GEMINI_API_KEY</span>
              </div>
              <span className="text-xs text-white/40 font-mono">••••••••••••••••aB3d</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 opacity-50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-sm font-mono text-white/80">STRIPE_SECRET_KEY</span>
              </div>
              <button className="text-xs text-c3-gold hover:underline">Conectar</button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-panel p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-6">
            <Bell className="w-5 h-5 text-white/60" />
            <h3 className="text-lg font-medium text-white">Notificações</h3>
          </div>
          
          <div className="space-y-4">
            {['Lembretes de Rituais', 'Alertas de Negócios', 'Novidades da Comunidade'].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-white/80">{item}</span>
                <div className="w-10 h-6 rounded-full bg-c3-gold/20 relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-c3-gold shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
