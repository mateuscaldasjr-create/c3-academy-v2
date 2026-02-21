import { createClient } from '@supabase/supabase-js';

// No Vite, usamos import.meta.env para acessar as variáveis de ambiente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificação de segurança para evitar erros silenciosos no console
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("⚠️ Erro: Variáveis VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY não encontradas!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
