// components/Hero.tsx
import { waLink } from "@/lib/whatsapp";

const WHATSAPP_GERAL = "5571999990000"; // troque quando tiver

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* fundo opcional: suba /public/hero.jpg se quiser */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background" />
      </div>

      <div className="container mx-auto px-4 relative py-24 md:py-32">
        <p className="uppercase tracking-widest text-xs text-white/70">Brazilian Jiu-Jitsu</p>
        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">
          Força, Técnica e União — <br/>Bruxo Team
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          Unindo Stiep, Itapuã e Stella com treinos que evoluem corpo, mente e espírito.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#unidades" className="btn-primary">Escolher unidade</a>
          <a className="btn-outline" href={waLink(WHATSAPP_GERAL, "Olá! Quero saber mais sobre os treinos da Bruxo Team.")}>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
