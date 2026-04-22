import { 
  Split, 
  Scissors, 
  FileArchive, 
  Image as ImageIcon, 
  FileText, 
  Type, 
  Lock, 
  Unlock 
} from "lucide-react";
import { GlassCard } from "@/shared/components/ui/GlassCard";
import { cn } from "@/shared/lib/utils";

const TOOLS = [
  {
    title: "Unir PDF",
    description: "Combina múltiples archivos PDF en un solo documento. Rápido y seguro.",
    icon: Split,
    color: "text-brand-turquoise",
    bgColor: "bg-brand-turquoise/10",
  },
  {
    title: "Dividir PDF",
    description: "Extrae páginas o divide un PDF en varios archivos más pequeños.",
    icon: Scissors,
    color: "text-brand-magenta",
    bgColor: "bg-brand-magenta/10",
  },
  {
    title: "Comprimir PDF",
    description: "Reduce el tamaño de tus archivos PDF sin perder calidad.",
    icon: FileArchive,
    color: "text-brand-turquoise",
    bgColor: "bg-brand-turquoise/10",
  },
  {
    title: "PDF a JPG",
    description: "Convierte páginas de PDF en imágenes JPG de alta calidad.",
    icon: ImageIcon,
    color: "text-brand-magenta",
    bgColor: "bg-brand-magenta/10",
  },
  {
    title: "JPG a PDF",
    description: "Crea documentos PDF a partir de imágenes JPG.",
    icon: FileText,
    color: "text-brand-turquoise",
    bgColor: "bg-brand-turquoise/10",
  },
  {
    title: "Editar PDF",
    description: "Añade texto, imágenes y formas a tus documentos PDF.",
    icon: Type,
    color: "text-brand-magenta",
    bgColor: "bg-brand-magenta/10",
  },
  {
    title: "Proteger PDF",
    description: "Añade contraseñas y cifrado a tus archivos PDF.",
    icon: Lock,
    color: "text-brand-turquoise",
    bgColor: "bg-brand-turquoise/10",
  },
  {
    title: "Desbloquear PDF",
    description: "Elimina contraseñas y restricciones de archivos PDF.",
    icon: Unlock,
    color: "text-brand-magenta",
    bgColor: "bg-brand-magenta/10",
  },
];

export function FeaturesGrid() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TOOLS.map((tool, index) => (
          <GlassCard 
            key={index} 
            className="group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className={cn(
              "mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
              tool.bgColor,
              tool.color
            )}>
              <tool.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">{tool.title}</h3>
            <p className="text-xs leading-relaxed text-slate-500">
              {tool.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
