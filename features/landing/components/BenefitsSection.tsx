import Link from "next/link";
import { Upload, MousePointer2, Download } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const STEPS = [
  {
    title: "1. Sube tu archivo",
    description: "Sube un archivo desde tu dispositivo, Google Drive o Dropbox.",
    icon: Upload,
    color: "bg-brand-turquoise",
  },
  {
    title: "2. Selecciona la herramienta",
    description: "Elige entre docenas de herramientas para procesar tu archivo.",
    icon: MousePointer2,
    color: "bg-brand-magenta",
  },
  {
    title: "3. Descarga el resultado",
    description: "Obtén tu archivo procesado en segundos, listo para usar.",
    icon: Download,
    color: "bg-brand-turquoise",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Cómo funciona NavajaGT</h2>
          <div className="w-20 h-1.5 bg-brand-turquoise mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>
          
          {STEPS.map((step, index) => (
            <div 
              key={index} 
              className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-800/50 p-8 rounded-3xl border border-white/5 transition-all hover:bg-slate-800"
            >
              <div className={cn(
                "p-4 rounded-2xl shrink-0 shadow-xl text-white",
                step.color
              )}>
                <step.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link 
            href="/register" 
            className="group flex items-center gap-2 rounded-full bg-brand-turquoise px-8 py-4 text-sm font-bold text-white transition-all hover:shadow-[0_8px_30px_rgb(45,212,191,0.3)] hover:-translate-y-1"
          >
            Comenzar gratis ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
