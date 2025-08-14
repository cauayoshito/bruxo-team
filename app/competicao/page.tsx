// app/competicao/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treinos de Competição — Bruxo Team",
  description: "Informações e calendário dos treinos de competição.",
};

export default function CompeticaoPage() {
  return (
    <main className="container py-12">
      <h1 className="h1 mb-4">Treinos de Competição</h1>
      <p className="p mb-6">Calendário em breve. Entre em contato para participar dos treinos.</p>
      <a className="btn-primary" href="https://wa.me/5571XXXXXXXXX?text=Quero%20treinar%20competicao" target="_blank">
        Entrar em contato
      </a>
    </main>
  );
}
