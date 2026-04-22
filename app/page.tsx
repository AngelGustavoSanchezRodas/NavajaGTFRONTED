import { BackgroundGlow } from "@/shared/components/ui/BackgroundGlow";
import { FeaturesGrid } from "@/features/landing/components/FeaturesGrid";
import { BenefitsSection } from "@/features/landing/components/BenefitsSection";
import { ContactSection } from "@/features/landing/components/ContactSection";
import { UrlShortenerTool } from "@/features/links/components/UrlShortenerTool";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Glows */}
      <BackgroundGlow
        color="turquoise"
        className="left-[-10%] top-[-5%] h-[40rem] w-[40rem]"
      />
      <BackgroundGlow
        color="magenta"
        className="right-[-10%] top-[10%] h-[30rem] w-[30rem]"
      />
      <BackgroundGlow
        color="mustard"
        className="bottom-[20%] left-[10%] h-[25rem] w-[25rem]"
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center pt-28 pb-8 px-4 text-center">
          <h1 className="mb-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            NavajaGT: Tu <span className="text-brand-turquoise">Navaja Suiza</span> Digital
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-500">
            Herramientas online potentes y fáciles de usar para gestionar tus archivos digitales. 
            Organiza, convierte, edita y optimiza documentos en un solo lugar.
          </p>
          
          <div className="w-full">
            <UrlShortenerTool />
          </div>
        </section>

        {/* Features Grid */}
        <section className="pb-16 pt-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Herramientas Profesionales</h2>
            <p className="mt-4 text-slate-500">Todo lo que necesitas para gestionar tus archivos en un solo clic.</p>
          </div>
          <FeaturesGrid />
        </section>

        {/* Benefits Section */}
        <BenefitsSection />

        {/* Contact/Premium Section */}
        <ContactSection />
      </div>
    </main>
  );
}
