import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="container py-16 section">
      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* texto */}
        <div className="md:col-span-7">
          <h2 className="h2">Quem somos</h2>
          <p className="p mt-4">
            <strong>Fundada em 2019 pelo professor Tiago “Bruxo”, a Bruxo Team
            Jiu-Jitsu nasceu do sonho de construir mais do que uma academia:
            uma verdadeira família dentro das artes marciais.</strong> Com uma
            trajetória que começou em 1995, Tiago mergulhou no universo do
            Jiu-Jitsu com disciplina e paixão, trilhando um longo caminho como
            aluno, competidor e professor.
          </p>
          <p className="p mt-4">
            Guiada por valores como <strong>respeito, humildade e persistência</strong>,
            a Bruxo Team rapidamente se destacou pela formação de atletas
            comprometidos — dos iniciantes aos competidores de alto rendimento.
            A equipe <strong>cresceu e se consolidou em Salvador</strong>, atraindo alunos
            de diferentes idades e histórias, sempre com o objetivo de
            <strong> transformar vidas por meio do esporte</strong>.
          </p>
          <p className="p mt-4">
            Hoje, a Bruxo Team representa não apenas uma equipe de Jiu-Jitsu,
            mas um <strong>movimento de fortalecimento pessoal e coletivo</strong>, onde
            cada treino é uma oportunidade de evolução <strong>dentro e fora do
            tatame</strong>.
          </p>
        </div>

        {/* imagem – use a arte “quem somos” que você enviou */}
        <div className="md:col-span-5">
          <div className="card overflow-hidden">
            <Image
              src="/bg.jpeg"   // coloque o nome correto do arquivo no /public
              alt="Sobre a Bruxo Team Jiu-Jitsu"
              width={900}
              height={1200}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          {/* CTA opcional */}
          <a
            href="#contato"
            className="btn-primary mt-4 inline-flex"
          >
            Falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}
