import Hero from "@/components/Hero";
import UnitCard from "@/components/UnitCard";
import Schedule from "@/components/Schedule";
import Projects from "@/components/Projects";
import Turmas from "@/components/Turmas";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Unit from "@/data/units";

export default function Page(){
  return (
    <main>
      <Hero />
      <section id="unidades" className="container py-16">
        <h2 className="h2">Nossas Unidades</h2>
        <p className="p mt-2">Escolha onde quer treinar — Stiep, Itapuã ou Stella.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {units.map(u => <UnitCard key={u.slug} unit={u} />)}
        </div>
      </section>
      <Schedule units={units} />
      <Turmas />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
