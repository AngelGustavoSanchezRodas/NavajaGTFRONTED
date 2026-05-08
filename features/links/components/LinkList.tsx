"use client";

import React, { useEffect, useState } from 'react';
import { 
  Link as LinkIcon, 
  ExternalLink, 
  Copy, 
  Check, 
  MoreVertical, 
  BarChart3, 
  Calendar,
  Globe,
  Trash2,
  Edit2
} from 'lucide-react';
import { toast } from 'sonner';
import { apiFetch } from '@/shared/lib/api';
import { EnlaceResponse } from '@/types/biolink';
import { EmptyState } from '@/shared/components/ui/EmptyState';
import { GlassCard } from '@/shared/components/ui/GlassCard';
import { cn } from '@/shared/lib/utils';
import { useCopyToClipboard } from '@/shared/hooks/useCopyToClipboard';
import { useRouter } from 'next/navigation';

export function LinkList() {
  const [links, setLinks] = useState<EnlaceResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const { copy, copied } = useCopyToClipboard();
  const [activeId, setActiveId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const data = await apiFetch<EnlaceResponse[]>('/api/management/links/list/');
        setLinks(data);
      } catch (err: unknown) {
        const error = err as { status?: number; message?: string };
        
        if (error.status === 401) {
          router.push('/login');
        } else if (error.status === 400) {
          toast.error(error.message || 'Solicitud incorrecta');
        } else {
          toast.error('Error al cargar enlaces');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  const handleCopy = (alias: string, id: string) => {
    const appUrl = window.location.origin;
    const url = `${appUrl}/${alias}`;
    setActiveId(id);
    copy(url);
    setTimeout(() => setActiveId(null), 2000);
  };

  if (loading) {
    return (
      <div className="w-full space-y-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-12 w-full bg-slate-200/50 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  if (links.length === 0) {
    return (
      <EmptyState
        icon={LinkIcon}
        title="No hay enlaces"
        description="No has creado ningún enlace todavía."
        actionLabel="Crear mi primer enlace"
        onAction={() => window.location.href = '/dashboard'}
      />
    );
  }

  return (
    <GlassCard className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Alias</th>
              <th className="px-6 py-4">URL Original</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Fecha</th>
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {links.map((link) => (
              <tr key={link.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-mono text-xs text-slate-400">
                  {link.id.substring(0, 8)}...
                </td>
                <td className="px-6 py-4 font-bold text-slate-900">
                  /{link.alias}
                </td>
                <td className="px-6 py-4 text-slate-500 truncate max-w-[200px]">
                  {link.urlOriginal || 'N/A'}
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider",
                    link.tipo === 'BIOLINK' ? "bg-brand-magenta/10 text-brand-magenta" : 
                    link.tipo === 'SIGNATURE' ? "bg-emerald-100 text-emerald-600" :
                    "bg-brand-turquoise/10 text-brand-turquoise"
                  )}>
                    {link.tipo}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500 text-xs font-medium">
                  {link.createdAt ? new Date(link.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Hoy'}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => handleCopy(link.alias, link.id)}
                      className="p-1.5 text-slate-400 hover:text-brand-turquoise transition-colors rounded-lg hover:bg-slate-100"
                      title="Copiar Enlace"
                    >
                      {activeId === link.id && copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                    <a 
                      href={`/${link.alias}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-brand-turquoise transition-colors rounded-lg hover:bg-slate-100"
                      title="Abrir en nueva pestaña"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
