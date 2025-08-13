// components/UnitCard.tsx
import Image from "next/image";
import { Unit } from "@/data/units";
import { waLink } from "@/lib/whatsapp";

export default function UnitCard({ unit }: { unit: Unit }) {
  return (
    <div className="card p-5 flex flex-col gap-4">
      {/* Foto da turma */}
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <Image
          src={unit.image}                      // ex.: /turmas/stiep.jpg
          alt={`Turma da ${unit.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={unit.id === "stiep"}        // carrega a primeira mais rápido
        />
      </div>

      {/* Conteúdo */}
      <div className="flex-1">
        <h3 className="h3">{unit.name}</h3>
        <p className="p mt-2">{unit.address}</p>

        {/* Mapa embutido */}
        <div className="mt-4">
          <iframe
            className="w-full h-40 rounded-xl border-0"
            loading="lazy"
            title={`Mapa da ${unit.name}`}
            referrerPolicy="no-referrer-when-downgrade"
            src={unit.mapEmbed}                 // já vem pronto do data/units
          />
        </div>
      </div>

      {/* CTA WhatsApp */}
      <a
        className="btn-primary mt-2 text-center"
        href={waLink(unit.whatsapp, `Quero treinar na ${unit.name}`)}
      >
        Inscreva-se nessa unidade
      </a>
    </div>
  );
}
