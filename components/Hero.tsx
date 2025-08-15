// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20 lg:py-28">
        <div className="max-w-screen-md">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
            <span className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10">Desde 2012</span>
            <span className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10">+270 atletas competindo</span>
            <span className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10">Primeira aula grátis</span>
          </div>

          {/* Título */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-balance">
            Força, Técnica e União — Bruxo Team
          </h1>

          {/* Sub */}
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/80 leading-relaxed">
            Jiu-jitsu para iniciantes e competidores em Salvador. Treine pela manhã, tarde ou noite na Bruxo Team
            <span className="hidden sm:inline"> — Matriz (Stella Maris), Stiep e Itapuã.</span>
          </p>

          {/* Ações */}
          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#unidades"
              className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold bg-red-600 hover:bg-red-700 transition"
            >
              Agendar aula experimental
            </a>
            <a
              href="#horarios"
              className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
            >
              Ver horários
            </a>
          </div>

          {/* Lista de features */}
          <ul className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-white/70">
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Aulas para iniciantes e retorno</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Kids, Feminino, Mista e Competição</li>
            <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Matriz, Stiep e Itapuã</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
