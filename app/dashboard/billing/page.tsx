"use client";

import React from 'react';
import { Wrench } from 'lucide-react';

export default function BillingPage() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-8">
      {/* Contenido Difuminado */}
      <div className="blur-[6px] opacity-40 pointer-events-none select-none">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-8">Planes y Facturación</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Plan Básico</h3>
            <p className="text-4xl font-black text-slate-900 mb-6">$0<span className="text-sm text-slate-500 font-medium">/mes</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-2 items-center"><div className="w-5 h-5 bg-brand-turquoise rounded-full"></div><span className="h-4 bg-slate-200 w-32 rounded"></span></li>
              <li className="flex gap-2 items-center"><div className="w-5 h-5 bg-brand-turquoise rounded-full"></div><span className="h-4 bg-slate-200 w-40 rounded"></span></li>
            </ul>
            <button className="w-full bg-slate-100 h-12 rounded-xl"></button>
          </div>
          <div className="bg-white border-2 border-brand-turquoise rounded-3xl p-8 relative">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Plan Pro</h3>
            <p className="text-4xl font-black text-slate-900 mb-6">$15<span className="text-sm text-slate-500 font-medium">/mes</span></p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-2 items-center"><div className="w-5 h-5 bg-brand-mustard rounded-full"></div><span className="h-4 bg-slate-200 w-36 rounded"></span></li>
              <li className="flex gap-2 items-center"><div className="w-5 h-5 bg-brand-mustard rounded-full"></div><span className="h-4 bg-slate-200 w-48 rounded"></span></li>
              <li className="flex gap-2 items-center"><div className="w-5 h-5 bg-brand-mustard rounded-full"></div><span className="h-4 bg-slate-200 w-32 rounded"></span></li>
            </ul>
            <button className="w-full bg-brand-turquoise h-12 rounded-xl"></button>
          </div>
        </div>
      </div>

      {/* Modal Centralizado */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200 p-10 rounded-[2rem] shadow-2xl max-w-lg w-full">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Wrench className="w-8 h-8" strokeWidth={2} />
          </div>
          <span className="mb-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
            En Construcción
          </span>
          <h1 className="mb-4 text-2xl font-[1000] text-slate-900 tracking-tight">
            Módulo de Facturación
          </h1>
          <p className="text-slate-500 font-medium text-sm leading-relaxed">
            Estamos integrando un sistema de pagos seguro. Podrás gestionar tus suscripciones PRO desde aquí muy pronto.
          </p>
        </div>
      </div>
    </div>
  );
}
