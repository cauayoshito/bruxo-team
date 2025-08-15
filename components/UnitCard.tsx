// components/UnitCard.tsx
"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import type { UnitDetail } from "@/data/units";

export default function UnitCard({ unit }: { unit: UnitDetail }) {
  return (
    <div className="rounded-2xl bg-neutral-900 p-5 shadow-lg flex flex-col">
      {/* Imagem principal */}
      {unit.heroImage && (
        <div className="overflow-hidden rounded-xl mb-4">
          <img
            src={unit.heroImage}
            alt={unit.name}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {/* Nome e descrição */}
      <h3 className="text-lg font-bold">{unit.name}</h3>
      {unit.description && (
        <p className="text-sm text-white/70 mt-1">{unit.description}</p>
      )}

      {/* Botões */}
      <div className="mt-4 flex items-center justify-between">
        {/* WhatsApp */}
        {unit.whatsapp && (
          <Link
            href={`https://wa.me/${unit.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold bg-green-600 hover:bg-red-700 transition"
          >
            WhatsApp
          </Link>
        )}

        {/* Instagram */}
        {unit.instagram && (
          <a
            href={unit.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram da ${unit.name}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition"
            title="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
}
