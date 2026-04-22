import { CloudUpload, Settings, Download } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const STEPS = [
  {
    title: "1. Sube tu archivo",
    description: "Sube un archivo desde tu dispositivo o servicios en la nube.",
    icon: CloudUpload,
    color: "bg-brand-turquoise",
  },
  {
    title: "2. Selecciona la herramienta",
    description: "Elige la herramienta que necesites y ajusta los parámetros.",
    icon: Settings,
    color: "bg-brand-magenta",
  },
  {
    title: "3. Descarga el resultado",
    description: "Descarga tu archivo procesado de forma inmediata y segura.",
    icon: Download,
    color: "bg-brand-turquoise",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold">Cómo funciona NavajaGT</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={cn(
                "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg text-white",
                step.color
              )}>
                <step.icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold">{step.title}</h4>
                <p className="text-sm text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
