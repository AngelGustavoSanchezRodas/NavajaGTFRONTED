"use client";

import React, { useState } from 'react';
import { UrlShortenerTool } from '@/features/links/components/UrlShortenerTool';
import BiolinkBuilder from '@/features/dashboard/components/BiolinkBuilder';
import { WifiQrGenerator } from '@/features/tools/components/WifiQrGenerator';
import { GlassCard } from '@/shared/components/ui/GlassCard';
import { Link, Image as ImageIcon, Wifi } from 'lucide-react';

export default function DashboardPage() {
  const [activeTool, setActiveTool] = useState('shortener');

  // Diccionario de Herramientas Completas
  const tools = [
    { id: 'shortener', name: 'Acortador de Enlaces', icon: Link, component: <UrlShortenerTool /> },
    { id: 'biolink', name: 'Constructor Biolink', icon: ImageIcon, component: <BiolinkBuilder /> },
    { id: 'wifi', name: 'Generador QR Wi-Fi', icon: Wifi, component: <WifiQrGenerator /> },
  ];

  const activeComponent = tools.find(t => t.id === activeTool)?.component || <UrlShortenerTool />;

  return (
    <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto py-10 px-4">
      <header className="space-y-2">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Mi Workspace</h1>
        <p className="text-slate-500">Gestiona tus enlaces y herramientas digitales en un solo lugar.</p>
      </header>

      {/* Herramienta Activa (Arriba) */}
      <section className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeComponent}
      </section>

      {/* Explorador de Herramientas (Abajo) */}
      <section className="w-full pt-8 border-t border-slate-200">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
          Explorar otras herramientas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.filter(t => t.id !== activeTool).map((tool) => (
            <button
              key={tool.id}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveTool(tool.id);
              }}
              className="text-left w-full transition-transform hover:scale-[1.02] active:scale-95"
            >
              <GlassCard className="p-6 flex items-center gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors">
                <div className="p-3 bg-brand-turquoise/10 rounded-xl text-brand-turquoise">
                  <tool.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{tool.name}</h4>
                  <p className="text-xs text-slate-500">Cambiar a esta herramienta</p>
                </div>
              </GlassCard>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}