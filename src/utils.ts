import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Função 'cn' (Class Name): 
 * Une classes CSS de forma inteligente, evitando duplicidade 
 * e garantindo que o design dourado da C3 não quebre.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
