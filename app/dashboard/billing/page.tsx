"use client";

import React from 'react';
import { Wrench } from 'lucide-react';

export default function BillingPage() {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto py-16 px-6 lg:px-10 min-h-[60vh] justify-center items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="mb-6 p-6 rounded-full bg-slate-100 text-slate-400">
        <Wrench className="w-16 h-16" strokeWidth={1.5} />
      </div>
      <span className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-widest text-amber-600">
        Próximamente
      </span>
      <h1 className="mb-4 text-3xl font-[1000] text-slate-900 tracking-tight">
        Panel de Facturación
      </h1>
      <p className="max-w-md text-slate-500 font-medium text-lg leading-relaxed">
        Estamos construyendo un panel avanzado para tu cuenta. Podrás gestionar tus planes y métodos de pago aquí muy pronto.
      </p>
    </div>
  );
}
