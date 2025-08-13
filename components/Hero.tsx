import Link from 'next/link';

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/40 to-background pointer-events-none" />
      <div className="container py-24 md:py-32">
        <p className="uppercase tracking-widest text-xs text-muted">Brazilian Jiu-Jitsu</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Força, Técnica e União — Bruxo Team
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Unindo Stiep, Itapuã e Stella com treinos que evoluem corpo, mente e espírito.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#unidades" className="btn-primary">Escolher unidade</a>
          <Link className="btn-outline" href="#contato">Falar no WhatsApp</Link>
        </div>
      </div>
    </section>
  );
}
