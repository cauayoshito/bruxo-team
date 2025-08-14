// components/UnitHeader.tsx
import Image from "next/image";
import { waLink } from "@/lib/whatsapp";
import type { UnitDetail } from "@/data/units";

export default function UnitHeader({ unit }: { unit: UnitDetail }) {
  return (
    <section className="container py-10 grid md:grid-cols-12 gap-6 items-center">
      <div className="md:col-span-5">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/5">
          {unit.heroImage ? (
            <Image
              src={unit.heroImage}
              alt={`Foto da ${unit.name}`}
              width={1200}
              height={900}
              className="w-full h-full object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full grid place-items-center text-sm opacity-70">
              Sem imagem
            </div>
          )}
        </div>
      </div>

      <div className="md:col-span-7">
        <h1 className="h1">{unit.name}</h1>
        {unit.description && <p className="p mt-3">{unit.description}</p>}
        {unit.address && <p className="p mt-2 opacity-80">{unit.address}</p>}

        <div className="mt-6 flex gap-3">
          {/* Só mostra o botão de WhatsApp se houver número */}
          {unit.whatsapp ? (
            <a
              className="btn-primary"
              href={waLink(unit.whatsapp!, `Olá! Quero treinar na ${unit.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
          ) : (
            <a className="btn-secondary" href="/#contato">
              Ver contatos
            </a>
          )}

          {/* Link para mapas, se houver query */}
          {unit.mapQuery && (
            <a
              className="btn-secondary"
              href={`https://www.google.com/maps?q=${encodeURIComponent(unit.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no mapa
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
