// app/competicao/page.tsx
import CompetitorsMarquee from "@/components/CompetitorsMarquee";
import StatCounter from "@/components/StatCounter";
import CompetitorsCTA from "@/components/CompetitorsCTA";

export const metadata = {
  title: "Competição — Bruxo Team",
  description:
    "Nossa equipe de competição reúne atletas dedicados de todas as idades e níveis. Veja a galeria e saiba como começar a competir com a Bruxo Team.",
};

export default function Page() {
  // agora puxa de /public/pro/1.jpeg ... /pro/15.jpeg
  const IMAGES = Array.from({ length: 15 }, (_, i) => ({
    src: `/pro/${i + 1}.jpeg`,
    alt: `Competidor ${i + 1} — Bruxo Team`,
  }));

  return (
    <main>
      {/* Hero simples */}
      <section className="container py-16 section">
        <h1 className="h1">Competição — Bruxo Team</h1>
        <p className="p mt-3 opacity-80">
          A competição faz parte do nosso DNA. Atletas da Bruxo Team sobem ao
          pódio com disciplina, estratégia e espírito de equipe — e você pode ser o próximo.
        </p>

        {/* KPIs rápidos */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold">
              +<StatCounter to={20} duration={1200} />
            </div>
            <p className="mt-1 opacity-80 text-sm">atletas ativos</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold">100%</div>
            <p className="mt-1 opacity-80 text-sm">apoio da equipe</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold">Todas</div>
            <p className="mt-1 opacity-80 text-sm">as idades & níveis</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold">Calendário</div>
            <p className="mt-1 opacity-80 text-sm">regional & nacional</p>
          </div>
        </div>
      </section>

      {/* Carrossel horizontal infinito */}
      <section className="container py-10">
        <h2 className="h2">Nosso time em ação</h2>
        <p className="p mt-2 opacity-80">
          Arrasta pro lado ou passa o mouse pra pausar no mobile, deslize.
        </p>
        <div className="mt-6">
          <CompetitorsMarquee images={IMAGES} height={220} speed={45} />
        </div>
      </section>

      {/* Bloco emocional + CTA */}
      <CompetitorsCTA whatsapp="5571991843706" />
    </main>
  );
}

