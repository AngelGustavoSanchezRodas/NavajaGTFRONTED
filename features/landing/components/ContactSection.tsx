import { CheckCircle2, MessageSquare, Mail, Phone } from "lucide-react";
import { GlassCard } from "@/shared/components/ui/GlassCard";

export function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <GlassCard className="overflow-hidden bg-brand-turquoise/5 p-8 md:p-12 border-none">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              ¿Necesitas ayuda o funciones personalizadas?
            </h2>
            <p className="mb-8 text-slate-600">
              Nuestro equipo de soporte está listo para ayudarte con cualquier duda sobre nuestras herramientas digitales.
            </p>
            
            <div className="mb-8 grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-brand-turquoise" />
                <span>Soporte 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-brand-turquoise" />
                <span>Consultoría técnica</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-brand-turquoise" />
                <span>API personalizada</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-brand-turquoise" />
                <span>Planes para empresas</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-brand-magenta px-8 py-3 font-bold text-white transition hover:bg-brand-magenta/90 shadow-lg shadow-brand-magenta/20">
                Contactar Soporte
              </button>
              <button className="rounded-xl bg-white px-8 py-3 font-bold text-brand-turquoise border border-brand-turquoise/20 transition hover:bg-slate-50">
                Ver Documentación
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="flex flex-col items-center justify-center p-6 text-center border-none bg-white/40">
                <MessageSquare className="mb-3 h-8 w-8 text-brand-magenta" />
                <span className="text-sm font-semibold">Chat en vivo</span>
              </GlassCard>
              <GlassCard className="flex flex-col items-center justify-center p-6 text-center border-none bg-white/40">
                <Mail className="mb-3 h-8 w-8 text-brand-turquoise" />
                <span className="text-sm font-semibold">Email</span>
              </GlassCard>
              <GlassCard className="flex flex-col items-center justify-center p-6 text-center border-none bg-white/40">
                <Phone className="mb-3 h-8 w-8 text-brand-mustard" />
                <span className="text-sm font-semibold">Teléfono</span>
              </GlassCard>
              <GlassCard className="flex flex-col items-center justify-center p-6 text-center border-none bg-white/40">
                <CheckCircle2 className="mb-3 h-8 w-8 text-brand-turquoise" />
                <span className="text-sm font-semibold">SLA Garantizado</span>
              </GlassCard>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
