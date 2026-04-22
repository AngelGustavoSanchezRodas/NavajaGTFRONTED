import { 
  FileStack, 
  Scissors, 
  Minimize2, 
  FileImage, 
  FileText, 
  FilePenLine, 
  Lock, 
  Unlock,
  RotateCw,
  Type,
  Search,
  FileCode,
  Image as ImageIcon,
  Zap,
  Globe,
  Trash2,
  ShieldCheck
} from "lucide-react";
import { GlassCard } from "@/shared/components/ui/GlassCard";
import { cn } from "@/shared/lib/utils";

const TOOLS = [
  {
    title: "Unir PDF",
    description: "Combina múltiples archivos PDF en un solo documento. Rápido y seguro.",
    icon: FileStack,
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
    icon: Minimize2,
    color: "text-brand-turquoise",
    bgColor: "bg-brand-turquoise/10",
  },
  {
    title: "PDF a JPG",
    description: "Convierte páginas de PDF en imágenes JPG de alta calidad.",
    icon: FileImage,
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
    icon: FilePenLine,
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
  {
    title: "Rotar PDF",
    description: "Gira las páginas de tu PDF a la orientación deseada.",
    icon: RotateCw,
    color: "text-brand-turquoise",
    bgColor: "bg-brand-turquoise/10",
  },
  {
    title: "Marca de Agua",
    description: "Añade texto o imágenes como marca de agua a tus PDF.",
    icon: Type,
    color: "text-brand-magenta",
    bgColor: "bg-brand-magenta/10",
  },
  {
    title: "OCR PDF",
    description: "Convierte PDFs escaneados en texto editable.",
    icon: Search,
    color: "text-brand-turquoise",
    bgColor: "bg-brand-turquoise/10",
  },
  {
    title: "HTML a PDF",
    description: "Convierte páginas web y código HTML a formato PDF.",
    icon: FileCode,
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
            className="group flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer border-slate-100/50"
          >
            <div className={cn(
              "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110",
              tool.bgColor,
              tool.color
            )}>
              <tool.icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-slate-900">{tool.title}</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              {tool.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
