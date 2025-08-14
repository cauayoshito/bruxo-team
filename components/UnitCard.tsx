// components/UnitCard.tsx
import Image from "next/image";
import Link from "next/link";
import type { UnitDetail } from "@/data/units";
import { waLink } from "@/lib/whatsapp";

export default function UnitCard({ unit }: { unit: UnitDetail }) {
  // fallbacks
  const hero = unit.heroImage ?? "/images/unidades/placeholder.jpg";
  const address = unit.address ?? "Endereço em breve";
  const mapQuery = unit.mapQuery ?? null;
  const wa = unit.whatsapp ?? null;

  return (
    <div className="card p-5 flex flex-col gap-4">
      <Link
        href={`/unidades/${unit.slug}`}
        className="block aspect-video rounded-xl overflow-hidden bg-white/5"
        aria-label={`Abrir página da ${unit.name}`}
      >
        <Image
          src={hero} // sempre string
          alt={`Foto da ${unit.name}`}
          width={1200}
          height={800}
          className="w-full h-full object-cover"
          priority={false}
        />
      </Link>

      <div className="flex-1">
        <h3 className="h3">{unit.name}</h3>
        <p className="p mt-2">{address}</p>

        {mapQuery && (
          <div className="mt-4">
            <iframe
              className="w-full h-40 rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              title={`Mapa da ${unit.name}`}
            />
          </div>
        )}
      </div>

      <div className="mt-2 flex gap-3">
        {wa ? (
          <a
            className="btn-primary flex-1 text-center"
            href={waLink(wa, `Quero treinar na ${unit.name}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscrever no WhatsApp
          </a>
        ) : (
          <button className="btn-primary flex-1 opacity-60 cursor-not-allowed" disabled>
            WhatsApp indisponível
          </button>
        )}

        <Link className="btn-secondary" href={`/unidades/${unit.slug}`}>
          Detalhes
        </Link>
      </div>
    </div>
  );
}
