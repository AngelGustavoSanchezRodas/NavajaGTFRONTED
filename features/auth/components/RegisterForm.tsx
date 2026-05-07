"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { authService } from "@/modules/auth/services/auth.service";
import { GlassCard } from "@/shared/components/ui/GlassCard";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/shared/contexts/AuthContext";

export function RegisterForm() {
  const { login } = useAuth();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const data = await authService.register(nombre, email, password);
      toast.success("¡Cuenta creada exitosamente! Bienvenido.");
      setIsSuccess(true);
      
      setTimeout(() => {
        if (data?.token) {
          login(data.token, data.user);
          window.location.href = "/";
        } else {
          window.location.href = "/login";
        }
      }, 2000);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "No se pudo crear la cuenta";
      toast.error(message);
      setIsLoading(false);
    }
  };

  return (
    <GlassCard className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="nombre" className="text-sm font-medium text-slate-700">
            Nombre completo
          </label>
          <input
            id="nombre"
            type="text"
            autoComplete="name"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
            className="w-full rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-turquoise focus:ring-2 focus:ring-brand-turquoise/40 text-base"
            placeholder="Tu nombre"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-turquoise focus:ring-2 focus:ring-brand-turquoise/40 text-base"
            placeholder="tu@correo.com"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-700"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="w-full rounded-xl border border-slate-200/80 bg-white/50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-turquoise focus:ring-2 focus:ring-brand-turquoise/40 text-base"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || isSuccess}
          className="w-full flex items-center justify-center gap-2 rounded-full bg-brand-turquoise px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {(isLoading || isSuccess) && <Loader2 className="h-4 w-4 animate-spin" />}
          {isSuccess ? "Redirigiendo..." : isLoading ? "Creando cuenta..." : "Crear cuenta"}
        </button>
      </form>
    </GlassCard>
  );
}
