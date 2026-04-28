import React from 'react';
import { LucideIcon, Plus } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ 
  icon: Icon, 
  title, 
  description, 
  actionLabel, 
  onAction 
}: EmptyStateProps) {
  return (
    <GlassCard className="flex flex-col items-center justify-center p-12 text-center rounded-[2.5rem] border-dashed border-2 border-slate-200 bg-slate-50/50">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
        <Icon className="w-10 h-10 text-slate-300" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{title}</h3>
      <p className="text-slate-500 font-medium max-w-sm mb-8">{description}</p>
      
      {actionLabel && (
        <button
          onClick={onAction}
          className="flex items-center gap-2 px-8 py-3.5 bg-brand-turquoise text-white rounded-2xl font-black uppercase tracking-widest hover:bg-brand-turquoise/90 transition-all active:scale-95 shadow-lg shadow-brand-turquoise/20"
        >
          <Plus size={18} />
          {actionLabel}
        </button>
      )}
    </GlassCard>
  );
}
