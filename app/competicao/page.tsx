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
  // 👉 Troque pelos nomes reais que você já colocou em /public
  const IMAGES = [
    { src: "/competidores/c01.jpg", alt: "Atleta da Bruxo Team em competição" },
    { src: "/competidores/c02.jpg", alt: "Final de luta" },
    { src: "/competidores/c03.jpg", alt: "Pódio da equipe" },
    { src: "/competidores/c04.jpg", alt: "Raspe e estabiliza" },
    { src: "/competidores/c05.jpg", alt: "Chamada de peso" },
    { src: "/competidores/c06.jpg", alt: "Guarda fechada" },
    { src: "/competidores/c07.jpg", alt: "Chave de braço" },
    { src: "/competidores/c08.jpg", alt: "Arbitragem e atletas" },
    { src: "/competidores/c09.jpg", alt: "Foto oficial da equipe" },
    { src: "/competidores/c10.jpg", alt: "Entrada no tatame" },
    { src: "/competidores/c11.jpg", alt: "Medalhas" },
    { src: "/competidores/c12.jpg", alt: "Guarda borboleta" },
    { src: "/competidores/c13.jpg", alt: "Controle lateral" },
    { src: "/competidores/c14.jpg", alt: "Pódio faixa colorida" },
    { src: "/competidores/c15.jpg", alt: "Bruxo Team reunida" },
  ];

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
          Arrasta pro lado ou passa o mouse pra pausar — no mobile, deslize.
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
