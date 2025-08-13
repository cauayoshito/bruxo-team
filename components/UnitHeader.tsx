import Image from "next/image";
import { UnitDetail } from "@/data/units";
import { waLink } from "@/lib/whatsapp";

export default function UnitHeader({ unit }: { unit: UnitDetail }) {
  return (
    <header className="section container py-10">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <h1 className="h1">{unit.name}</h1>
          <p className="p mt-3">{unit.description}</p>
          <p className="p mt-2 opacity-80">{unit.address}</p>
          <div className="mt-6 flex gap-3">
            <a
              className="btn-primary"
              href={waLink(unit.whatsapp, `Olá! Quero treinar na ${unit.name}.`)}
              target="_blank"
            >
              Falar no WhatsApp
            </a>
            <a className="btn-secondary" href="#horarios">Ver horários</a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="card overflow-hidden">
            <Image
              src={unit.heroImage}
              alt={`Foto da ${unit.name}`}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
