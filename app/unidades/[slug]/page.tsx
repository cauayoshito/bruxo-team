import { Metadata } from "next";
import { UNITS, UNITS_INDEX } from "@/data/units";
import UnitHeader from "@/components/UnitHeader";
import UnitInstructors from "@/components/UnitInstructors";
import UnitSchedule from "@/components/UnitSchedule";
import UnitGallery from "@/components/UnitGallery";

type Props = { params: { slug: string } };

// gera rotas estáticas
export async function generateStaticParams() {
  return UNITS.map((u) => ({ slug: u.slug }));
}

// SEO por unidade
export function generateMetadata({ params }: Props): Metadata {
  const unit = UNITS_INDEX[params.slug];
  if (!unit) return { title: "Bruxo Team" };
  return {
    title: unit.seo.title,
    description: unit.seo.description,
    openGraph: {
      title: unit.seo.title,
      description: unit.seo.description,
      images: [unit.heroImage],
      type: "website",
    },
  };
}

export default function UnitPage({ params }: Props) {
  const unit = UNITS_INDEX[params.slug];
  if (!unit) return null;

  return (
    <main>
      <UnitHeader unit={unit} />
      <UnitInstructors unit={unit} />
      <UnitSchedule unit={unit} />
      <UnitGallery unit={unit} />

      {/* Mapa e endereço */}
      <section className="container py-12">
        <h2 className="h2">Endereço</h2>
        <p className="p mt-2">{unit.address}</p>
        <div className="mt-4">
          <iframe
            className="w-full h-64 rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(unit.mapQuery)}&output=embed`}
          />
        </div>
      </section>
    </main>
  );
}
