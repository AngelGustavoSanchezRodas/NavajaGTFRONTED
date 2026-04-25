"use client";

import React from 'react';
import { GlassCard } from '@/shared/components/ui/GlassCard';

interface Props {
  text: string;
}

const QrCodeDisplay: React.FC<Props> = ({ text }) => {
  const qrUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/tools/qr?text=${encodeURIComponent(text)}`;

  const handleDownload = async () => {
    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `qr-${text.substring(0, 10)}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading QR code:', error);
    }
  };

  return (
    <GlassCard className="flex flex-col items-center justify-center space-y-6 max-w-sm mx-auto bg-white/40 backdrop-blur-xl border border-white/20">
      <div className="relative p-4 bg-white rounded-2xl shadow-inner border border-zinc-100">
        <img
          src={qrUrl}
          alt={`Código QR para ${text}`}
          className="w-48 h-48 rounded-lg"
          loading="lazy"
        />
        <div className="absolute inset-0 border-2 border-dashed border-indigo-200/50 rounded-2xl pointer-events-none -m-1" />
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-lg font-bold text-zinc-900">Tu Código QR</h3>
        <p className="text-xs text-zinc-500 max-w-[200px] truncate">
          Generado para: {text}
        </p>
      </div>

      <button
        onClick={handleDownload}
        className="w-full flex items-center justify-center space-x-2 py-3 px-6 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-all transform active:scale-95 shadow-lg shadow-zinc-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span>Descargar PNG</span>
      </button>
    </GlassCard>
  );
};

export default QrCodeDisplay;
