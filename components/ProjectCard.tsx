"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export type Unit = {
  slug: string;
  name: string;
  subtitle?: string;
  address?: string;
  image?: string;
  whatsapp?: string;
};

export default function UnitCard({ unit }: { unit: Unit }) {
  // Usa UrlObject por causa do typedRoutes
  const href = {
    pathname: "/unidades/[slug]" as const,
    query: { slug: unit.slug },
  };

  return (
    <div className="rounded-2xl bg-neutral-900 p-5 shadow-lg flex flex-col">
      {/* BLOCO CLICÁVEL */}
      <Link href={href} className="group block">
        {unit.image && (
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={unit.image}
              alt={unit.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        )}
        <h3 className="text-lg font-bold group-hover:underline">{unit.name}</h3>
        {unit.subtitle && <p className="text-sm text-white/70">{unit.subtitle}</p>}
        {unit.address && (
          <p className="text-sm text-white/70 mt-1 flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {unit.address}
          </p>
        )}
      </Link>

      {/* AÇÕES */}
      <div className="mt-4 flex items-center justify-between">
        {unit.whatsapp && (
          <Link
            href={`https://wa.me/${String(unit.whatsapp).replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold bg-red-600 hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500/60"
          >
            <Phone className="h-5 w-5 mr-2" /> WhatsApp
          </Link>
        )}
      </div>
    </div>
  );
}
