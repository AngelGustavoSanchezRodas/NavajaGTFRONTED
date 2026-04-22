"use client";

import { FormEvent, useState } from "react";
import { Link, Loader2, QrCode } from "lucide-react";
import { GlassCard } from "@/shared/components/ui/GlassCard";

export function UrlShortenerTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard className="mx-auto w-full max-w-xl border-none p-6 sm:p-8 shadow-2xl shadow-brand-turquoise/10">
      <h3 className="text-xl font-bold text-slate-900 mb-2">Acortador Rápido</h3>
      <p className="text-sm text-slate-500 mb-6">Genera links rastreables y seguros en milisegundos.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative flex items-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Link className="h-4 w-4 text-slate-400" />
          </div>
          <input
            id="shortener-url"
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Pega tu enlace largo aquí..."
            className="h-14 w-full rounded-2xl bg-white/50 pl-12 pr-4 text-base text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-brand-turquoise/20 placeholder:text-slate-400"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-brand-turquoise px-8 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Procesando</span>
            </>
          ) : (
            <>
              <QrCode className="h-4 w-4 transition-transform group-hover:rotate-12" />
              <span>Acortar ahora</span>
            </>
          )}
        </button>
      </form>
    </GlassCard>
  );
}
