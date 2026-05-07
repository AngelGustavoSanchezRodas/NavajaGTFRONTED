"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Crown, CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ProUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export function ProUpgradeModal({ isOpen, onClose, message }: ProUpgradeModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
          {/* Fondo clickeable para cerrar */}
          <div className="absolute inset-0" onClick={onClose} />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-md relative overflow-hidden rounded-2xl bg-white shadow-2xl scale-100 transition-all pointer-events-auto"
          >
              <div className="relative p-8">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-brand-mustard/10 text-brand-mustard">
                  <Crown size={32} strokeWidth={2.5} />
                </div>

                <h3 className="mb-2 text-2xl font-black text-slate-900 tracking-tight">
                  Desbloquea el Poder PRO
                </h3>
                
                {message && (
                  <p className="mb-6 rounded-2xl bg-slate-50 border border-slate-100 p-4 text-sm font-bold text-slate-700">
                    {message}
                  </p>
                )}

                <ul className="mb-8 space-y-4">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="text-brand-magenta" size={20} />
                    <span className="font-medium">Alias personalizados ilimitados</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="text-brand-magenta" size={20} />
                    <span className="font-medium">Límite de enlaces extendido</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-3">
                  <button className="w-full rounded-2xl bg-slate-900 px-5 py-4 text-sm font-black tracking-widest uppercase text-white transition hover:bg-slate-800 active:scale-[0.98]">
                    Ver Planes
                  </button>
                  <button 
                    onClick={onClose}
                    className="w-full rounded-2xl px-5 py-4 text-sm font-black tracking-widest uppercase text-slate-500 transition hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98]"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
