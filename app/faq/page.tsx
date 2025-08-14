// app/faq/page.tsx
import Link from "next/link";

export const metadata = {
  title: "FAQ — Bruxo Team",
  description:
    "Perguntas frequentes sobre aulas, níveis, uniforme, projetos sociais, competição, valores e contato das unidades da Bruxo Team.",
};

const WPP = {
  matriz: "5571991843706",
  stiep: "5571992813525",
  itapua: "5571984708998",
  itacare: "5571988644981",
};

function wa(phone: string, text: string) {
  const p = phone.replace(/\D/g, "");
  return `https://wa.me/${p}?text=${encodeURIComponent(text)}`;
}

const QA: { q: string; a: JSX.Element }[] = [
  {
    q: "Como faço uma aula experimental?",
    a: (
      <>
        Você pode agendar pelo WhatsApp da unidade:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <a className="link" href={wa(WPP.matriz, "Olá! Quero aula experimental na Matriz.")} target="_blank">
              Matriz (Stella Maris)
            </a>
          </li>
          <li>
            <a className="link" href={wa(WPP.stiep, "Olá! Quero aula experimental no Stiep.")} target="_blank">
              Stiep
            </a>
          </li>
          <li>
            <a className="link" href={wa(WPP.itapua, "Olá! Quero aula experimental em Itapuã.")} target="_blank">
              Itapuã
            </a>
          </li>
          <li>
            <a className="link" href={wa(WPP.itacare, "Olá! Quero aula experimental em Itacaré.")} target="_blank">
              Itacaré
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "Nunca treinei Jiu-Jitsu. Posso começar do zero?",
    a: (
      <>
        Sim! Temos turmas de <strong>MISTA</strong> e <strong>INICIANTES</strong> pensadas para quem está começando. O
        professor ajusta intensidade e técnica ao seu nível.
      </>
    ),
  },
  {
    q: "Qual a diferença entre KIMONO (GI) e NO-GI?",
    a: (
      <>
        <strong>Com kimono (GI)</strong> usa pegadas no tecido e controles específicos. <strong>NO-GI</strong> é sem
        kimono, com foco em alavancas e controle do corpo. Treinamos ambos; veja os horários de <em>NO-GI</em> na grade
        da unidade.
      </>
    ),
  },
  {
    q: "Tem aulas para crianças? A partir de que idade?",
    a: (
      <>
        Sim! As turmas <strong>KIDS</strong> começam a partir dos 3–4 anos (consulte a unidade). Trabalhamos disciplina,
        psicomotricidade e valores. Há também subdivisões por faixa etária (BABY, Kids 1/2, Infantil).
      </>
    ),
  },
  {
    q: "Existe turma feminina?",
    a: (
      <>
        Sim. Quando indicado como <strong>FEMININO</strong> na grade, a aula é exclusiva para mulheres. Você também pode
        treinar nas turmas MISTA, se preferir.
      </>
    ),
  },
  {
    q: "Quais são os horários?",
    a: (
      <>
        Os horários variam por unidade e projetos sociais. Acesse a unidade ou projeto:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <Link className="link" href="/unidades/matriz">
              Matriz (Stella Maris)
            </Link>
          </li>
          <li>
            <Link className="link" href="/unidades/stiep">
              Stiep
            </Link>
          </li>
          <li>
            <Link className="link" href="/unidades/itapua">
              Itapuã
            </Link>
          </li>
          <li>
            <Link className="link" href="/unidades/itacare">
              Itacaré
            </Link>
          </li>
          <li>
            <Link className="link" href="/projetos-sociais">
              Projetos Sociais
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "Preciso de kimono para a primeira aula?",
    a: (
      <>
        Não. Para a primeira aula, venha com roupa esportiva (camiseta seca-rápida e bermuda/legging sem zíper). O
        kimono pode ser comprado depois; podemos indicar modelos e tamanhos.
      </>
    ),
  },
  {
    q: "Quero competir. Como entro no time de competição?",
    a: (
      <>
        Fale com o professor da sua unidade. Temos treinos específicos de <strong>COMPETIÇÃO</strong> e orientação para
        inscrição, peso, regras e preparação física/mental.
      </>
    ),
  },
  {
    q: "Os projetos sociais têm custo?",
    a: (
      <>
        São iniciativas voltadas à comunidade, com modelos de gratuidade ou apoio. Detalhes de cada núcleo estão nas
        páginas dos projetos; se puder contribuir com doações/apoio, fale com a equipe.
      </>
    ),
  },
  {
    q: "Política de higiene e segurança",
    a: (
      <>
        Unhas curtas, kimono/roupa limpos, chinelo fora do tatame, sem acessórios pontiagudos. Informe lesões e
        condições médicas ao professor. Hidrate-se.
      </>
    ),
  },
  {
    q: "Qual a frequência ideal e em quanto tempo vejo resultado?",
    a: (
      <>
        Para iniciantes, recomendamos <strong>2–3 treinos por semana</strong>. Consistência &gt; intensidade.
        Em geral:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>2–4 semanas:</strong> adaptação, condicionamento e noções básicas.</li>
          <li><strong>1–3 meses:</strong> evolução técnica visível e mais confiança em rolas.</li>
          <li><strong>3–6 meses:</strong> ganho de força/resistência específicos e entendimento de jogo.</li>
        </ul>
        Se quiser acelerar, some aulas de <strong>NO-GI</strong>/técnica específica e converse com o professor sobre objetivos (performance, perda de peso, competição).
      </>
    ),
  },
  {
    q: "Tem estacionamento? Como chego?",
    a: (
      <>
        Verifique na página da sua unidade — há mapa e endereço. Em horários de pico, chegue com antecedência para
        estacionar com tranquilidade.
      </>
    ),
  },
  {
    q: "Valores e formas de pagamento",
    a: (
      <>
        Os valores podem variar por unidade/plano. Fale direto no WhatsApp:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <a className="link" href={wa(WPP.matriz, "Olá! Gostaria de saber valores na Matriz.")} target="_blank">
              Matriz (Stella Maris)
            </a>
          </li>
          <li>
            <a className="link" href={wa(WPP.stiep, "Olá! Gostaria de saber valores no Stiep.")} target="_blank">
              Stiep
            </a>
          </li>
          <li>
            <a className="link" href={wa(WPP.itapua, "Olá! Gostaria de saber valores em Itapuã.")} target="_blank">
              Itapuã
            </a>
          </li>
          <li>
            <a className="link" href={wa(WPP.itacare, "Olá! Gostaria de saber valores em Itacaré.")} target="_blank">
              Itacaré
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function Page() {
  return (
    <main>
      <section className="container py-16 section">
        <h1 className="h1">FAQ — Perguntas Frequentes</h1>
        <p className="p mt-3 opacity-80">
          Se não encontrar sua resposta aqui, fale com a gente pelo WhatsApp da unidade.
        </p>

        <div className="mt-8 space-y-3">
          {QA.map((item) => (
            <details
              key={item.q}
              className="card p-4 open:shadow-lg transition-shadow [&_summary]:cursor-pointer"
            >
              <summary className="font-semibold">{item.q}</summary>
              <div className="mt-3 text-sm leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          <a className="btn-primary" href={wa(WPP.matriz, "Olá! Quero falar com a Matriz.")} target="_blank">
            WhatsApp Matriz
          </a>
          <a className="btn-primary" href={wa(WPP.stiep, "Olá! Quero falar com o Stiep.")} target="_blank">
            WhatsApp Stiep
          </a>
          <a className="btn-primary" href={wa(WPP.itapua, "Olá! Quero falar com Itapuã.")} target="_blank">
            WhatsApp Itapuã
          </a>
          <a className="btn-primary" href={wa(WPP.itacare, "Olá! Quero falar com Itacaré.")} target="_blank">
            WhatsApp Itacaré
          </a>
        </div>
      </section>
    </main>
  );
}
