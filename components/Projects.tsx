export default function Projects(){
  const items = [
    {
      title: "Jiu-Jitsu para Todos",
      desc: "Aulas gratuitas ou com valor simbólico para crianças e adolescentes de baixa renda, promovendo inclusão, disciplina e desenvolvimento físico e mental."
    },
    {
      title: "Mulheres no Tatame",
      desc: "Treinos focados em autoconfiança, condicionamento e defesa pessoal, em um ambiente seguro e motivador para todas as idades."
    },
    {
      title: "Guerreiros da Comunidade",
      desc: "Eventos beneficentes e mutirões com instituições locais para arrecadar alimentos, roupas e brinquedos para famílias em vulnerabilidade."
    },
  ];
  return (
    <section id="projetos" className="container py-16">
      <h2 className="h2">Projetos Sociais</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((it)=>(
          <article key={it.title} className="card p-6">
            <h3 className="h3">{it.title}</h3>
            <p className="p mt-3">{it.desc}</p>
            <a className="btn-outline mt-6 inline-block" href="#contato">Apoiar iniciativa</a>
          </article>
        ))}
      </div>
    </section>
  );
}
