import Hero from "@/components/Hero";
import UnitCard from "@/components/UnitCard";
import Schedule from "@/components/Schedule";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { UNITS } from "@/data/units";
import { scheduleStella, scheduleStiep } from "@/data/schedule";

export default function Page() {
  return (
    <main>
      <Hero />

      <section id="unidades" className="container py-16 section">
        <h2 className="h2">Nossas Unidades</h2>
        <p className="p mt-2">
          Escolha onde quer treinar — Stiep, Itapuã ou Stella.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {UNITS.map((u) => (
            <UnitCard key={u.slug} unit={u} />
          ))}
        </div>
      </section>
      <About />
      <Schedule title="Bruxo Team — Stella" data={scheduleStella} />
<div className="mt-12" />
<Schedule title="Bruxo Team — Stiep" data={scheduleStiep} />

      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
