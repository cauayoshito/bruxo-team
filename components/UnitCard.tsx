import Image from "next/image";
import Link from "next/link";
import { UnitDetail } from "@/data/units";
import { waLink } from "@/lib/whatsapp";

export default function UnitCard({ unit }: { unit: UnitDetail }) {
  return (
    <div className="card p-5 flex flex-col gap-4">
      <Link href={`/unidades/${unit.slug}`} className="block aspect-video rounded-xl overflow-hidden bg-white/5">
        <Image
          src={unit.heroImage}
          alt={`Foto da ${unit.name}`}
          width={1200}
          height={800}
          className="w-full h-full object-cover"
          priority
        />
      </Link>

      <div className="flex-1">
        <h3 className="h3">{unit.name}</h3>
        <p className="p mt-2">{unit.address}</p>
        <div className="mt-4">
          <iframe
            className="w-full h-40 rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(unit.mapQuery)}&output=embed`}
          />
        </div>
      </div>

      <div className="mt-2 flex gap-3">
        <a className="btn-primary flex-1 text-center"
           href={waLink(unit.whatsapp, `Quero treinar na ${unit.name}`)}
           target="_blank">
          Inscrever no WhatsApp
        </a>
        <Link className="btn-secondary" href={`/unidades/${unit.slug}`}>
          Detalhes
        </Link>
      </div>
    </div>
  );
}
