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
    <GlassCard className="mx-auto w-full max-w-3xl border-none p-2 shadow-2xl shadow-brand-turquoise/10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex flex-1 items-center">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
            <Link className="h-5 w-5 text-slate-400" />
          </div>
          <input
            id="shortener-url"
            type="url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            placeholder="Pega tu enlace largo aquí..."
            className="h-16 w-full rounded-2xl bg-white/50 pl-14 pr-4 text-lg text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-brand-turquoise/20 placeholder:text-slate-400"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group relative flex h-16 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-brand-turquoise px-8 text-lg font-bold text-white transition-all hover:scale-[1.02] hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 sm:min-w-[200px]"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Procesando</span>
            </>
          ) : (
            <>
              <QrCode className="h-5 w-5 transition-transform group-hover:rotate-12" />
              <span>Acortar ahora</span>
            </>
          )}
        </button>
      </form>
    </GlassCard>
  );
}
