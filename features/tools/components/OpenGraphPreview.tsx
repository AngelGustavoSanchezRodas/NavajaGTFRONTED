"use client";

import React, { useState, useEffect } from 'react';

interface OGData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

interface Props {
  url: string;
}

const OpenGraphPreview: React.FC<Props> = ({ url }) => {
  const [data, setData] = useState<OGData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOG = async () => {
      if (!url) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/tools/opengraph?url=${encodeURIComponent(url)}`);
        if (!res.ok) throw new Error('Error al obtener la previsualización');
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOG();
  }, [url]);

  if (loading) {
    return (
      <div className="w-full max-w-xl border border-zinc-200 rounded-xl overflow-hidden animate-pulse">
        <div className="w-full h-48 bg-zinc-200" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-zinc-200 rounded w-3/4" />
          <div className="h-3 bg-zinc-200 rounded w-full" />
          <div className="h-3 bg-zinc-200 rounded w-5/6" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm">
        No se pudo cargar la previsualización de {url}
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl border border-zinc-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
      {data.image && (
        <div className="relative w-full h-48 overflow-hidden border-b border-zinc-100">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4 space-y-1">
        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider truncate">
          {new URL(url).hostname}
        </p>
        <h4 className="text-base font-bold text-zinc-900 line-clamp-1">{data.title}</h4>
        <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default OpenGraphPreview;
