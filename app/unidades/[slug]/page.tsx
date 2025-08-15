// app/unidades/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  UNITS,
  UNITS_INDEX,
  type UnitSlug,
  type UnitDetail,
} from "@/data/units";

import UnitHeader from "@/components/UnitHeader";
import UnitInstructors from "@/components/UnitInstructors";
import UnitSchedule from "@/components/UnitSchedule";
import UnitGallery from "@/components/UnitGallery";

type Props = { params: { slug: UnitSlug } };

export const dynamicParams = false;

export function generateStaticParams() {
  return UNITS.map((u) => ({ slug: u.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const unit = UNITS_INDEX[params.slug];
  if (!unit) {
    return { title: "Bruxo Team", description: "Unidade não encontrada." };
  }
  const title = unit.seo?.title ?? `${unit.name} — Bruxo Team`;
  const description = unit.seo?.description ?? `Página da ${unit.name}.`;
  const images = unit.heroImage ? [unit.heroImage] : [];
  return { title, description, openGraph: { title, description, images, type: "website" } };
}

export default function UnitPage({ params }: Props) {
  const unit: UnitDetail | undefined = UNITS_INDEX[params.slug];
  if (!unit) return notFound();

  return (
    <main>
      <UnitHeader unit={unit} />

      {(unit.whatsapp || unit.instagram) && (
        <section className="container pt-6">
          <div className="flex flex-wrap gap-3">
            {unit.whatsapp && (
              <a
                className="btn-primary"
                href={`https://wa.me/${unit.whatsapp}?text=${encodeURIComponent(
                  `Olá! Quero informações sobre a unidade ${unit.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            )}
            {unit.instagram && (
              <a
                className="btn-secondary"
                href={unit.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            )}
          </div>
        </section>
      )}

      <UnitInstructors unit={unit} />
      <UnitSchedule unit={unit} />
      <UnitGallery unit={unit} />

      {(unit.address || unit.mapQuery) && (
        <section className="container py-12">
          <h2 className="h2">Endereço</h2>
          {unit.address && <p className="p mt-2">{unit.address}</p>}
          {unit.mapQuery && (
            <div className="mt-4">
              <iframe
                className="w-full h-64 rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(unit.mapQuery)}&output=embed`}
              />
            </div>
          )}
        </section>
      )}
    </main>
  );
}
